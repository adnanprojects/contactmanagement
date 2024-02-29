const asyncHanlder = require('express-async-handler');

// @desc get all contacts
// @route GET api/contacts
// @access public
const getContacts = asyncHanlder(async (request, response) => {
    response.json({ message: "Get contacts" });
});

// @desc get a contact
// @route GET api/contacts/:id
// @access public
const getContact = asyncHanlder(async (request, response) => {
    response.json(`Get contact for ${request.params.id}`);
});

// @desc create new contact
// @route POST api/contacts
// @access public
const createContact = asyncHanlder(async (request, response) => {
    const { name, email, phone } = request.body;
    console.log(name, email, phone);
    if (!name || !email || !phone) {
        response.status(500);
    }
    response.json({ message: 'contact created by me' });
});

// @desc update a contact
// @route UPDATE api/contacts/:id
// @access public
const updateContact = asyncHanlder(async (request, response) => {
    response.json(`update contact for ${request.params.id}`);
});

// @desc delete a contact
// @route DELETE api/contacts/:id
// @access public
const deleteContact = asyncHanlder(async (request, response) => {
    response.json(`deleted the contact for ${request.params.id}`);
});


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}