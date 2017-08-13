const global = {
  number: 0,
  loggedIn: false,
  user: {},
  admin: false,
  activeTournamentDetail: {
    text: '',
  },
  login: function login(user) {
    this.loggedIn = true;
    this.user = user;
    if (this.user.email === 'admin@esportsgermany.de') {
      this.admin = true;
    }
  },
  logout: function logout() {
    this.loggedIn = false;
    this.user = {};
    this.admin = false;
  },
  getNumber: function getNumber() {
    this.number += 1;
    return this.number;
  },
  makeKey: function makeKey(key) {
    let newkey = key.replace(/\./g, '');
    newkey = newkey.replace(/@/g, '');
    newkey = newkey.replace(/#/g, '');
    newkey = newkey.replace(/\$/g, '');
    newkey = newkey.replace(/\[/g, '');
    newkey = newkey.replace(/\]/g, '');
    return newkey;
  },
};
export default global;
