'use strict';

const { exec } = require('child_process');

const index = require('./index.json');
const students = require('./students.json');

for (const student of students) {
  const gitURL = `git clone git@github.com:${index.orgName}/${student.userName}.git`;

  console.log(student.name, ': ', gitURL);

  exec(gitURL, (err) => err && console.error(err));
}
