'use strict';

const { exec } = require('child_process');

const index = require('./index.json');
const students = require('./students.json');

for (const student of students) {
  console.log(student.name, ': ', student.userName);
  exec(
    `git clone git@github.com:${index.orgName}/${student.userName}.git`,
    (err) => err && console.error(err)
  );
}
