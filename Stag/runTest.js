const { describe } = require('mocha');
const testFunction = require('./TestSettings/testFunctions');
const variables = require('./TestSettings/variables');

describe("Home page", function () {
    
    beforeEach(function () {
        // Create a new test befour each function
        testFunction.new_run();
    });
    
    afterEach(function () {
       // testFunction.quit();
    });

    it('LogIn in to the home page', function () {
        // Test steps
        testFunction.go_to_url(variables.webUrl);
        //testFunction.Chrome.go_to_url(webUrl);
        testFunction.button_push(COOKIES);

    });
});