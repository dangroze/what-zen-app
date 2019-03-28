# `What Zen`
```
                           _ooOoo_
                          o8888888o
                          88" . "88   What Zen Task Manager
                          (| -_- |)   Community Empowerment 
                          O\  =  /O
                       ____/`---'\____
                     .'  \\|     |//  `.
                    /  \\|||  :  |||//  \
                   /  _||||| -:- |||||_  \
                   |   | \\\  -  /'| |   |
                   | \_|  `\`---'//  |_/ |
                   \  .-\__ `-. -'__/-.  /
                 ___`. .'  /--.--\  `. .'___
              ."" '<  `.___\_<|>_/___.' _> \"".
             | | :  `- \`. ;`. _/; .'/ /  .' ; |
             \  \ `-.   \_\_`. _.'_/_/  -' _.' /
   ===========`-.`___`-.__\ \___  /__.-'_.'_.-'================
                           `=--=-'                    
```
## `Overview`
What Zen is a task manager app which combines the functionality of a minimalist Agile board integrated with a chat feature designed to empower its users. Now users can directly contribute in the decision making process for all the tasks in their board in real-time.

What Zen is a production of Team What Zen - 
* David Mears
* Dan Groze
* Adrien Fabre
* Sherif Shendidy
* Diptis Halder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Our deployed app at` https://what-zen-app.firebaseapp.com/
## `Running the app locally`
1. Install necessary files
```
git clone https://github.com/what-zen/what-zen-app.git
cd what-zen-app
npm install
```
2. Create project at https://console.firebase.google.com/<br>
3. Navigate to Project Overview -> Project Settings<br>
4. Retrieve following project details<br>
apiKey:<br>
authDomain:<br>
databaseURL:<br>
projectId:<br>
storageBucket:<br>
messagingSenderId:<br>
5. Create a .env file in the root folder and insert mentioned values in their respective fields
REACT_APP_API_KEY=<br>
REACT_APP_AUTH_DOMAIN=<br>
REACT_APP_DATABASE_URL=<br>
REACT_APP_PROJECT_ID=<br>
REACT_APP_STORAGE_BUCKET=<br>
REACT_APP_MESSAGING_SENDER_ID=<br>

6. To run server:
```
 npm start
 ```
7. Runs the app in the development mode.<br>
8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# `How to run tests`
```
npm cypress:open
```
Launches the feature test runner, cypress.<br>

## `To deploy:`
```
npm run build
```
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Install (and log in to) Firebase:

### firebase deploy

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `Wiki link` https://github.com/what-zen/what-zen-app/wiki


### User stories

````

As a time-pressed user,

So I can understand the minimalist Kanban principles,

I want to be able to visit the What Zen about page.



As a time-pressed user,

So I can access for the first time a minimalist Kanban,

I want to be able to sign up in What Zen.



As a time-pressed user,

So I can leave the minimalist Kanban,

I want to be able to sign out in What Zen.



As a time-pressed user,

So I can access any time a minimalist Kanban,

I want to be able to sign in to What Zen.



As a time-pressed user,

So I can easily use a minimalist Kanban,

I want to be directed to What Zen Kanban home page once I am sign in.



As a time-pressed user,

So I can know I am logged in,

I want to see my email address displayed on the What Zen Kanban home page.
````

````
As a logged in user,

So I can enter my tasks,

I want to be able to create tasks.



As a logged in user,

So I can see my tasks,

I want to see all tasks .



As a logged in user,

So I can organise my tasks,

I want to be able to move tasks among several columns, To do, In Progress and Done.



As a logged in user,

So I can delete my tasks,

I want to be able to click and remove a task.


As a logged in user,

So I can edit my tasks,

I want to be able to click and modify a task title.


As a logged in user,

So I can add details and comments to my tasks,

I want to be able to click and open a task's info.



As a logged in user,

So I can follow the flow of the tasks,

I want to see by whom and when a task has been created when I go to task info.



As a logged in user,

So I can prioritise my task, 

I want to mark if a task is important, urgent or both.
````

````
As a logged in user,

So I can discuss cards with other users in an informal way,

I want to be able to write in a chat.



As a logged in user,

So I know who wrote in the chat box,

I want to see the names of the authors of the messages,



As a logged in user,

So I know when users wrote in the chat box,

I want to see the time of when the message was written.
`````
