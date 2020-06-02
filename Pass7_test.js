Feature('QA Contact Page Test');

Scenario('Test invalid login with incorrect website format', (I) => {

    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('Name', 'Austin');
    I.fillField('Email', 'austin@yahoo.com');
    I.fillField('Website', 'www.google.com'); 
    I.fillField('Date', '5/30/2020');
    I.click('Submit');
    I.dontSee('Message Sent');
    console.log('Url needs to start with http or https');


});
