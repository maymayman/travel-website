'use strict';

let TIME_LIVE = parseInt(process.env.WEBSITE_SESSION_TIME_LIVE) || (24 * 60 * 60 * 1000); // 24 hours

module.exports = {
  parse: {
    serverURL: process.env.SERVER_URL || 'http://localhost:1337/api',
    appId: process.env.SERVER_APP_ID || 'MyAppId',
    javascriptKey: process.env.SERVER_JAVASCRIPT_KEY || 'MyJavascriptKey'
  },
  // https://www.npmjs.com/package/session-file-store#options
  fileStoreOpts: {
    path: process.env.WEBSITE_SESSION_FILE_PATH || './sessions',
    ttl: TIME_LIVE || 3600,
    retries: process.env.WEBSITE_SESSION_RETRIES || 5
  }
};
