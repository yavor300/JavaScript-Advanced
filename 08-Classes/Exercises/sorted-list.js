class List {
    constructor() {
        this.elements = [];
        this.size = 0;
    }

    add(element) {
        this.elements.push(element);
        this._sort();
        this.size++;
    }

    remove(index) {
        if (this._validateIndex(index)) {
            this.elements.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (this._validateIndex(index)) {
            return this.elements[index];
        }
    }

    // get size() {
    //     return this._size;
    // }
 
    _sort() {
        this.elements.sort((f, s) => f - s);
    }

    _validateIndex(index) {
        if (index < 0 || index >= this.elements.length) {
            return false;
        }
        return true;
    } 
}
