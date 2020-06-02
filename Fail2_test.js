Feature('QA Contact Page Test');

Scenario('Test invalid login with incorrect name format', (I) => {

    var name = 'austin123'

    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('Name', name);
    I.fillField('Email', 'austin@yahoo.com');
    I.fillField('Website', 'http://www.google.com'); 
    I.fillField('Date', '5/30/2020');

    /*
    Check if name contains any numbers. A name should not contain any numbers 
    but special characters are accepted
    */
    var regex = new RegExp("[0-9]+");

    if(regex.test(name) == true) {
        I.click('Submit');
        I.dontSee('Message Sent');
        console.log('name cannot contain numbers');
      }
    else{
      I.click('Submit');
      I.see('Message Sent');
    }


});
