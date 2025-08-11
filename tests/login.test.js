import { test, expect } from '@playwright/test';
import { loginUser, registerUser } from './api';
import { loginData, registerData } from './data';

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

test.describe('Register API Tests', () => {
  for (const regCase of registerData) {
    test(`${regCase.description} (status ${regCase.expectedStatus})`, async ({ request }) => {
      const body = {};
      if (regCase.email) body.email = regCase.email;
      if (regCase.password) body.password = regCase.password;

      const response = await registerUser(request, body);
      expect(response.status()).toBe(regCase.expectedStatus);

      const responseBody = await response.json();

      if (regCase.expectedStatus === 200) {
        expect(responseBody.token).toBeTruthy();
        expect(responseBody.id).toBeTruthy();
      } else {
        expect(responseBody.error).toBeTruthy();
      }
    });
  }
});