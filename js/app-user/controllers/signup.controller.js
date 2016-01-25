let SignupController = function(ContactService) {
  
  let vm = this;
  vm.messagename = "* Name is Required";
  vm.messagenameOK = "";

  vm.messageemailOne = "* Email is a Required Field";
  vm.messageemailTwo = "Please provide a valid email address";
  //  vm.messageemailOK = "Thank you for providing your email.  We will contact you soon!";
  vm.messagepasswordOne="Password must be at least 6 characters";

  vm.messagewebOne = "* Street Address is required";
  vm.messagewebTwo = "";
  //vm.messagewebOK = "Thank you for providing your web address.";

  // vm.messagemessageOne = "Kindly provide your comments";
  // vm.messagemessageOK = "Thank you for providing your comments.";

  vm.message = "";
  vm.count = 0;


  vm.addContact = addContact;

  function addContact (ContactObj) {
    ContactService.addContact(ContactObj).then( (res) => {
      console.log(res);
         vm.message= (vm.count === 1) ? "Thank you for your submission.  We will contact you soon!" : "Thank you for your interest!  We will send an email once residency is verified.";
         
    });
  }

};

SignupController.$inject = ['ContactService'];

export default SignupController;