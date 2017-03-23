# Funda web app TODO accessibility

## Images
When i turn of the images the app is still accessible. The following screen shot will show what happens.

![images turned off](./images/pe-1.png)

This could be fixed with a background color fall-back or alt text.

## Custom fonts
When i turn of the custom fonts the app is still accessible. The following screen shot will show what happens.

![custom font turned off](./images/pe-2.png)

Could add a different fall-back font in the font-stack.

## Javascript
When i turn of the javascript the app wont do much besides posting the input value to the url. The following screen shot will show what happens.

![JS turned off](./images/pe-3.png)

Could add a start-up div which alerts users with no JS that javascript is a must to run the web app. This div can be clear with JS if it does work.

## Color
When checking the color contrast for accessibility it looks to be compatible with all forms off color blindness in Sim Daltonism. When looking at used way of color codes in css IE wont render colors. The following screen shots will show what happens.

![color blind sim](./images/pe-4.1.png)
![color vars](./images/pe-4.2.png)

The color css-vars problem can be fixed via a fall-back.

## Internet connection
When throttling your connection the site still loads oke. The following gif will show what happens.

![throttle gif](./images/pe-5.gif)

I could async load some stuff to make the app "feel" quicker.

## Cookies
I don't use cookies so when i turn this off nothing changes.

## localStorage
When localStorage doesn't work the app will do a new api call instead of using earlier fetched api response data. The app will still work.

## Mouse/Trackpad
It is possible to TAB through the apps input fields and there is a focus state to see where u are.

## TL;DR
### TODO
**must**
- [ ] Add fall-back for images to prevent.
- [ ] Add fall-back when there's no JS.
- [ ] Fall-back for css vars.

**could**
- [ ] Add self chosen fall-back font instead of browsers own fall-back.
- [ ] Async some scripts and css to make site feel quicker.