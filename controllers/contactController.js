// @desc get all contacts
// @route GET api/contacts
// @access public
const getContacts = (request, response) => {
    response.json({ message: "Get contacts" });
};

// @desc get a contact
// @route GET api/contacts/:id
// @access public
const getContact = (request, response) => {
    response.json(`Get contact for ${request.params.id}`);
};

// @desc create new contact
// @route POST api/contacts
// @access public
const createContact = (request, response) => {
    const { name, email, mobile } = request.body;
    if (!name || !email || !mobile) {
        throw new Error();
    }
    response.json(`Create contact`);
};

// @desc update a contact
// @route UPDATE api/contacts/:id
// @access public
const updateContact = (request, response) => {
    response.json(`update contact for ${request.params.id}`);
};

// @desc delete a contact
// @route DELETE api/contacts/:id
// @access public
const deleteContact = (request, response) => {
    response.json(`deleted the contact for ${request.params.id}`);
};


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}