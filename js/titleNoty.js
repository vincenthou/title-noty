(function(win, undef){
    noty = {
        init: function (config) {
            !config && (config = {});
            var self = this;
            this.interval = config.interval || 500;
            this.title = config.title || document.title;
            this.message = config.message || this.title;
            this.numberWrapper = config.numberWrapper || '(number)';
            this.max = config.max || 99;
            this.effect = config.effect || '';
            this.currentTitle = this.message;
            this.number = 0;
            if (this.effect) {
                this.timer = setInterval(function(){
                    document.title = self.currentTitle;
                    noty['_' + self.effect].call(self);
                }, this.interval);
            }
            document.addEventListener("visibilitychange", function(evt) {
                if (!document.hidden) {
                    clearInterval(self.timer);
                    self.timer = null;
                    self.currentTitle = self.title;
                }
            }, false);
            return this;
        },
        _flash: function() {
            (this.title === this.message) && (this.message = '');
            this.currentTitle = (this.title === this.currentTitle) ? this.message : this.title;
        },
        _scroll: function() {
            this.currentTitle = this.currentTitle.slice(1)
            !this.currentTitle.length && (this.currentTitle = this.message);
        },
        add: function() {
            !this.interval && this.init();
            this.number++;
            noty._replaceNum.call(this);
        },
        sub: function() {
            !this.interval && this.init();
            this.number--;
            (this.number < 0) && (this.number = 0);
            noty._replaceNum.call(this);
        },
        set: function(number) {
            !this.interval && this.init();
            var number = parseInt(number);
            if (!isNaN(number)) {
                this.number = number;
                (this.number < 0) && (this.number = 0);
                noty._replaceNum.call(this);
            }
        },
        _replaceNum: function() {
            var number = this.number > this.max ? (this.max + '+') : this.number;
            var numberStr = this.numberWrapper.replace('number', number)
            !this.number && (numberStr = '')
            document.title = numberStr + this.title;
        },
        favicon: function() {
            console.warn("Not implemented yet");
        }
    };
    //Define methods exposed
    var exposed = {
        init: noty.init,
        add: noty.add,
        sub: noty.sub,
        set: noty.set,
        favicon: noty.favicon
    };
    //Add effect methods
    var effects = ['flash', 'scroll'];
    for (var i = 0; i < effects.length; i++) {
        var effect = effects[i]
        exposed[effect] = (function(effect) {
            return function(msg) {
                !this.interval && this.init({message:msg, effect:effect});
            };
        })(effect);
    }
    //Support AMD module definition
    if (typeof define === "function" && define.amd) {
        define( "titleNoty", [], function() {
            return exposed;
        });
    } else {
        win.titleNoty = exposed;
    }
}(window, undefined));