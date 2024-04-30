// login.spec.ts
//login-email-field
//oliver@example.com
//welcome

import { test, expect } from "@playwright/test";

import LoginPage from "./login";



test.describe("tests", () => {
    test("Case 1", async ({ page }) => {
        //await page.pause()
        const loginPage = new LoginPage(page);
        loginPage.login("oliver@example.com", "welcome")
        await page.getByTestId('navbar-username-label')
        //await expect(page.getByTestId('navbar-username-label')).toBeVisible()
        await expect(page.getByTestId('navbar-logout-link')).toBeVisible()
    })
});