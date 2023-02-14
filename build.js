const { exec } = require('child_process');

const folders = ['api-backend', 'cli', 'frontend'];

for (let i = 0; i < folders.length; i++) {
    exec(`cd ${folders[i]} && npm install -g`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error installing dependencies in ${folders[i]}: ${err}`);
        return;
      }
      console.log(`Dependencies installed in ${folders[i]}`);
    });
  }
  