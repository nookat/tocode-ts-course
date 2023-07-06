const ret = 10;

class User {
  name: string;
  lastname: string;

  constructor(name: string, lastname: string) {
    this.name = name;
    this.lastname = lastname;
  }
}

new User('ivan', 'smirnov');