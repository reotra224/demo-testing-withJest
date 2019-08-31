describe('cart', () => {
  it('should add book', () => {
    const cart = new Cart();

    const b1 = new Book('Book1', 'Traoré');
    const b2 = new Book('Book2', 'Kaba');

    cart.addBook(b1);
    cart.addBook(b2);

    let bookList: any[];
    bookList = cart.getBookList();

    expect(bookList).toEqual([b1, b2]);
  });
  //it.todo('should add book');
});
