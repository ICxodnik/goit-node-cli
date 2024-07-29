const xid = require('xid-js');
const repository = require('../repositories/json/contacts');

async function listContacts() {
    return await repository.read();
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    return contacts.find(el => el.id == contactId) || null;
}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(el => el.id == contactId);
    if (index == -1) {
        return null;
    }
    const [deleted] = contacts.splice(index, 1);
    repository.update(contacts);

    return deleted;
}

async function addContact(data) {
    const contacts = await listContacts();
    const newContact = {
        id: xid.next(),
        ...data
    }
    contacts.push(newContact);
    repository.update(contacts);

    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
