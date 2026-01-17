/* this keyword always refers to current object */
/* this keywordis executed function it would poin to windows orglobal object */

const book = {
  title: 'JavaScript Basics',
  read() {
    console.log(this);
  },
};
book.read(); //refers to book object
book.stopReading = function () {
  console.log(this);
}; //added method to book object
book.stopReading(); //refers to book object

function watchMovie() {
  console.log(this);
}
watchMovie(); //refers to global object
