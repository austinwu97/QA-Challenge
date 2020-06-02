Feature('QA Contact Page Test');

Scenario('Test valid login with all parameters filled', (I) => {

    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('Name', 'Austin');
    I.fillField('Email', 'austin@yahoo.com');
    I.fillField('Website', 'http://www.google.com');
    I.fillField('Date', '5/30/2020')
    I.click('Submit');
    I.see('Message Sent')

});
