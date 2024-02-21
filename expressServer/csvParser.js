import fs from "fs";
import { User } from "./user.js";
import csv from "csv-parser";

export function readUsersFromCsv(filename) {
    const users = [];
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (row) => {
            users.push(new User(parseInt(row.user_id), row.name, row.email));
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
    return users;
}
    