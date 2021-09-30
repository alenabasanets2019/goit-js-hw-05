class Storage {
    constructor(options) {
        this.items = options
    }

    getItems() {                    // возвращает массив текущих товаров
        return this.items;
    }  

    addItem(item) {                 // получает новый товар и добавляет его к текущим
        this.items.push(item);
    }

    removeItem(item) {              // получет товар и, если он есть, удаляет его из текущих
        /*
        this.items.forEach(function(currentItem, index) {
            if (item == currentItem) {
                this.items.splice(this.items[index], 1);
            }
          });
          */
        for (let i = 0; i < this.items.length; i++) {
            if (item == this.items[i]) {
                this.items.splice(i, 1);
            }
        }
    }

}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]