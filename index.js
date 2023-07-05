const contacts = require("./contacts");
const argv = require("yargs").argv;
console.log(argv);

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  console.log(action);
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(contactId);
      console.log(oneContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(contactId);
      return console.log(deleteContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
