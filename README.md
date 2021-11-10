# Admin Scripts

Some scripts to help manage student repos created using the [student-repo-template](https://github.com/HackYourFutureBelgium/student-repo-template). It assumes you've already set up the repos in your org, and assumes each repo is named after the student's username.

Before you can use these scripts you'll need to fill in `index.json`, `students.json` and `modules.json` with your class' data.

If your student repos are private, you will need to be authenticated from your computer to use these scripts.

## Initial Setup

Before running these scripts you will need to update `index.json`, make sure it includes the `userName` for your github organization and that the `repoName` is the name of your class' home repo.

Then run these scripts:

1. `node 1-clone-all.js`
2. `node 2-set-data.js`
3. `node 3-fetch-avatars.js`
4. `node 4-render-all.js`
5. `node 5-populate-modules.js`
6. `node 6-commit-and-push.js b=<branch> m=<commit-message>`
   - `<branch>`: defaults to `main`
   - `<commit-message>`: defaults to `reviewed`

## Subsequent Updates

1. `node 7-pull-all.js`
2. check retrospectives, leave notes, whatever it is you're doing
3. `node 6-commit-and-push.js b=<branch> m=<commit-message>`
   - `<branch>`: defaults to `main`
   - `<commit-message>`: defaults to `reviewed`
