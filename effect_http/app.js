"use strict";

const express    = require('express');
const expressApp = express();
const Elm        = require('./build/elm');

console.log('Started');

var app = Elm.Main.worker();

app.ports.dbg.subscribe(function(word) {
	console.log('debug: ', word);
});

setTimeout(function() {
  app.ports.started.send(true);
}, 0);

/*
app.ports.binder.subscribe(function(data) {
  console.log('bindings: ', data.bindings);

  let i;
  for (i = 0; i < data.bindings.length; i++) {
    let binding = data.bindings[i];
    if (binding.method === 'GET') {
      expressApp.get(binding.route, function(req, res) {
        app.ports.recv.send([req.url, res]);
      });
    }
  }
  expressApp.listen(data.prt, console.log('Listning on port: ', data.prt));

});

app.ports.responder.subscribe(function(data) {
  let resp = data[1];
  resp.send(data[0]);
});
*/