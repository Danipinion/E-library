import { Books as defaultBooks } from "../constants/Books.js";
import { BorrorwBooks } from "../constants/BorrowBooks.js";

const booksContainer = document.getElementById("books-container");
const searchInput = document.getElementById("cari-buku-peminjaman");
const searchButton = document.getElementById("btn-cari-buku-peminjaman");

let Books = [];

function getBooksData() {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    Books = JSON.parse(storedBooks);
  } else {
    Books = defaultBooks;
    localStorage.setItem("books", JSON.stringify(Books));
  }
}

getBooksData();

function addBorrowBook(id) {
  // const newBorrowBook = {
  //   id,
  //   startBorrow: new Date().toISOString().split("T")[0],
  //   endBorrow: new Date(new Date().setDate(new Date().getDate() + 3))
  //     .toISOString()
  //     .split("T")[0],
  // };

  // BorrorwBooks.push(newBorrowBook);
  // localStorage.setItem(
  //   "BorrowBooks",
  //   JSON.stringify([
  //     ...JSON.parse(localStorage.getItem("BorrowBooks") || "[]"),
  //     newBorrowBook,
  //   ])
  // );

  const index = Books.findIndex((book) => book.id === id);
  Books[index].isBorrowed = true;
  localStorage.setItem("books", JSON.stringify(Books));

  displayBooks(Books);
}

function displayBooks(booksToDisplay) {
  booksContainer.innerHTML = "";

  booksToDisplay.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className =
      "max-w-sm bg-[#c9a185] border border-gray-200 rounded-lg shadow-sm";
    bookDiv.innerHTML = `
      <a href="#">
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
        <button class="borrow-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-book-id="${
          book.id
        }">
          ${book.isBorrowed ? "Dipinjam" : "Pinjam Sekarang"}
        </button>
      </div>
    `;
    booksContainer.appendChild(bookDiv);
  });

  const borrowButtons = document.querySelectorAll(".borrow-button");
  borrowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const bookId = parseInt(this.dataset.bookId);
      const book = Books.find((b) => b.id === bookId);
      if (book.isBorrowed) {
        alert("Buku sedang dipinjam");
      } else {
        addBorrowBook(bookId);
      }
    });
  });
}

displayBooks(Books);

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = Books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
});
