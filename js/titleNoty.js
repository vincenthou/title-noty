(function(win, undef){
    titleNoty = {
        init: function (config) {
            !config && (config = {});
            this.interval = config.interval || 200;
            this.title = config.title || document.title;
            this.message = config.message || this.title;
            this.currentTitle = this.message;
            if (this.interval) {
                this.timer = setInterval(this._render, this.interval);
            } else {
                this.number = 0;
                this.numberWrapper = config.numberWrapper || '(number)';
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
        _render: function() {
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
            !this.interval && this.init();
            this.number++;
            this._replaceNum();
        },
        sub: function() {
            !this.interval && this.init();
            this.number--;
            (this.number < 0) && (this.number = 0);
            this._replaceNum();
        },
        set: function(number) {
            !this.interval && this.init();
            number = parseInt(number);
            if (!isNaN(number)) {
                this.number = number;
                (this.number < 0) && (this.number = 0);
                this._replaceNum();
            }
        },
        _replaceNum: function() {
            numberStr = this.numberWrapper.replace('count', this.number)
            !this.number && (numberStr = '')
            document.title = numberStr + this.title;
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