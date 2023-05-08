const navList = document.getElementById('navList');
const navAdd = document.getElementById('navAdd');
const navContact = document.getElementById('navContact');
const listHeader = document.getElementById('list');
const addNewHeader = document.getElementById('add_new');
const contactHeader = document.getElementById('contact');
const bookList = document.getElementById('display-area');
const Addbook = document.getElementById('input-form');
const contact = document.getElementById('contact_sec');

const navigation = () => {
  navList.addEventListener('click', () => {
    listHeader.style.display = 'inline';
    bookList.style.display = 'inline';
    addNewHeader.style.display = 'none';
    Addbook.style.display = 'none';
    contactHeader.style.display = 'none';
    contact.style.display = 'none';
  });

  navAdd.addEventListener('click', () => {
    listHeader.style.display = 'none';
    bookList.style.display = 'none';
    addNewHeader.style.display = 'inline';
    Addbook.style.display = 'flex';
    contactHeader.style.display = 'none';
    contact.style.display = 'none';
  });

  navContact.addEventListener('click', () => {
    listHeader.style.display = 'none';
    bookList.style.display = 'none';
    contactHeader.style.display = 'inline';
    contact.style.display = 'inline';
    addNewHeader.style.display = 'none';
    Addbook.style.display = 'none';
  });
};

export default navigation;
