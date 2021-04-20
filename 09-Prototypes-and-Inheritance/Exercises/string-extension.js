(function solve() {
    String.prototype.ensureStart = function(str) {
        if (this.substring(0, str.length) !== str) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (this.substring(this.length - str.length) !== str) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        if (!this.includes(' ')) {
            return this.slice(0, n - 3).concat('...');
        } else {
            const words = this.split(' ').map((el) => el + ' ');
            let newString = '';

            while ((newString + words[0]).length < n) {
                newString += words.shift();
            }

            return newString.trim().concat('...');
        }
    };

    String.format = function (str, ...params) {
        params.forEach((key, index) => {
            str = str.replace(`{${index}}`, key);
        });
        return str;
    };
})();