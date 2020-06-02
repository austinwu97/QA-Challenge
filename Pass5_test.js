Feature('QA Contact Page Test');

Scenario('Test to catch an invalid login with no date filled', (I) => {

    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('Name', 'Austin');
    I.fillField('Email', 'austin@yahoo.com');
    I.fillField('Website', 'http://www.google.com');
    //I.fillField('Date', '5/30/2020');
    I.click('Submit');
    I.dontSee('Message Sent');
    console.log('Date field cannot be left empty');


});
