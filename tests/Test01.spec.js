const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageobjects/LoginPage');       //Importing LoginPage class
//const { getExcelData } = require(' ');

test('Test01', async ({page}) =>               //Page is a fixture
{
    const username = 'um';
    const password = 'pwd';
    const loginPage = new LoginPage(page);       //Object of LoginPage class
    await loginPage.navigatetologinpage();
    await loginPage.Validlogin(username, password);

    await page.goto('https://gmail.com');       //Tab1
    await expect(page).toHaveTitle(/Gmail/i);

    /*const page2 = await page.context().newPage();       //Tab2
    await page2.goto('https://gmail.com');
    await expect(page2).toHaveTitle(/Gmail/i);

    const [googleWindow] = await Promise.all([          //new Window
    page.waitForEvent('popup'),
    page.locator('text=Login with Google').click()
    ]);
    await googleWindow.waitForLoadState();
    console.log(await googleWindow.url());
    */

});