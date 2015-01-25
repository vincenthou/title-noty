# titleNoty
Simple plugin to notify information by refreshing title name, cancel message notifing when current page is visiable.

#Installation
Bower support
```javascript
bower install titleNoty
```

#Usage
There are three types supported now: flash, scroll, addition.

* Flash effect

This is the default effect, so the effect option is needless.
The message will show and hide periodically based on **checkInterval** configuration.

```javascript
titleNoty.init({
    message: 'You have unread message'
    effect: 'flash'
});
```

* Scroll effect

The message will scroll from right to the left periodically based on **checkInterval** configuration.

```javascript
titleNoty.init({
    message: 'You have unread message'
    effect: 'flash'
});
```

* Adition effect

The title will be kept and extra count number is added before title.
**counterWrapper** is used to specify the wrapper for counter, default wrapper is '(count)', count is used as the placeholder for replacing the count number.

```javascript
titleNoty.init({
    effect: 'addition'
});
```

Add count number
```javascript
titleNoty.add();
```

Minus count number
```javascript
titleNoty.minus();
```

Set count number directly, the number should be number or string containing number.
```javascript
titleNoty.set(10);
```

# TODO
* Support notification
* Test Browser compability
