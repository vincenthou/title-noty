(function(win, undef){
    var checkInterval = 100;
    titleNoty = {
        init: function (config) {
            this.checkInterval = config.checkInterval || 200;
            this.effect = config.effect || 'flash'
            this.title = config.title || document.title;
            this.message = config.message || this.title;
            this.currentTitle = this.message;
            if (this.effect !== 'addition') {
                this.timer = setInterval(this.render, this.checkInterval);
            } else {
                this.counter = 0;
                this.counterWrapper = config.counterWrapper || '(count)';
            }
            var self = this;
            document.addEventListener("visibilitychange", function(evt) {
                if (!document.hidden) {
                    clearInterval(self.timer);
                    self.timer = null;
                    self.currentTitle = self.title;
                }
            }, false);
            return this;
        },
        render: function() {
            self = this;
            document.title = self.currentTitle;
            switch (self.effect) {
                case 'flash': {
                    self.currentTitle = (self.title === self.currentTitle) ? self.message : self.title;
                }
                break;
                case 'scroll': {
                    self.currentTitle = self.currentTitle.slice(1)
                    !self.currentTitle.length && (self.currentTitle = self.message);
                }
                break;
            }
        },
        add: function() {
            this.counter++;
            this.replaceCount();
        },
        minus: function() {
            this.counter--;
            (this.counter < 0) && (this.counter = 0);
            this.replaceCount();
        },
        set: function(number) {
            number = parseInt(number);
            if (!isNaN(number)) {
                this.counter = number;
                (this.counter < 0) && (this.counter = 0);
                this.replaceCount();
            }
        },
        replaceCount: function() {
            counterStr = this.counterWrapper.replace('count', this.counter)
            !this.counter && (counterStr = '')
            document.title = counterStr + this.title;
        }
    };
    //Support AMD module definition
    if (typeof define === "function" && define.amd) {
        define( "titleNoty", [], function() {
            return titleNoty;
        });
    } else {
        win.titleNoty = titleNoty;
    }
}(window, undefined));