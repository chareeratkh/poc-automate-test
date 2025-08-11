export async function getUserResponse(request, userId) {
    return request.get(`/api/users/${userId}`);
  }
  
  export async function createUserResponse(request, body) {
    return request.post('/api/users', { data: body });
  }
  

export async function loginUser(request, body) {
    return request.post('/api/login', { data: body });
  }
  
  export async function registerUser(request, body) {
    return request.post('/api/register', { data: body });
  }
  