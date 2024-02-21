import xml.etree.ElementTree as ET
from user import User

def read_users_from_xml(filename):
    # Parse the XML file
    tree = ET.parse(filename)
    root = tree.getroot()
    
    users = []
    for user_elem in root.findall('user'):
        user_id = int(user_elem.find('user_id').text)
        name = user_elem.find('name').text
        email = user_elem.find('email').text
        users.append(User(user_id, name, email))
    
    return users


users = read_users_from_xml("../files/file5.xml")

for user in users:
    print(user.printUser())
