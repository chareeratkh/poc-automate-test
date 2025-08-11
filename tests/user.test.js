import { test, expect } from '@playwright/test';
import { getUserResponse, createUserResponse } from './api';
import { userList, postUserList } from './data';

test.describe('GET User API', () => {
  for (const user of userList) {
    test(`Validate GET user id=${user.id}`, async ({ request }) => {
      const response = await getUserResponse(request, user.id);
      expect(response.status()).toBe(user.expectedStatus);
      expect(response.statusText()).toBe(user.expectedStatusText);

      const body = await response.json();
      expect(body.data).toBeTruthy();
      expect(body.data.id).toBe(user.id);
      expect(body.data.email).toBe(user.email);
      expect(body.data.first_name).toBe(user.first_name);
      expect(body.data.last_name).toBe(user.last_name);
    });
  }
});

test.describe('POST Create User API', () => {
  for (const postBody of postUserList) {
    test(`Create user: ${postBody.name}`, async ({ request }) => {
      const response = await createUserResponse(request, postBody);
      expect(response.status()).toBe(201);

      const body = await response.json();
      expect(body.name).toBe(postBody.name);
      expect(body.job).toBe(postBody.job);
      expect(body.id).toBeTruthy();
      expect(body.createdAt).toBeTruthy();
    });
  }
});
