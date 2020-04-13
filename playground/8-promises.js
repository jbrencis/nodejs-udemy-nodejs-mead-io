// you can resolve OR reject NOT both at the same time, if promise is resolved OR rejected it's done and stops execution

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 4, 7]);
    // reject('Things went wrong!');
  }, 2000);
});

// .then goes only if everything went well
doWorkPromise
  .then((result) => {
    console.log('Success!', result); // Success! [ 1, 4, 7 ]
  })
  .catch((error) => {
    console.log('Error!', error); // Error! Things went wrong!
  });

//
//                                  fulfilled
//                                /
// Promise      ---- pending -->
//                                \
//                                  rejected
//
