(function () {
  'use strict';

  var xhr = require('xhr');
  var filter = require('lodash.filter');

  var template = require('./contact.jade');
  var baseUrl = document.body.getAttribute('data-root');
  var url = baseUrl + '/data/contacts.js';

  var input = document.querySelector('.contact-list-search');
  var output = document.querySelector('.contact-list');

  var contacts;

  input.addEventListener('keyup', search);

  function init() {
    downloadContacts(url, render);
  }

  function downloadContacts(url, cb) {
    xhr.get(url, function (err, res, body) {
      if (err) console.log(err);
      contacts = JSON.parse(body);
      cb(contacts);
    });
  }

  function search(e) {
    var query = e.target.value.toLowerCase(),
        filtered;

    if (query.length === 0) render(contacts);

    filtered = filter(contacts, function (person) {
      var isType = person.type.toLowerCase().indexOf(query) > -1;
      var isState = person.state.toLowerCase().indexOf(query) > -1;
      var isName = person.name.toLowerCase().indexOf(query) > -1;
      var isTitle = person.title.toLowerCase().indexOf(query) > -1;
      return (isType || isState || isName || isTitle);
    });

    render(filtered);
  }

  function render(contacts) {
    output.innerHTML = template({ contacts: contacts });
  }

  module.exports.init = init;
})();
