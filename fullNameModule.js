function firstName() {
  return 'name: ' + this.firstName;
}

function lastName() {
  return 'lastname: ' + this.lastName;
}

function fullName(firstname, lastname) {
  return `${firstname} ${lastname}`;
}

module.exports = {
  fullName
};
