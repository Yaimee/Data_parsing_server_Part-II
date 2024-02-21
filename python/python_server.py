from fastapi import FastAPI
import requests

from CsvParser import read_users_from_csv
from JsonParser import read_users_from_json
from TxtParser import read_users_from_file
from XmlParser import read_users_from_xml
from YamlParser import read_users_from_yaml
from user import User

app = FastAPI()

@app.get("/csv")
def read_csv():
    users = read_users_from_csv("../files/file3.csv")
    return [{"id": user.id, "name": user.name, "email": user.email} for user in users]

@app.get("/json")
def read_json():
    users = read_users_from_json("../files/file4.json")
    return [{"id": user.id, "name": user.name, "email": user.email} for user in users]

@app.get("/txt")
def read_txt():
    users = read_users_from_file("../files/file1.txt")
    return [{"id": user.id, "name": user.name, "email": user.email} for user in users]

@app.get("/xml")
def read_xml():
    users = read_users_from_xml("../files/file5.xml")
    return [{"id": user.id, "name": user.name, "email": user.email} for user in users]

@app.get("/yaml")
def read_yaml():
    users = read_users_from_yaml("../files/file2.yaml")
    return [{"id": user.id, "name": user.name, "email": user.email} for user in users]

@app.get("/express-csv-data")
def get_express_csv_data():
    response = requests.get("http://localhost:8080/csv")
    return response.json()

@app.get("/express-json-data")
def get_express_json_data():
    response = requests.get("http://localhost:8080/json")
    return response.json()

@app.get("/express-txt-data")
def get_express_txt_data():
    response = requests.get("http://localhost:8080/txt")
    return response.json()

@app.get("/express-xml-data")
def get_express_xml_data():
    response = requests.get("http://localhost:8080/xml")
    return response.json()

@app.get("/express-yaml-data")
def get_express_yaml_data():
    response = requests.get("http://localhost:8080/yaml")
    return response.json()
