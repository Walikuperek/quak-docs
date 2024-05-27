import { time } from './util.js';

export class CheckUsernamePage {
    url = 'https://adminpanel.webd.pl/';
    usernameInputSelector = '#input-login';
    submitBtnSelector = 'button[type="submit"]';

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(this.url);
    }

    async initUsername(username) {
        await this.page.type(this.usernameInputSelector, username);
    }

    async submitToOpenLoginPage() {
        await this.page.click(this.submitBtnSelector);
    }
}

export class LoginPage {
    usernameInputSelector = '#user';
    passwordInputSelector = '#pass';
    submitBtnSelector = '#login_submit';

    constructor(page) {
        this.page = page;
    }

    async initUsername(username) {
        await this.page.type(this.usernameInputSelector, username);
    }

    async initPassword(password) {
        await this.page.type(this.passwordInputSelector, password);
    }

    async submitToOpenCPanel() {
        await this.page.click(this.submitBtnSelector);
    }
}

export class CPanelPage {
    fileManagerPageUrlFactory = (cPanelUrl) => `${cPanelUrl}/filemanager/index.html`;

    constructor(page) {
        this.page = page;
    }

    async openFileManager() {
        await this.page.goto(this.fileManagerPageUrlFactory(this.page.url().split('/index.html')[0]));
    }
}

export class FileManagerPage {
    publicHtmlDirSelector = '.icon-publichtml';
    extractFileBtnSelector = '#action-extract';
    extractSubmitBtnSelector = '#extract_c .ft .default';
    fileManagerPageUrlFactory = (cPanelUrl) => `${cPanelUrl}/filemanager/index.html`;
    fileToExtractSelectorFactory = (filename) => `[title="${filename}"]`;

    constructor(page) {
        this.page = page;
    }

    async extractFile(filename) {
        await this.page.goto(this.fileManagerPageUrlFactory(this.page.url().split('/filemanager/')[0]));
        const publicHtmlDirElement = await this.page.waitForSelector(this.publicHtmlDirSelector);
        await publicHtmlDirElement.click();
        const fileToExtract = await this.page.waitForSelector(this.fileToExtractSelectorFactory(filename));
        await fileToExtract.click();
        const extractFilesBtn = await this.page.waitForSelector(this.extractFileBtnSelector);
        await extractFilesBtn.click();
        const extractSubmitBtn = await this.page.waitForSelector(this.extractSubmitBtnSelector);
        await extractSubmitBtn.click();
    }
}

export class UploadFilesPage {
    uploadFileInputSelector = 'input[type=file]';
    uploadFilePageUrlFactory = (cPanelUrl) => `${cPanelUrl}/upload-ajax.html?file=&fileop=&dir=%2Fhome%2Fmlodycyc%2Fpublic_html&dirop=&charset=&file_charset=&baseurl=&basedir=`;

    constructor(page) {
        this.page = page;
    }

    async openUploadFilePage() {
        await this.page.goto(this.uploadFilePageUrlFactory(this.page.url().split('/index.html')[0]));
    }

    async uploadFile(pathToFile) {
        const elementHandle = await this.page.$(this.uploadFileInputSelector);
        await elementHandle.uploadFile(pathToFile);
        await time.sleep(40_000);
    }
}
