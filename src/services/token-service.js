export default class TokenService {

  setToken(token) {
      localStorage.setItem('user-token', JSON.stringify(token));
  }
  
  removeToken() {
    localStorage.removeItem('user-token');
  }

  getToken() {
    return JSON.parse(localStorage.getItem('user-token'));
  }
}