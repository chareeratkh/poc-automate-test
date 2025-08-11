export const userList = [
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      expectedStatus: 200,
      expectedStatusText: 'OK',
    },
    {
      id: 5,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      expectedStatus: 200,
      expectedStatusText: 'OK',
    },
  ];
  
export const postUserList = [
    { name: 'John Doe', job: 'QA Engineer' },
    { name: 'Jane Smith', job: 'Developer' },
  ];

export const loginData = [
    { email: 'eve.holt@reqres.in', password: 'cityslicka', expectedStatus: 200, description: 'Valid login' },
    { email: 'peter@klaven', password: '', expectedStatus: 400, description: 'Missing password' },
    { email: '', password: 'password123', expectedStatus: 400, description: 'Missing email' },
  ];
  
export const registerData = [
    { email: 'eve.holt@reqres.in', password: 'pistol', expectedStatus: 200, description: 'Valid register' },
    { email: 'sydney@fife', password: '', expectedStatus: 400, description: 'Missing password' },
  ];
  