class Stringer {
    constructor(innerString , innerLength) {
        this.innerString  = innerString ;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerString.length - this.innerLength) + '...';
        }
       return this.innerString; 
    }
}