Readme met een probleemdefinitie, hoe het probleem is opgelost en een beschrijving van de code.

# Browser Technologies || Progressive Enhancing Notifications
> use case: I would like to be notified when my team scores or wins.

## The problem
A user wishes to be notified of update during a game. The user would like to see this in a web browser. User can browse with multiple browsers, whereas every browser has a different support of features needed for this task. It can also occur that the user defers to another browser tab or window, this will result in the need of a 'blind' notification.

## My fix
### Core functionality
The core will contain the following functionality:

- User can choose a team to be notified about.
- User will be sent to a notification page.
- User can see the game result.

> *notes: For this demo i will have static notification page data. In production u could catch the users choice server side and render that notification dynamic*

### Enhancement stage 1
To enhance the core we will add the following functionality:

- User will get styled pages.

### Enhancement stage 2
To enhance the styled pages we will add the following functionality:

- User will get the notification in the same page instead.

> *note: Client sided JS needed. The user wont notice anything when in a different browser*

### Enhancement stage 3
To enhance the in page notification we will add the following functionality:

- User will get a notification sound.
- If user is not focused on the tab a '(1)' will be added to the tabTitle

> *note: Client needs to be able to handle javascript Audio*

### Enhancement stage 4
To enhance the sound and tabTitle we will add the following functionality:

- User will get a browser notification

> *note: Client needs to be able to handle Notification API*

## The `<code>`
To make the code I needed the following basics:

- form HTML element
```
<form action="notification.html">
  <legend>Choose your team</legend>
  <label>
    <input type="radio" name="team" value="">
    <img width="" alt="" src="" />
  </label>
</form>
```
- Notification 'template'
```
<section class="notification">
  <header>
    <h1>Your Team has scored</h1>
  </header>
  <img height="75px" alt="team-logo" src="" />
  <h2>Final Score</h2>
  <p><em>2</em> - <em>1</em></p>
  <a href="demo.html">
    <img width="16px" height="16px" alt="close" src="" />
  </a>
</section>
```
- Audio web API
```
const snd = new Audio('file.wav');
snd.play();
```
- Browser title adjusting
```
document.hidden
? document.title = `(1) ${document.title}`
: null;
```
- Notification web API
```
new Notification(title, { options });
```

## Cloning
Cloning:
```
$ cd ~/Sites/ && git clone git@github.com:IanCStewart/minor-bt.git
```

Get the node modules:
```
$ cd minor-bt/ && npm i
```

## Building and Deployment
Build the `build.js` file:
`$ npm run build` or `$ npm run build-minified`

Run on localhost:
```
$ npm start
```

Terminal should return something like this:
```
[BS] Access URLs:
 -----------------------------------
 Local: http://localhost:3000
 External: http://145.28.151.74:3000
 -----------------------------------
```
