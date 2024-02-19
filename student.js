function lastName(lastname) { 
  return this.lastname;
}

function firstName(firstname) { 
  return this.firstname;
}

function fullName() {
  return `${this.firstName()} ${this.lastName()}`;
}

module.exports = {  
  fullName
};
