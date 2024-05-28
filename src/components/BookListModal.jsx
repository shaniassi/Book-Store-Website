// /src/components/BookListModal.jsx

import React from "react";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";
import book5 from "../assets/images/book5.jpg";
import book6 from "../assets/images/book6.jpg";
import book7 from "../assets/images/book7.jpg";
import book8 from "../assets/images/book8.jpg";
import book9 from "../assets/images/book9.jpg";
import book10 from "../assets/images/book10.jpg";
import book11 from "../assets/images/book11.jpg";
import book12 from "../assets/images/book12.jpg";
import book13 from "../assets/images/book13.jpg";
import book14 from "../assets/images/book14.jpg";
import book15 from "../assets/images/book15.jpg";
import book16 from "../assets/images/book16.jpg";
import book17 from "../assets/images/book17.jpg";
import book18 from "../assets/images/book18.jpg";

const booksByCategory = {
  Fiction: [
    { title: "The Great Gatsby", imageUrl: book1 },
    { title: "The Hunger Games", imageUrl: book2 },
    { title: "The Book Thief", imageUrl: book3 }
  ],
  "Non-Fiction": [
    { title: "The Sixth Extinction", imageUrl: book4 },
    { title: "Into Thin Air", imageUrl: book5 },
    { title: "In Cold Blood", imageUrl: book6 }
  ],
  Children: [
    { title: "Charlotte's Web", imageUrl: book7 },
    { title: "The Secret Library", imageUrl: book8 },
    { title: "The Curious Why", imageUrl: book9 }
  ],
  "Crime & Mystery": [
    { title: "Gone Girl", imageUrl: book10 },
    { title: "Bluebird, Bluebird", imageUrl: book11 },
    { title: "Murder on the Orient Express", imageUrl: book12 }
  ],
  Horror: [
    { title: "The Shining", imageUrl: book13 },
    { title: "Frankenstein", imageUrl: book14 },
    { title: "It", imageUrl: book15 }
  ],
  Romance: [
    { title: "Pride and Prejudice", imageUrl: book16 },
    { title: "The Notebook", imageUrl: book17 },
    { title: "The Fault in Our Stars", imageUrl: book18 }
  ]
};

const BookListModal = ({ category, onClose }) => {
  const books = booksByCategory[category] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#504237] border border-[#504237] px-3 py-2 rounded-full"
          style={{ fontSize: '1.2rem', lineHeight: '1rem', zIndex: 1000 }}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{category} Books</h2>
        <ul className="flex flex-wrap">
          {books.map((book, index) => (
            <li key={index} className="mb-4 flex flex-col items-center w-1/3 p-2">
              <img src={book.imageUrl} alt={book.title} className="w-32 h-48 mb-2" />
              <span>{book.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookListModal;
