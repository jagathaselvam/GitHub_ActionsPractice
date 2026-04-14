import { test } from "@playwright/test";
import { LoginPage1 } from "../tests/pages/loginPage1";
import { excelReader } from "../utils/excelReader";
import data from "../testData/adactinTestData.json";

const exceldata = excelReader();

for (let dd of exceldata) {
  test(`DataDriven Using Excel ${dd.userName} and ${dd.password}`, async ({
    page,
  }) => {
    const logObj = new LoginPage1(page);

    await logObj.navigate(data.url);
    await logObj.loginMethod(dd.userName, dd.password, dd.Result);
  });
}
