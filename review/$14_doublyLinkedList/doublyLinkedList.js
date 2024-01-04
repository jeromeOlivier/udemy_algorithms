class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) {
            return undefined;
        } else {
            const poppedNode = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = poppedNode.prev;
                this.tail.next = null;
                poppedNode.prev = null;
            }
            this.length--;
            return poppedNode;
        }
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index <= this.length / 2) {
            let node = this.head;
            let count = 0;
            while (count !== index) {
                node = node.next;
                count++;
            }
            return node;
        } else {
            let node = this.tail;
            let count = this.length - 1;
            while (count !== index) {
                node = node.prev;
                count--;
            }
            return node;
        }
    }

    set(value, index) {
        const targetNode = this.get(index);
        if (!targetNode) {
            return false;
        } else {
            targetNode.value = value;
            return true;
        }
    }

    insert(value, index){
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.push(value);
            return true;
        } else if (index === 0) {
            this.unshift(value);
            return true;
        } else {
            const insertedNode = new Node(value);
            const previousNode = this.get(index - 1);
            const nextNode = previousNode.next;

            insertedNode.next = nextNode;
            nextNode.prev = insertedNode;
            insertedNode.prev = previousNode;
            previousNode.next = insertedNode;

            this.length++;
            return true;
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === 0) {
            this.shift();
        } else if (index === this.length - 1) {
            this.pop();
        } else {
            const previousNode = this.get(index - 1);
            const removedNode = this.get(index);
            const nextNode = this.get(index + 1);

            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            removedNode.next = null;
            removedNode.prev = null;

            this.length--;
            return removedNode;
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array);
    }
}

const double = new DoublyLinkedList();
double.push(11);
double.push(22);
double.push(33);
double.push(44);
double.push(77);
double.push(88);
double.unshift(55);
double.unshift(66);
// double.insert('BB', 5)
double.print();
double.remove(2);
double.print();
