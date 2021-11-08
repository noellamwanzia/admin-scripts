'use strict';

const { exec } = require('child_process');

const students = require('./students.json');

const branchArg = process.argv.find((arg) => arg.startsWith('b='));
const branch = branchArg ? branchArg.replace('b=', '') : 'main';

const messageArg = process.argv.find((arg) => arg.startsWith('m='));
const message = messageArg ? messageArg.replace('m=', '') : 'reviewed';

for (const student of students) {
  console.log(student.name, ': ', student.userName);

  try {
    exec(`cd ./${student.userName} && git add .`);

    exec(`cd ./${student.userName} && git commit -m "${message}"`);

    exec(`cd ./${student.userName} && git push origin ${branch}`);
  } catch (err) {
    console.error(err);
  }
}
