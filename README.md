This is a new React Repo for Nov Series

How to create a new GIT connection from our VS Code

1. git init
2. git branch -M main
3. git add.
4. git commit -m "Day1"
   Till this the git is in my local.

   Next we need to connect to the git repo

5. git remote add origin git@github.com/\* your repo name
6. git push origin main
   /// These are the basic steps

To create a new branch.

7. git checkout -b Day2

To publish the new branch

8. git push --set-upstream origin Day2

Merge main into your branch (safer)

9.  git checkout your-branch
    git fetch origin
    git merge origin/main

    \*\*\*------------------------------------------------------------------------------

    To start adding a server

    1. npm init
    2. start adding the requirements that it asks and add jest for testing
    3. Confirm the github repo
    4. keywords:- may be React, Nov React or anything
    5. Author:- Write your name

    This adds a package.json

    \*\*\*-----------------------------------------------------------------------------

    Next add a bundler:- ie parcel. We can do create react app or vite also. But here its parcel that is being used.
    Once parcel is installed. Next install React and react-dom.
    To run parcel:- npx parcel index.html
