'use strict';

const fs = require('fs');
const path = require('path');

const { exec } = require('child_process');

const rimraf = require('./rimraf.js');

const readline = require('readline');
const { promisify } = require('util');

const students = require('./students.json');

// https://gist.github.com/tinovyatkin/4316e302d8419186fe3c6af3f26badff (the comment)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question[promisify.custom] = (question) => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

(async () => {
  const abortInput = await promisify(rl.question)(
    "\nare you sure you want to populate the students? \nthis will erase any existing notes\n\n- enter 'yes' to continue\n\n"
  );

  rl.close();

  if (abortInput.toLowerCase() !== 'yes') {
    process.exit(0);
  }

  // sync and slow. it's a temporary one-time setup script, better is coming
  for (const student of students) {
    console.log(student.name, ': ', student.userName);

    console.log(student.name + ': clearing');
    const studentRepoPath = path.join(__dirname, student.userName);
    const studentDirContents = fs.readdirSync(studentRepoPath);
    for (const item of studentDirContents) {
      if (item.startsWith('.')) {
        continue;
      }

      const itemPath = path.join(studentRepoPath, item);
      if (fs.lstatSync(itemPath).isDirectory()) {
        rimraf.sync(itemPath);
      }
    }

    console.log(student.name + ': populating');
    exec(
      `cd ./${student.userName} && npm run populate:modules <<< "yes"`,
      (err) => err && console.error(err)
    );
  }
})();
