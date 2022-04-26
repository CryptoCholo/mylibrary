//Handle storage of class
let myLibrary = []; 


//Book Constructor
class Book { 
        constructor (title, author, pages, language, pubDate, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.pubDate = pubDate;
    this.read = read;
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.language}, published in ${this.pubDate}, ${this.read}`;
    }
  }
}


function addBooktoLibrary (book) {
    myLibrary.push(book); 
   
}



function displayBooks(){
    const content = document.querySelector(".main-content");
    for(let item in myLibrary) {
        let newCard = document.createElement("div");
        newCard.classList.add("single-book");        
        let bookCloseBtn = document.createElement("span");
        bookCloseBtn.classList.add("material-icons");
        bookCloseBtn.classList.add("md-18");
        bookCloseBtn.textContent = "close";
        let title = document.createElement("h3");
        title.textContent = `${myLibrary[item].title}`;
        let author = document.createElement("span");
        author.innerHTML = `<br><strong>By: </strong>${myLibrary[item].author}`;
        let pages = document.createElement("span");
        pages.innerHTML = `<strong>Number of Pages: </strong>${myLibrary[item].pages} pages`;
        let myLang = document.createElement("span");
        myLang.innerHTML = `<strong>Language: </strong>${myLibrary[item].language}`;
        let pubDate = document.createElement("span");
        pubDate.innerHTML = `<strong>Published: </strong>${myLibrary[item].pubDate}<br><br>`;
        let bookSwitch = document.createElement("label");
        bookSwitch.classList.add("switch");
        let slider = document.createElement("INPUT");
        slider.setAttribute("type", "checkbox");
        let span = document.createElement("span");
        span.classList.add("slider");
        span.classList.add("round");
       
        if(myLibrary[item].read){
            slider.style.background = "linear-gradient(30deg, rgba(22, 231, 22, 0.7) 30%, white)";
        } else {
            slider.style.background = "linear-gradient(30deg, rgba(209, 10, 10, 0.7) 35%, white)";
        }

        slider.addEventListener("toggle", (e) => {    
        let red = "linear-gradient(30deg, rgba(209, 10, 10, 0.7) 35%, white)";
        let green = "linear-gradient(30deg, rgba(22, 231, 22, 0.7) 30%, white)";
        slider.style.background = green ? slider.style.background = red : slider.style.background = green; 
        });
    
        bookSwitch.appendChild(slider);
        bookSwitch.appendChild(span);
        newCard.appendChild(bookCloseBtn);
        newCard.appendChild(title);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        newCard.appendChild(myLang);
        newCard.appendChild(pubDate);
        newCard.appendChild(bookSwitch);
        content.appendChild(newCard);
        
        updateBookCount();
    }
}




//New Book Form
const myform = document.querySelector(".add-book-section");

function openForm() {
    myform.style.display = "flex";
}

function closeForm() {
    myform.style.display = "none";
}

const addBtn = document.querySelector(".material-icons");
addBtn.addEventListener("click", (e) => {
    openForm();
})

const closeBtn = document.querySelector(".close-form");
closeBtn.addEventListener("click", (event) => {
     closeForm();
})


//reset Display
function resetDisplay (){
    document.querySelector("#new-book-title").value = "";
    document.querySelector("#new-book-author").value = "";
    document.querySelector("#new-pages").value = "";
    document.querySelector("#new-languages").value = "";
    document.querySelector("#new-publishing-date").value = "";
    document.querySelector("#read").checked = "";
    const cards = document.querySelector(".main-content").childNodes;
    for(let i = cards.length - 1; i >= 0; i--){
        let card = cards[i];
            card.remove();
    }
}

//Add a Book
document.querySelector("#addBookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#new-book-title").value;
    const author = document.querySelector("#new-book-author").value;
    const pages = document.querySelector("#new-pages").value;
    const language = document.querySelector("#new-languages").value;
    const pubDate = document.querySelector("#new-publishing-date").value;
    const read = document.querySelector("#read").checked;

   const book = new Book(title, author, pages, language, pubDate, read);
   addBooktoLibrary(book);
   resetDisplay();
   displayBooks();
   closeForm();
})

const bookCount = document.getElementById("book-count");
const updateBookCount = () => {
bookCount.innerText = JSON.stringify(myLibrary.length);
};

document.addEventListener("DOMContentLoaded", (e) => {
    updateBookCount();
})

//Remove book

