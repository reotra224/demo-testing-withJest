class Cart {
  carts: Book[] = [];

  constructor() {}

  addBook(b1: Book) {
    //this.carts = [...this.carts, b1];
    this.carts.push(b1);
  }

  getBookList(): Book[] {
    return this.carts;
  }
}
