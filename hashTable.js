function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(6);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(items => {
      if (items) {
        items.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  getItem = key => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }
    // O(n)
    return this.table[idx].find(item => item[0] === key)[1];
  };

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.8) {
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "jerry");
myTable.setItem("lastName", "shi");
myTable.setItem("age", 15);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table.length)
myTable.setItem("56r", 5);
console.log(myTable.table.length)
myTable.setItem("--fds", "1/2/3");
myTable.setItem("=====s", 5);
myTable.setItem("mvmls..ssw", "1/2/3");
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
