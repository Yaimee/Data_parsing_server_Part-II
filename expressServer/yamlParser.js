import fs from "fs";
import { User } from "./user.js";
import yaml from "js-yaml";

export function readUsersFromYaml(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const users = yaml.load(data).users.map(user => new User(parseInt(user.id), user.name, user.email));
    return users;
}
