import json
from user import User

def read_users_from_json(filename):
    with open(filename, 'r') as file:
        data = json.load(file)  # Load the JSON data into a Python dictionary
        users = []
        for item in data['users']:  # Iterate through the list under the 'users' key
            # Create a User instance for each user in the list
            users.append(User(int(item['id']), item['name'], item['email']))
    return users

# Assuming the file name is "file4.json" and is in the correct path
users = read_users_from_json("../files/file4.json")

for user in users:
    print(user.printUser())
