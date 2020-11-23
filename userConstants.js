const userConstant = {
    
    launchOptions: {
        headless: false,
        slowMo: 100,
        //executablePath :   //can write the path of the chrome exe or another version of chromium file
        args: ["--disable-automation", "--no-sandbox", "--start-maximized"]
    },

    pageViewPort: {
        width: 1366,
        height: 720,
        deviceScaleFactor: 1,
    },

    pageLoadUntil: {
        waitUntil: "networkidle0"
    },

    normalWaitForTime: 2000

}

module.exports = userConstant;