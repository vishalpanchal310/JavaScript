// getters and setters are special methods used to access and modify the properties of an object.
// - Getter (get) → Used to get or read a property value.
// - Setter (set) → Used to set or update a property value.

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}vispan`;
    //return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const vispan = new User("vis@11.ai", "abc");
console.log(vispan.password);
console.log(vispan.email);
