import http from '../http-common';

class UserDataService {
  getAll() {
    return http.get('users');
  }

  addUser(data) {
    return http.post('users/add', data);
  }
}

export default new UserDataService();
