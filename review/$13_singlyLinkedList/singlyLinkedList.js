class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let lastNode = this.head;
        let nextNode = lastNode;
        while (lastNode.next) {
            nextNode = lastNode;
            lastNode = lastNode.next;
        }
        this.tail = nextNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return lastNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        const firstNode = this.head;
        this.head = firstNode.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return firstNode;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let thisNode = this.head;
        for (let i = 0; i < index; i++) {
            thisNode = thisNode.next;
        }
        return thisNode;
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

    insert(value, index) {
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
            insertedNode.nextNode = previousNode.next;
            previousNode.next = insertedNode;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            const removedNode = this.get(index);
            const previousNode = this.get(index - 1);
            previousNode.next = this.get(index + 1);
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

let list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
list.push("fella!");
list.print();
list.shift(); // remove Hello
list.print();
list.unshift("Goodbye"); // add Goodbye to the head
list.print();
list.set("Hey", 0); // change Goodbye to Hey
list.print();
list.insert("big", 2); // insert big in front of fella
list.print();
list.remove(2); // remove big
list.print();
list.reverse();
list.print();

let newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.print();
newList.reverse();
newList.print();
