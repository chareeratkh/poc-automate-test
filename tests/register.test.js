import { test, expect } from '@playwright/test';
import { registerUser } from './api';
import { registerData } from './data';

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