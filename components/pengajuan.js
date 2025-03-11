import { Books as defaultBooks } from "../constants/Books.js";
import { BorrorwBooks } from "../constants/BorrowBooks.js";

const booksContainer = document.getElementById("books-container");

let Books = [];
let BorrowBooks = [];

function getBooksData() {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    Books = JSON.parse(storedBooks);
  } else {
    Books = defaultBooks;
    localStorage.setItem("books", JSON.stringify(Books));
  }
}

function getBorrowBooksData() {
  const storedBorrowBooks = localStorage.getItem("BorrowBooks");
  if (storedBorrowBooks) {
    BorrowBooks = JSON.parse(storedBorrowBooks);
  } else {
    BorrowBooks = [];
    localStorage.setItem("BorrowBooks", JSON.stringify(BorrowBooks));
  }
}

getBooksData();
getBorrowBooksData();

function acceptBorrowBook(id) {
  const bookIndex = Books.findIndex((book) => book.id === id);

  if (bookIndex !== -1) {
    Books[bookIndex].isAccepted = true;
    localStorage.setItem("books", JSON.stringify(Books));
  }

  const newBorrowBook = {
    id,
    startBorrow: new Date().toISOString().split("T")[0],
    endBorrow: new Date(new Date().setDate(new Date().getDate() + 3))
      .toISOString()
      .split("T")[0],
  };

  BorrorwBooks.push(newBorrowBook);
  localStorage.setItem(
    "BorrowBooks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("BorrowBooks") || "[]"),
      newBorrowBook,
    ])
  );

  displayBorrowedBooks();
}

function rejectBorrowBook(id) {
  const bookIndex = Books.findIndex((book) => book.id === id);
  const borrowBookIndex = BorrowBooks.findIndex(
    (borrowBook) => borrowBook.id === id && !borrowBook.isAccepted
  );

  if (bookIndex !== -1) {
    Books[bookIndex].isBorrowed = false;
    localStorage.setItem("books", JSON.stringify(Books));
  }

  if (borrowBookIndex !== -1) {
    BorrowBooks.splice(borrowBookIndex, 1);
    localStorage.setItem("BorrowBooks", JSON.stringify(BorrowBooks));
  }

  displayBorrowedBooks();
}

function displayBorrowedBooks() {
  booksContainer.innerHTML = "";

  const borrowedBooks = Books.filter((book) => book.isBorrowed);

  borrowedBooks.forEach((book) => {
    const borrowRequest = Books.find(
      (borrow) => borrow.id === book.id && !borrow.isAccepted
    );
    console.log("🚀 ~ borrowedBooks.forEach ~ borrowRequest:", borrowRequest);

    if (borrowRequest) {
      const bookDiv = document.createElement("div");
      bookDiv.className =
        "max-w-sm bg-[#c9a185] border border-gray-200 rounded-lg shadow-sm mb-4";
      bookDiv.innerHTML = `
        <a href="#">
          <img class="rounded-t-lg" src="${book.image}" alt="" />
        </a>
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${book.title}
          </h5>
          <p class="mb-3 font-normal text-white">
            ${
              book.description.length > 100
                ? book.description.substring(0, 100) + "..."
                : book.description
            }
          </p>
          <div class="flex justify-between">
            <button class="accept-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" data-book-id="${
              book.id
            }">
              Terima
            </button>
            <button class="reject-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" data-book-id="${
              book.id
            }">
              Tolak
            </button>
          </div>
        </div>
      `;
      booksContainer.appendChild(bookDiv);
    }
  });

  const acceptButtons = document.querySelectorAll(".accept-button");
  acceptButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const bookId = parseInt(this.dataset.bookId);
      acceptBorrowBook(bookId);
    });
  });

  const rejectButtons = document.querySelectorAll(".reject-button");
  rejectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const bookId = parseInt(this.dataset.bookId);
      rejectBorrowBook(bookId);
    });
  });
}

displayBorrowedBooks();
