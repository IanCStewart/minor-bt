# Browser Technologies

## Browser Features, What happens when u turn them off?
In the folowing paragraph i will be researching what happens when u turn of some browser features.

### Color
In the web there are a couple of ways to use color and a couple of ways this could go wrong.

#### Color uses
* hex
* rgb
* hsl
* css var

#### Ways to go wrong
* Not enough contrast between the background and foreground.
* Not enough visible difference between states.
* Bad color combination.
* Browser not rendering a form of color use.

#### Expectations and Reality
**Expectations**

![Expectations](./images/expectations.png)

**Reality**

In reality most of the bigger sites u visit wont have a contrast problem. They use textbook high contrast and have clear difference in states. What in reality is more probable to happen is that the browser doesn't render the color how u expected or that there is no or bad fall-back and it will revert to the default color of the browsers.

#### Web examples
**Low contrast**

![low contrast](./images/css-tricks.png)

**Color not rendering as expected**

![css var](./images/css-vars.png)
*left: Chrome (css vars work) right: IE11 (css vars don't work)*

### No mouse/ No trackpad
