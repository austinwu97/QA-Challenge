Feature('QA Contact Page Test');

Scenario('Test to catch an invalid login with incorrect email format', (I) => {

    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('Name', 'Austin');
    I.fillField('Email', 'austinyahoo.comasdf');
    I.fillField('Website', 'http://www.google.com');
    I.fillField('Date', '5/30/2020');
    I.click('Submit');
    I.dontSee('Message Sent');
    console.log('Email needs to contain @ to be valid');


});
