import fs from "fs";
import { User } from "./user.js";
import xml2js from "xml2js";

export function readUsersFromXml(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    let users = [];
    xml2js.parseString(data, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        users = result.users.user.map(user => new User(parseInt(user.user_id[0]), user.name[0], user.email[0]));
    });
    return users;
}