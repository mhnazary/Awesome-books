import timeNow from './module/date.js';
import navigation from './module/navigation.js';
import BookList from './module/bookList.js';

navigation();
timeNow();
const myBookList = new BookList('#input-form', '#Title', '#Author', '#display-area');
myBookList();