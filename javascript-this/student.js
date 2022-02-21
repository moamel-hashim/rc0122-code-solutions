/* exported student */
const student = {
  firstName: 'moamel',
  lastName: 'hashim',
  subject: 'JavaScript',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getIntroduction: function () {
    return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}.`;
  }
};
