const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

async function update(data) {
    fs.writeFile(contactsPath, JSON.stringify(data, null, 2),
        {
            encoding: "utf8",
            flag: "w"
        });
}

async function read() {
    const result = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(result);
}

module.exports = {
    update,
    read
}