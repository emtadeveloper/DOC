let message = "Hello World";

class HashTabel {
    constructor() {
        this.size = 10000;
        this.products = Array(1000).fill(null);
    }
    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charAtCode(0);
        }
        return hash % this.size;
    }
}

const tabel = new HashTabel();

function findFristChar(str) {
    const tabel = {};
    for (char of str) {
        console.log(tabel[char]);
        if (tabel[char]) {
            return char;
        }
        tabel[char] = 1;
    }
}

console.log(findFristChar(message));
