import React from "react";
import fictionImg from "../../../assets/images/fiction.jpg";
import nonFictionImg from "../../../assets/images/non-fiction.jpg";
import childrenImg from "../../../assets/images/children.jpg";
import mysteryImg from "../../../assets/images/mystery.jpg";
import horrorImg from "../../../assets/images/horror.jpg";
import romanceImg from "../../../assets/images/romance.jpg";

const categories = [
  {
    name: 'Fiction',
    description: 'Includes novels, short stories, and novellas across various genres such as literary fiction, science fiction, fantasy, romance, mystery, thriller, historical fiction, etc.',
    imageUrl: fictionImg
  },
  {
    name: 'Non-Fiction',
    description: 'Covers a wide range of topics including biographies, memoirs, self-help, psychology, philosophy, history, politics, science, technology, business, health, cookbooks, travel, and more.',
    imageUrl: nonFictionImg
  },
  {
    name: 'Children',
    description: 'Specifically tailored for children and young readers, including picture books, early readers, chapter books, middle-grade fiction, and educational books.',
    imageUrl: childrenImg
  },
  {
    name: 'Mystery',
    description: 'The nature of an event, usually a murder or other crime, remains mysterious until the end of the story.',
    imageUrl: mysteryImg
  },
  {
    name: 'Horror',
    description: 'Seeks to provoke fear, terror, shock, and other similar kinds of feelings in readers. They are usually inspired by folklore, mythology, etc.',
    imageUrl: horrorImg
  },
  {
    name: 'Romance',
    description: 'Often depict a loving relationship between two people. It takes into account their dilemma and issues they face in their relationship.',
    imageUrl: romanceImg
  },
];

const Categories = ({ onCategoryClick }) => {
  return (
    <div className="bg-customBackground h-screen relative">
      <div className="absolute w-[221px] h-[31px] left-[619px] top-0">
        <h1
          className="font-bold text-4xl leading-52 text-red font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Categories
        </h1>
      </div>
      {categories.map((category, index) => (
        <div
          key={category.name}
          className={`absolute w-[220px] h-[320px] bg-white rounded-lg shadow-md`}
          style={{
            left: `${190 + (index % 3) * 405}px`,
            top: `${120 + Math.floor(index / 3) * 450}px`,
          }}
          onClick={() => onCategoryClick(category.name)}
        >
          <img src={category.imageUrl} alt={category.name} className="w-full h-[220px] object-cover rounded-t-lg" />
          <div className="bg-[#edeeb8] p-2 rounded-b-lg">
            <h3
              className="font-bold text-2xl text-center text-[#504237] mt-2"
              style={{ fontFamily: "Inika" }}
            >
              {category.name}
            </h3>
            <p
              className="text-sm text-center mt-2 text-[#504237]"
              style={{ fontFamily: "Inika" }}
            >
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
