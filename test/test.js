var expect  = require('chai').expect;
var request = require('superagent');

it('Multiplying 2 and 3 should give 6', function(done) {
    request.get('http://localhost:3001/pdt')
           .query({a:2,b:3})
           .then(res => {
             expect(res.text).to.equal('6');
             done();
           })
});

it('Reading from the file', function(done) {
    request.get('http://localhost:3001/readFile')
           .then(res => {
             expect(res.text).to.equal('File is read from the server and it is sent to the client\n');
             done();
           })
});

it('Writing to the File', function(done) {
    request.post('http://localhost:3001/writeFile')
           .then(res => {
             expect(res.text).to.equal('A File has been created and saved successfully');
             done();
           })
});

it('Finding the non repeating characters - Should give A', function(done) {
    request.post('http://localhost:3001/char')
           .query({text:'Aeroplane'})
           .then(res => {
             expect(res.text).to.equal('A');
             done();
           })
});
