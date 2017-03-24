# Browser Technologies

This course is about Progressive Enhancing the web.


## CSS | PE demo's
### CSS variables

Check the demo for `CSS-vars` [here](https://iancstewart.github.io/minor-bt/css/css-vars/)

CSS variables code snippet:
```
:root {
  --color-dark-blue: #0071B3;
  --color-code: #f6f8fa;
  --text-body: 1.6rem;
}
```

### CSS backdrop-filter

Check the demo for `backdrop-filter` [here](http://iancstewart.github.io/minor-bt/css/backdrop-filter)

CSS backdrop-filter code snippet:
```
section {
  background: hsla(213, 16%, 22%, .85);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
```


## HTML | PE demo's
### HTML `<video>` tag

Check the demo for `<video>` tag [here](https://iancstewart.github.io/minor-bt/html/video/)

HTML `<video>` code snippet:
```
<video width="480" controls poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg">
  Your browser doesn't support HTML5 video tag.
</video>
```

> *Code snippet from MDN [<video> - HTML | MDN](https://www.google.nl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=0ahUKEwjLpcPn7e3SAhVDuBQKHX4ZAikQFggzMAY&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fvideo&usg=AFQjCNHyqwEBOA58MMVRjXYJtHTwgsEpdw&sig2=6h3_m3WZ7Jo9aitoGk33JA)*

### HTML input

Check the demo for `input` [here](http://iancstewart.github.io/minor-bt/html/input)

HTML input code snippet:
```
<input type="color" />
```

## JS | PE demo's
### JS EcmaScript verion

Check the demo for `<video>` tag [here](https://iancstewart.github.io/minor-bt/js/es6/)

Should show: `Browser is capable of EcmaSript 'version-number'`

> *Code snippet from [Marco Bonelli](http://stackoverflow.com/questions/29046635/javascript-es6-cross-browser-detection)*

### JS notification

Check the demo for `JS notify` [here](http://iancstewart.github.io/minor-bt/js/notification)

Should show a `browser desktop notification` or `alert modal showing the notification`
