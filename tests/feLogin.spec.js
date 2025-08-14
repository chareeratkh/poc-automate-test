import { test, expect } from '@playwright/test';
import { LoginPage } from './feLogin.page';

test('test ui', async({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.fillUserPassword('testuser', 'password');
    
    expect(await loginPage.getUsername()).toBe('testuser');
    expect(await loginPage.getPassword()).toBe('password');
});