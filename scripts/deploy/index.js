import { Deploy } from './deploy.js';
import dotenv from 'dotenv';

// load .env variables
dotenv.config();
if (!process.env || !process.env.USERNAME || !process.env.PASSWORD) {
    console.error('🚨 Missing USERNAME or PASSWORD in .env file');
    process.exit(1);
}

const USER = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
};

(async () => {
    const deploy = new Deploy();
    await deploy.init(USER, getFilePathOrError());
    await deploy.run();
    await deploy.close();
})();

function getFilePathOrError() {
    if (process.argv.length < 3) {
        console.error('🚨 No file path provided, proper command `node ./index.js path/to/file.zip` or `pnpm run deploy path/to/file.zip`');
        process.exit(1);
    }
    return '../../out/' + process.argv[2];
}
