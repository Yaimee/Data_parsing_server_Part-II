from user import User


def read_users_from_file(filename):
    users = []
    with open(filename, "r") as file:
        next(file)  # Skip the header line
        for line in file:  # Directly iterate over the file object
            user_data = line.strip().split(",")
            # Convert user_id from string to int
            users.append(User(int(user_data[0]), user_data[1], user_data[2]))
    return users

# Assuming the file name is "file1.txt" and is in the correct path
users = read_users_from_file("../files/file1.txt")

# Assuming you want to print the user details using the printUser method
for user in users:
    print(user.printUser())
