const fs = require('fs').promises;
const path = require('path');
const xid = require('xid-js');

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function update(data) {
    fs.writeFile(contactsPath, JSON.stringify(data, null, 2),
        {
            encoding: "utf8",
            flag: "w"
        });
}

async function listContacts() {
    let result = await fs.readFile(contactsPath, 'utf8')
    return JSON.parse(result);
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    return contacts.find(el => el.id == contactId) || null;
}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(el => el.id == contactId);
    if (index == -1) { return null; }
    const [deleted] = contacts.splice(index, 1);
    update(contacts);

    return deleted;
}

async function addContact(data) {
    const contacts = await listContacts();
    const newContact = {
        id: xid.next(),
        ...data
    }
    contacts.push(newContact);
    update(contacts);

    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
