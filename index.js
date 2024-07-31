const { program } = require('commander');
const { ContactService } = require('./services/contacts');
const { FileDbRepository } = require('./repositories/fileDbRepository');
const path = require('path');

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();

const repository = new FileDbRepository(path.resolve(__dirname, "db/contacts.json"));
const contactService = new ContactService(repository);

start().catch(err => {
    console.error('There was an error reading the file! \n', err);
});

async function start() {
    let result = await invokeAction(options);
    console.table(result);
}

async function invokeAction({ action, id, ...data }) {
    switch (action) {
        case "list":
            return await contactService.listContacts();
        case "get":
            return await contactService.getContactById(id);
        case "remove":
            return await contactService.removeContact(id);
        case "add":
            return await contactService.addContact(data);
        case "update":
            return await contactService.updateContact(id, data);
        default:
            return ("\x1B[31m Unknown action type!");
    }
}
