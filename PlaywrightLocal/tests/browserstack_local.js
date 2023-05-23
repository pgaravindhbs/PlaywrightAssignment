// @ts-check
const { test, expect } = require('@playwright/test');

test('test browserstack login', async ({ page },testInfo) => {

try{

  await page.evaluate(_ => {},`browserstack_executor: ${JSON.stringify({action: "setSessionName", arguments: {name:testInfo.project.name}})}`);
  await page.waitForTimeout(5000);

  await page.goto('https://www.browserstack.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Business Email' }).click();
  await page.getByRole('textbox', { name: 'Business Email' }).fill(process.env.browserstacktempusername1);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.browserstacktemppassword1);
  await page.getByRole('button', { name: 'Sign me in' }).click();
  await page.getByRole('button', { name: 'ios mac' }).click();
  await page.getByText('Ventura').click();
  await page.getByText('111').nth(1).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();

//  await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Exhausted all trials and hence exiting'}})}`);

  } catch (e) {
    console.log(e);
//    await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'failed',reason: 'Test failed due to some error'}})}`);

  }
});
