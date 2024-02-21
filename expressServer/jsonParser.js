import fs from "fs";
import { User } from "./user.js";

export function readUsersFromJson(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const users = JSON.parse(data).users.map(user => new User(parseInt(user.id), user.name, user.email));
    return users;
}
