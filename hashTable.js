function hashStringToInt(s) {
  return 0;
}

class HashTable {
  table = new Array(100)

  setItem = (key, value) => {
    const idx = hashStringToInt(key);
    this.table[idx] = value
  };

  getItem = key => {
    const idx = hashStringToInt(key);
    return this.table[idx];
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'jerry');

myTable.getItem('firstName');

console.log(myTable.getItem('firstName'));
