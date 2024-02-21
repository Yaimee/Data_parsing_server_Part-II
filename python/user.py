class User:
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

    def printUser(self):
        return f"User(ID: {self.id}, Name: {self.name}, Email: {self.email})"