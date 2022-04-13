> This package only supports Alpine v3.x\
> This package needs TailwindCSS

# Alpine Lightbox

Add a dynamic lightbox to your Alpine 3.x components with a custom directive.

## About
This plugin adds a new `x-lightbox` to Alpine.

## Installation

### NPM
```bash
npm install @edsardio/alpine-lightbox
```

### JS
Register your `x-lightbox` directive to Alpine.

```js
import Alpine from "alpinejs";
import Lightbox from "@edsardio/alpine-lightbox";

Alpine.plugin(Lightbox);

window.Alpine = Alpine;
window.Alpine.start();
```

## Usage

### HTML
To create a lightbox add the directive to the element as following, this will register a click event that opens the lightbox.
```html
<img x-lightbox="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
```
