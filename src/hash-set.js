import { LinkedList } from "./linked-list";

export class HashSet {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    getBucket(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return (this.buckets[index] = this.buckets[index] || new LinkedList);
    }

    getNode(key) {
        const bucket = this.getBucket(key);
        let current = bucket.head;
        while (current) {
            if (current.value.key === key) {
                return current;
            }
            current = current.nextNode;
        }
        return 'Not Found';
    }
    
    resize() {
        let oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;

        for (const bucket of oldBuckets) {
            if (bucket) {
                let current = bucket.head;
                while (current) {
                    const key = current.value.key;
                    const newBucket = this.getBucket(key);
                    newBucket.append({key});
                    this.size++;
                    current = current.nextNode;
                }
            }
        }
    }

    set(key) {
        if (this.size >= this.capacity * this.loadFactor) {
            this.resize();
        }
        
        const bucket = this.getBucket(key);
        let current = bucket.head;
        while (current) {
            if (current.value.key === key) {
                console.log('Cannot alter keys')
                return;
            }
            current = current.nextNode;
        }
        bucket.append({key});
        this.size++;
    }

    get(key) {
        const bucket = this.getBucket(key);
        let current = bucket.head;
        while (current) {
            if (current.value.key === key) {
                return current.value.key;
            }
        }
        return undefined;
    }

    has(key) {
        const bucket = this.getBucket(key);
        let current = bucket.head;
        while (current) {
            if (current.value.key === key) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    remove(key) {
        const bucket = this.getBucket(key);
        const index = bucket.find(key);
        bucket.removeAt(index);
        this.size--;
    }

    length() {
        return this.size;
    }

    clear() {
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    keys() {
        const keyArray = [];
    
        for (const bucket of this.buckets) {
            if (bucket) {
                let current = bucket.head;
                
                while (current) {
                    const currentKey = current.value.key;
                    keyArray.push(currentKey);
                    current = current.nextNode;
                }}
        }

        return keyArray;
    }

    entries() {
        const entryArray = [];
    
        for (const bucket of this.buckets) {
            if (bucket) {
                let current = bucket.head;
                
                while (current) {
                    const currentKey = current.value.key;
                    entryArray.push(`{ ${currentKey} }`);
                    current = current.nextNode;
                }}
        }

        return entryArray;
    }
}