Feature('QA Contact Page Test');

Scenario('Test invalid login with incorrect date format', (I) => {

    var d = 'wrong-date';
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('Name', 'Austin');
    I.fillField('Email', 'austin@yahoo.com');
    I.fillField('Website', 'http://www.google.com');
    I.fillField('Date', d);
    /*
    Given a string d containing the date, check to see
    if d is a valid date by converting d into a Date object
    If date is invalid, clear the date field so the incorrect date format
    does not get submitted
    */

    date = new Date(d);

    if (String(date) === 'Invalid Date'){
        console.log('Caught invalid date');
        I.click('Submit');
        I.dontSee('Message Sent');
    }
    else{
        I.click('Submit');
        I.see('Message Sent');
    }


});
