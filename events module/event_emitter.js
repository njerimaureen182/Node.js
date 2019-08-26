// task: creating a function to be executed when a 'scream' event is fired
// use emit() to fire an event

var events = require('events');
var eventEmitter = new events.EventEmitter();

// create eventhandler
var myEventHandler = function() {
	console.log('i hear a scream!');
}

// assign eventhandler to an event(use eventEmitter)
eventEmitter.on('scream', myEventHandler);

// fire the 'scream' event(use eventEmitter)
// N/B: eventEmitter used to assign an eventhandler to an event as well as to fire the event
eventEmitter.emit('scream');

