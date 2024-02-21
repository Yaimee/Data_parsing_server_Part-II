import fs from "fs";
import { User } from "./user.js";

export function readUsersFromTxt(filename) {
    const users = [];
    const lines = fs.readFileSync(filename, 'utf8').split('\n').slice(1); // Skip header
    for (const line of lines) {
        const [user_id, name, email] = line.trim().split(',');
        users.push(new User(parseInt(user_id), name, email));
    }
    return users;
}
