// const event = {
//   name: 'Birthday Party',
//   printGuestList: function() {
//     return console.log('Guest list for ' + this.name);
//   }
// };

// event.printGuestList(); // Guest list for Birthday Party

//============Arrow function====================

// const event = {
//   name: 'Birthday Party',
//   printGuestList: () => {
//     return console.log('Guest list for ' + this.name);
//   }
// };

// event.printGuestList(); // Guest list for undefined

//============Better approach====================

// const event = {
//   name: 'Birthday Party',
//   printGuestList() {
//     console.log('Guest list for ' + this.name);
//   }
// };

// event.printGuestList(); // Guest list for Birthday Party

//================================

// const event = {
//   name: 'Birthday Party',
//   guestList: ['Andrew', 'Jen', 'Sam'],
//   printGuestList() {
//     console.log('Guest list for ' + this.name);
//     this.guestList.forEach(function(guest) {
//       console.log(`${guest} is attending in ${this.name}`);
//     });
//   }
// };

// event.printGuestList();
// Guest list for Birthday Party
// Andrew is attending in undefined
// Jen is attending in undefined
// Sam is attending in undefined

//==============The BEST approach==================
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Sam'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach(guest => {
      console.log(`${guest} is attending in ${this.name}`);
    });
  }
};

event.printGuestList();
/*Guest list for Birthday Party
Andrew is attending in Birthday Party
Jen is attending in Birthday Party
Sam is attending in Birthday Party*/
