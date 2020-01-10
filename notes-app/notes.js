const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  // #1 const duplicateNotes = notes.filter(note => note.title === title); //'filter' will go over all 100500 notes
  const duplicateNotes = notes.find(note => note.title === title); // will find the first occurance of 'note' and exit

  debugger;
  // #1 if (duplicateNotes.length === 0) {
  if (!duplicateNotes) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse('A new note added'));
  } else {
    console.log(chalk.red.inverse('Note title already taken'));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  return fs.writeFileSync('notes.json', dataJSON);
};

const listNotes = () => {
  console.log(chalk.blue.inverse('Your notes:'));

  const notes = loadNotes();
  return notes.forEach(note => console.log(chalk.cyan(note.title)));
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
