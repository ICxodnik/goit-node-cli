class ContactService {
    #repository;

    constructor(repository) {
        this.#repository = repository;
    }
    async listContacts() {
        return await this.#repository.getItems();
    }

    async getContactById(contactId) {
        const contact = await this.#repository.getItemById(contactId);
        return contact || null;
    }

    async removeContact(contactId) {
        const contact = await this.#repository.deleteItem(contactId);
        return contact || null;
    }

    async addContact(data) {
        if (!(data.name && data.email && data.phone)) { return "Insert all necessary fields"; }
        if (!this.#isNameValid(data.name)) { return "Name is not valid"; }
        if (!this.#isEmailValid(data.email)) { return "Email is not valid"; }
        if (!this.#isPhoneValid(data.phone)) { return "Phone is not valid"; }

        const newContact = {
            ...data
        }
        await this.#repository.addItem(newContact)
        return newContact;
    }

    async updateContact(contactId, data) {
        if (!contactId) { return "Id cannot be empty"; }
        if (data.name && !this.#isNameValid(data.name)) { return "Name is not valid"; }
        if (data.email && !this.#isEmailValid(data.email)) { return "Email is not valid"; }
        if (data.phone && !this.#isPhoneValid(data.phone)) { return "Phone is not valid"; }

        let contact = await this.#repository.getItemById(contactId);
        if (!contact) { return null; }

        contact = {
            ...contact,
            ...data
        }
        await this.#repository.updateItem(contact);

        return contact;
    }

    #isNameValid(data) {
        if (/^[A-Za-z ]+$/.test(data)) {
            return true;
        }
        return false;
    }

    #isEmailValid(data) {
        if (/\S+@\S+\.\S+/.test(data)) {
            return true;
        }
        return false;
    }

    #isPhoneValid(data) {
        if (/[0-9+() \-.]/g.test(data)) {
            return true;
        }
        return false;
    }
}

module.exports = {
    ContactService
}
