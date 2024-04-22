// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
//   displayInfo() {
//     console.log(`Одного из наших сотрудников зовут ${this.name}`);
//   }
// }
// class Manager extends Employee {
//   constructor(name, department) {
//     super(name);
//     this.department = department;
//   }
//   displayInfo() {
//     console.log(
//       `Менеджера зовут ${this.name}, работает в отделе ${this.department}`
//     );
//   }
// }

// // Пример использования классов

// const employee = new Employee("John Smith");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo();

// Вывод:
// Name: Jane Doe
// Department: Sales

// Задание 2
// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

//
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber, price) {
    this.orderNumber = orderNumber;
    this.products = [];
    this.totalPrice = price;
  }
  addProduct(product) {
    this.totalPrice += products.price;
    this.products.push({ product });
  }
  getTotalPrice() {
    // for (let i = 0; i < products.length; i++) {
    //   this.totalPrice += this.products.price[i];
    return this.totalPrice;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
