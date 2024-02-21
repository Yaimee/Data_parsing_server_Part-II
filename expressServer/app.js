import express from "express";
import axios from "axios";

import { readUsersFromCsv } from "./csvParser.js";
import { readUsersFromJson } from "./jsonParser.js";
import { readUsersFromTxt } from "./txtParser.js";
import { readUsersFromXml } from "./xmlParser.js";
import { readUsersFromYaml } from "./yamlParser.js";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send({ isRunning: true });
});

app.get("/csv", (req, res) => {
    const users = readUsersFromCsv("../files/file44.csv");
    res.send({ users });
});

app.get("/json", (req, res) => {
    const users = readUsersFromJson("../files/file22.json");
    res.send({ users });
});

app.get("/txt", (req, res) => {
    const users = readUsersFromTxt("../files/file55.txt");
    res.send({ users });
});

app.get("/xml", (req, res) => {
    const users = readUsersFromXml("../files/file11.xml");
    res.send({ users });
});

app.get("/yaml", (req, res) => {
    const users = readUsersFromYaml("../files/file33.yaml");
    res.send({ users });
});

app.listen(PORT, () => console.log("Server is running on port", PORT));

app.get("/fastapi-csv-data", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/csv");
        res.send({ data: response.data });
    } catch (error) {
        console.error("Error fetching data from Express:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.get("/fastapi-json-data", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/json");
        res.send({ data: response.data });
    } catch (error) {
        console.error("Error fetching data from Express:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.get("/fastapi-txt-data", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/txt");
        res.send({ data: response.data });
    } catch (error) {
        console.error("Error fetching data from Express:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.get("/fastapi-xml-data", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/xml");
        res.send({ data: response.data });
    } catch (error) {
        console.error("Error fetching data from Express:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.get("/fastapi-yaml-data", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/yaml");
        res.send({ data: response.data });
    } catch (error) {
        console.error("Error fetching data from Express:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
