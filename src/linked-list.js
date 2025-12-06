class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {

    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;

    }

    size() {
        let size = 0;
        let current = this.head;
        while (current !== null) {
            current = current.nextNode;
            size++;
        }
        return size;
    }

    head() {
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return null;
        }
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index < 0) {
            return null;
        }
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }

    pop() {
        if (this.head === null) {
            return null;
        }
        if (this.head.nextNode === null) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        return this.find(value) !== null;
    }

    find(value) {
        let index = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return index;
            index++;
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        let result = current
        let current = this.head;
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }

    insertAt(value, index) {
        let current = this.head;
        let previous = null;
        while (current !== null && current !== this.at(index)) {
            previous = current;
            current = current.nextNode;
        }
        if (current === this.at(index)) {
            let newNode = new Node(value);
            previous.nextNode = newNode;
            newNode.nextNode = current;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) { 
            return; // Do nothing if the index is invalid
        }
        
        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current !== null && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }
        if (current !== null) {
            if (previous === null) {
                // Remove head node
                this.head = current.nextNode;
            } else {
                // Bypass the current node
                previous.nextNode = current.nextNode;
            }
        }
    }
}