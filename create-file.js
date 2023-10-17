const fs = require('fs');

// Create "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log('File "welcome.txt" has been created with the content "Hello Node".');
  }
});
