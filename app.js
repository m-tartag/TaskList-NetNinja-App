document.addEventListener('DOMContentLoaded', function() {

  // Store Document Data in Global Variables
  
  const list = document.querySelector('#book-list ul');
  const forms = document.forms;

  // Delete Book
  
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // Add Book

  const addForm = forms['add-book'];
  addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create Elements

    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // Add Text

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // Add Classes

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // Append to DOM

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // Hide Books

  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // Filter Books

  const searchBar = forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });

  // Tabbed Content

  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });
});

// TypeWriter

const typed = new Typed('.type', {
  strings: [
    'I am going to learn a new programming language',
    'I have been learning algorithms',
    'I am learning karate.. watch out',
    'I had 10 coffees',
    'I am learning React.js',
    'I am not doing ANYTHING',
    'I am studying all day',
  ],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
});
