const fs = require('fs');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log('A new note added');
  } else {
    console.log('Note title already taken');
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  return fs.writeFileSync('notes.json', dataJSON);
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
  getNotes,
  addNote
};
