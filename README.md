# POC Automate Test API

Automated API testing project using **Playwright** and **JavaScript**  
Demonstrates testing for login, registration, and user management APIs using [Reqres](https://reqres.in/).

---

## Tech Stack
- **Framework**: [Playwright](https://playwright.dev/)
- **Language**: JavaScript
- **API URL**: [https://reqres.in/](https://reqres.in/)

---

## Features
- Login
- Register
- GET User
- POST User

---

## Run Test

### Run all tests
```bash
npx playwright test
```

### Run tests with funtion
```bash
npx playwright test -g login
npx playwright test tests/login.test.js
```

### Run show report
```bash
npx playwright show-report
```