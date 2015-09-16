# Title titleNoty

Simple plugin to notify information by refreshing title name, cancel message notifing when current page is visiable. Vanilla javascript with no dependency, **less than 3kb** after minified.

#Installation

![bower](https://img.shields.io/bower/v/title-noty.svg)

```javascript
bower install title-noty
```

#Usage

There are three types supported now: flash, scroll, add and subtract number.

## Show title message with flash effect

This is the default effect, so the effect option is needless.
The message will show and hide periodically based on **checkInterval** configuration.

```javascript
titleNoty.flash(); //Flash current title
titleNoty.flash('You have unread message'); //Flash between current title and specified message
```

## Show title message with scroll effect

The message will scroll from right to the left periodically based on **checkInterval** configuration.

```javascript
titleNoty.scroll(); //Scroll current title
titleNoty.scroll('You have unread message'); //Scroll specified message
```

## Add and subtract count number with plain text

The original title will be kept and extra count number is added before title.

Add count number

```javascript
titleNoty.add();
```

Subtract count number

```javascript
titleNoty.sub();
```

Set count number directly, the number should be number or string containing number.

```javascript
titleNoty.set(10);
```

## Add and subtract count number on favicon image

All the count number manipulation methods are the same as examples above. In addition, you should tell `titleNoty` you want to add number with favicon

```javascript
titleNoty.favicon();
```

If you want to draw the number at the bottom right of original favicon image, pass a true value to the method.

```javascript
titleNoty.favicon(true);
```

## Advanced configuration and usage

Advanced configuration can be specified with init method of `titleNoty` before calling other methods.

```javascript
titleNoty.init({
    numberWrapper: '[number]',
    message: 'You have unread message',
    interval: 100,
    title: 'Title',
    number: 5,
    max: 30
});
```

* **numberWrapper** is used to specify the wrapper for number, default wrapper is '(number)', `number` is used as the placeholder for replacing the count number.
* **message** is used to specify the messages to be shown with flash and scroll effect. If specified with `init` method, you can call `flash` and `scroll` directly.
* **interval** is used to specify the time interval for flash and scroll effect. If not specified, default value is **500**.
* **title** is used to specify the initial title to be shown. If not specified, default value is current title value.
* **number** is used to specify the initial number to count. If not specified, default value is **0**.
* **max** is used to specify the maximum count number, after the number is reached, a plus symbol will be added. If not specified, default value is **99**, count number exceed 99 will be displayed as `99+`.

Current number can be got directly

```javascript
console.log(titleNoty.number);
```

# TODO
* Support notification
* Test Browser compability

# Inspired by

* [notify-better](https://github.com/peachananr/notify-better) Add and minus numbers on the title with circle image
* [blinkTitle](https://github.com/flouthoc/blinkTitle.js) Blink title with delay time
* [TitleNotifier.js](https://github.com/roshiro/TitleNotifier.js) Add and minus numbers on the title with plain text
