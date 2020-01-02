const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // if true => title arg is required, default is false
      type: 'string' // default => boolean
    }
  },
  handler: function() {
    console.log('Adding note...');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing a note...');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function() {
    console.log('Listing notes...');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading a note a note...');
  }
});

yargs.parse(); // loging to console "Reading a note a note..."
console.log(yargs.argv);
