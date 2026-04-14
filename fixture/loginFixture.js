import { test as base } from "@playwright/test";
import { LoginPage1 } from "../tests/pages/loginPage1";
import data from "../testData/adactinTestData.json";

export const Mytest = base.extend({
  loginFixture: async ({ page }, use) => {
    const loginObj = new LoginPage1(page);
    await loginObj.navigate(data.url);
    await loginObj.loginMethod(data.UN, data.Pwd, data.result);
    await use(page);
  },
});
