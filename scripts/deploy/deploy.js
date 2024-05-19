import puppeteer from 'puppeteer';
import { CheckUsernamePage, CPanelPage, FileManagerPage, LoginPage, UploadFilesPage } from './pages.js';
import { nav, indent } from './util.js';

/**
 * @typedef {Object} Credentials to log in to CPanel
 * @property {string} username
 * @property {string} password
 */

export class Deploy {
    /** Gets name of the file from path */
    filenameFactory = (path) => path.includes('/') ? path.split('/').pop() : path;

    constructor() {
        /** @type {Credentials | null} */
        this.USER = null;
        this.browser = null;
        this.page = null;
        this.startedAt = new Date();
    }

    /**
     * @param {Credentials} loginAs
     * @param {string} deployFilePath - path to packageZip to deploy
     * @returns {Promise<void>}
     */
    async init(loginAs, deployFilePath) {
        console.log('🚀 Starting deployment (' + this.filenameFactory(deployFilePath) + ')');
        this.USER = loginAs;
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        this.deployFilePath = deployFilePath;
        await this.page.setViewport({width: 1920, height: 1080});
        console.log('🌐 Opened browser (1920x1080)');
    }

    async close() {
        await this.browser.close();
        const toSeconds = (ms) => Math.floor(ms / 1000);
        console.log('🔒 Closed browser, total time: ' + toSeconds(new Date() - this.startedAt) + 's');
    }

    async run() {
        await this.loginToCPanel();
        await this.openFileManager();
        await this.openUploadFile();
        await this.uploadFile(this.deployFilePath);
        await this.openFileManager();
        await this.extractFile(this.filenameFactory(this.deployFilePath));
        console.log('🚢 Deployed!');
    }

    async loginToCPanel() {
        console.log('🔑 Logging in to CPanel (' + this.USER.username + ')');
        const checkUsernamePage = new CheckUsernamePage(this.page);
        await checkUsernamePage.open();
        await checkUsernamePage.initUsername(this.USER.username);
        await nav.waitFor(this.page, checkUsernamePage.submitToOpenLoginPage.bind(checkUsernamePage));
        console.log(indent('Checked username'));
        await this.page.screenshot({path: 'process-screenshots/1-opened-login.png'});

        const loginPage = new LoginPage(this.page);
        await loginPage.initUsername(this.USER.username);
        await loginPage.initPassword(this.USER.password);
        await nav.waitFor(this.page, loginPage.submitToOpenCPanel.bind(loginPage));
        await this.page.screenshot({path: 'process-screenshots/2-opened-cpanel.png'});
        console.log(indent('Logged in'));
    }

    async openFileManager() {
        const cPanelPage = new CPanelPage(this.page);
        await nav.waitFor(this.page, cPanelPage.openFileManager.bind(cPanelPage));
        await this.page.screenshot({path: 'process-screenshots/3-opened-file-manager.png'});
        console.log('📂 Opened File Manager page');
    }

    async openUploadFile() {
        const uploadFilePage = new UploadFilesPage(this.page);
        await nav.waitFor(this.page, uploadFilePage.openUploadFilePage.bind(uploadFilePage));
        await this.page.screenshot({path: 'process-screenshots/4-opened-upload-file-page.png'});
        console.log('📬 Opened upload file page');
    }

    /**
     * Uploads file to the server
     * @param {string} pathToFile - path to file to upload
     * @returns {Promise<void>}
     */
    async uploadFile(pathToFile) {
        const uploadFilesPage = new UploadFilesPage(this.page);
        console.log(indent('Uploading from path:'), pathToFile);
        await uploadFilesPage.uploadFile(pathToFile);
        await this.page.screenshot({path: 'process-screenshots/5-uploaded-file.png'});
        console.log(indent('Uploaded file'));
    }

    /**
     * Extracts file on the server
     * @param {string} filename
     * @returns {Promise<void>}
     */
    async extractFile(filename) {
        const fileManagerPage = new FileManagerPage(this.page);
        console.log(indent('Extracting file:'), filename);
        await fileManagerPage.extractFile(filename);
        await this.page.screenshot({path: 'process-screenshots/6-extracted-file.png'});
        console.log(indent('Extracted file'));
    }
}
