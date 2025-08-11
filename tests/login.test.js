import { test, expect } from '@playwright/test';
import { loginUser } from './api';
import { loginData } from './data';

test.describe('Login API Tests', () => {
  for (const loginCase of loginData) {
    test(`${loginCase.description} (status ${loginCase.expectedStatus})`, async ({ request }) => {
      const body = {};
      if (loginCase.email) body.email = loginCase.email;
      if (loginCase.password) body.password = loginCase.password;

      const response = await loginUser(request, body);
      expect(response.status()).toBe(loginCase.expectedStatus);

      const responseBody = await response.json();
      if (loginCase.expectedStatus === 200) {
        expect(responseBody.token).toBeTruthy();
      } else {
        expect(responseBody.error).toBeTruthy();
      }
    });
  }
});
