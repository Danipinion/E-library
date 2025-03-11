import { BorrorwBooks } from "../constants/BorrowBooks.js";

const booksContainer = document.getElementById("my-books-container");
const countMyBooks = document.getElementById("buku-ku");

let borrowBooks = [];
let allBooks = [];

window.addEventListener("load", function () {
  const storedBorrowBooks = localStorage.getItem("BorrowBooks");
  const storedAllBooks = localStorage.getItem("books");

  if (storedBorrowBooks) {
    borrowBooks = JSON.parse(storedBorrowBooks);
    countMyBooks.innerText = borrowBooks.length;
    console.log("🚀 ~ borrowBooks:", borrowBooks);
  }

  if (storedAllBooks) {
    allBooks = JSON.parse(storedAllBooks);
    console.log("🚀 ~ allBooks:", allBooks);
  }

  displayBorrowedBooks();
});

function displayBorrowedBooks() {
  const borrowedBooksData = borrowBooks
    .map((borrowedBook) => {
      return allBooks.find((book) => book.id === borrowedBook.id);
    })
    .filter((book) => book !== undefined);

  displayBooks(borrowedBooksData);
}

function displayBooks(booksToDisplay) {
  booksContainer.innerHTML = "";

  booksToDisplay.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className =
      "max-w-sm bg-[#c9a185] border border-gray-200 rounded-lg shadow-sm";
    bookDiv.innerHTML = `
      <a href="/pages/view/view.html">
        <img class="rounded-t-lg" src="${book.image}" alt="" />
      </a>
      <div class="p-5">
        <div class="flex items-center mb-3">
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">${
            book.rating
          }</p>
        </div>
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
            book.title
          }</h5>
        </a>
        <p class="mb-3 font-normal text-white">
          ${
            book.description.length > 100
              ? book.description.substring(0, 100) + "..."
              : book.description
          }
        </p>
      </div>
    `;
    booksContainer.appendChild(bookDiv);
  });
}
