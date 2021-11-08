# Managing Student Repos

Some scripts to help manage student repos. It assumes you've already set up the repos in your org, and assumes each repo is named after the student's username.

If your student repos are private, you will need to be authenticated from your computer to use these scripts.

## Initial Setup

1. `node 1-clone-all.js`
2. `node 2-set-data.js`
3. `node 3-fetch-avatars.js`
4. `node 4-render-all.js`
5. `node 5-commit-and-push.js b=<branch> m=<commit-message>`
   - `<branch>`: defaults to `main`
   - `<commit-message>`: defaults to `reviewed`

## Subsequent Updates

1. `node 6-pull-all.js`
2. check retrospectives, leave notes, whatever it is you're doing
3. `node 5-commit-and-push.js b=<branch> m=<commit-message>`
   - `<branch>`: defaults to `main`
   - `<commit-message>`: defaults to `reviewed`
