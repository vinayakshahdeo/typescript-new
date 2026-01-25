const globalScope = typeof window !== 'undefined' ? window : global;
globalScope.AuthService = {
  currentUser: null,
  login(userName, password) {
    if (userName === 'user' && password === 'password') {
      window.AuthService.currentUser = userName;
      this.currentUser = { id: 1, userName };
      console.log('logged in');
      return true;
    } else {
      return false;
    }
  },
  isLoggedIn() {
    return this.currentUser !== null;
  },
};
