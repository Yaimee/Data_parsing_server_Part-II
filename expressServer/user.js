class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    printUser() {
        return `User(ID: ${this.id}, Name: ${this.name}, Email: ${this.email})`;
    }
}

export { User };
