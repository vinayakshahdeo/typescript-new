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
      console.log(author); //refers to global object
    });
  },
};
book.printAuthors(); //refers to author values inside forEach
