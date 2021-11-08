'use strict';

const fs = require('fs');
const path = require('path');

const students = require('./students.json');

const index = fs.readFileSync(path.join(__dirname, 'index.json'));
const modules = fs.readFileSync(path.join(__dirname, 'modules.json'));

for (const student of students) {
  console.log(student.name, ': ', student.userName);

  // set student
  const studentData = JSON.stringify(student, null, '  ');
  const studentDataPath = path.join(
    __dirname,
    student.userName,
    '.admin',
    'data',
    'student.json'
  );
  fs.writeFile(
    studentDataPath,
    studentData,
    'utf-8',
    (err) => err && console.error(err)
  );

  // set index
  const indexDataPath = path.join(
    __dirname,
    student.userName,
    '.admin',
    'data',
    'index.json'
  );
  fs.writeFile(
    indexDataPath,
    index,
    'utf-8',
    (err) => err && console.error(err)
  );

  // set modules
  const modulesDataPath = path.join(
    __dirname,
    student.userName,
    '.admin',
    'data',
    'modules.json'
  );
  fs.writeFile(
    modulesDataPath,
    modules,
    'utf-8',
    (err) => err && console.error(err)
  );
}
