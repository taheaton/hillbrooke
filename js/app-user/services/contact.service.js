let ContactService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/Contact';

  this.getAllContacts = getAllContacts;
  this.addContact = addContact;

  function Contact (ContactObj) {
    this.name = ContactObj.name;
    this.username = ContactObj.username;
    this.password = ContactObj.password;
    this.email = ContactObj.email;
    this.address = ContactObj.address;
  }

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addContact (ContactObj) {
    let c = new Contact(ContactObj);
    return $http.post(url, c, PARSE.CONFIG);
  }


};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;