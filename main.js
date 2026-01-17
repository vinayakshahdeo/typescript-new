/* this keyword always refers to current object */
/* this keywordis executed function it would poin to windows orglobal object */

const book = {
  title: 'JavaScript Basics',
  read() {
    console.log(this);
  },
  authors: ['John Doe', 'Jane Smith'],
  printAuthors() {
    this.authors.forEach(function (author) {
      console.log(this.title, ' - ', author); //refers to undefined object when this is not passed as Arg to forEach function
    }, this); //passing this as Arg to forEach
  },
  printAuthorsArrow() {
    this.authors.forEach((author) => {
      console.log(this.title, ' - ', author); //refers to book object as arrow function doesnt have its own thisitsmaking use of closure of parent scope
    });
  },
};
book.printAuthors(); //refers to author values inside forEach
book.printAuthorsArrow(); //refers to author values inside forEach
