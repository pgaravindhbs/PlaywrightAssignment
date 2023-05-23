# PlaywrightAssignment

The folder contains basic code for 1) Opening Browserstack; 2) Logging into Browserstack; 3) Opening Live session by selecting the OS & Browser version. 

The PlaywrightLocal folder has the test case that could instantiate 3 local browsers (Firefox, chrome and Safari) to run the above test. The playwright.config.js file contains the above browser combination. The test can be executed by 

**npx playwright test --headed**

The browserstack_local.spec.js contains the test logic which looks simple and straightforward. 

The PlaywrightBrowserstack folder contains the same file and it will execute the same test with 10 browsers in Browserstack automate. The test can be executed by 

**npm run browserstack-login**

The browserstack.config.js file contains the browserstack configurations as mentioned in the help doc -> https://www.browserstack.com/docs/automate/playwright/getting-started/nodejs


**General Observations**

1. Unlike Selenium based automation, playwright allows in-built capability to execute tests in parallel browser instances. The playwright.config.js naturally allows us to test in different browser combinations. 
2. Unlike Selenium, there was no need to write Wait, WebdriverWait, sleep & similar commands. This really made the testing smooth!
3. The tests also run quite fast compared to selenium. Running the same scripts of selenium in Playwright gave me atleast 3X to 4X improvement in speed of execution! 
4. Also, it was super easy to record our testcase and generate the test code (https://playwright.dev/docs/codegen-intro). This cut down the time we spend on figuring out what should be the right code for the appropriate browser function. Hence, the time to write the code & test was cut down from days (In case of selenium python) to mere hours

**Browserstack Observations**

1. The help doc is straightforward (https://www.browserstack.com/docs/automate/playwright/getting-started/nodejs) and integrating with Node.js and integrating my test script took less than 30 mins. 
2. Unlike Browserstack Java/Python for selenium automation, the steps for setting up a buildNumber was not straightforward - This led to the test cases of multiple builds/runs got clubbed under the same Browserstack automate test number
3. Similar to the above, there was no easy option to add browser-os combinations (in java/python selenium/appium, there is a way to generate the combinations and provide it in .yml file
(screenshot from https://www.browserstack.com/docs/automate/selenium/getting-started/java/integrate-your-tests-sdk)

<img width="770" alt="image" src="https://github.com/pgaravindhbs/PlaywrightAssignment/assets/130987461/fcc35a40-7972-42a5-8140-fefbb9486471">

4. The process to change the number of parallel workers was not apparent. In java/python the parallelperbrowser option in the .yml helps the users to assist the parallel usecase
5. Unlike Selenium, where the improvement of using Browserstack was significant, with playwright, most of the latest browser versions can be still be easily tested locally. The advantage of Browserstack still is testing in real devices (However in selenium, it also provides for speed/performance gain)
