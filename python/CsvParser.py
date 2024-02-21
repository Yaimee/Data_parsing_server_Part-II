import csv
from user import User

def read_users_from_csv(filename):
    users = []
    with open(filename, newline='') as csvfile:
        reader = csv.DictReader(csvfile)  # Utilizing a dictionary reader for convenience
        for row in reader:
            # Assuming the CSV column names match the keys in your file exactly
            user_id = int(row['user_id'])  # Convert user_id to int
            name = row['name']
            email = row['email']
            users.append(User(user_id, name, email))
    return users

# Assuming the file name is "file3.csv" and is in the correct path
users = read_users_from_csv("../files/file3.csv")

for user in users:
    print(user.printUser())
