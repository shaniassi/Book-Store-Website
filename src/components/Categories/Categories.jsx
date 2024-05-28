import React from "react";

const Categories = () => {
  return (
    <div className="bg-customBackground min-h-screen relative">
      <div className="absolute w-[221px] h-[31px] left-[619px] top-0">
        <h1
          className="font-bold text-4xl leading-52 text-red font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Categories
        </h1>
      </div>
      <div className="absolute w-[220px] h-[220px] left-[190px] top-[120px] bg-white rounded-lg">
        <h3
          className="absolute w-[154px] h-[22px] left-[33px] top-[230px] font-bold text-2xl leading-39 text-center text-[#504237] font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Fiction
        </h3>
        <p
          className="absolute left-202 top-[270px] text-sm leading-26 text-center text-brown"
          style={{ fontFamily: "Inika" }}
        >
          Includes novels, short stories, and novellas across various genres
          such as literary fiction, science fiction, fantasy, romance, mystery,
          thriller, historical fiction, etc.
        </p>
      </div>
      <div className="absolute w-[220px] h-[220px] left-[595px] top-[120px] bg-white rounded-lg">
        <h3
          className="absolute w-[154px] h-[22px] left-[33px] top-[230px] font-bold text-2xl leading-39 text-center text-[#504237] font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Non-Fiction
        </h3>
        <p
          className="absolute left-202 top-[270px] text-sm leading-26 text-center text-brown"
          style={{ fontFamily: "Inika" }}
        >
          Covers a wide range of topics including biographies, memoirs,
          self-help, psychology, philosophy, history, politics, science,
          technology, business, health, cookbooks, travel, and more.
        </p>
      </div>
      <div className="absolute w-[220px] h-[220px] left-[1010px] top-[120px] bg-white rounded-lg">
        <h3
          className="absolute w-[154px] h-[22px] left-[33px] top-[230px] font-bold text-2xl leading-39 text-center text-[#504237] font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Children
        </h3>
        <p
          className="absolute left-202 top-[270px] text-sm leading-26 text-center text-brown"
          style={{ fontFamily: "Inika" }}
        >
          Specifically tailored for children and young readers, including
          picture books, early readers, chapter books, middle-grade fiction, and
          educational books.
        </p>
      </div>
      <div className="absolute w-[220px] h-[220px] left-[190px] top-[570px] bg-white rounded-lg">
        <h3
          className="absolute w-[154px] h-[22px] left-[33px] top-[230px] font-bold text-2xl leading-39 text-center text-[#504237] font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Mystery
        </h3>
        <p
          className="absolute left-202 top-[270px] text-sm leading-26 text-center text-brown"
          style={{ fontFamily: "Inika" }}
        >
          Features suspenseful and gripping stories with elements of mystery,
          crime, detective work, espionage, psychological suspense, and legal
          thrillers.
        </p>
      </div>
      <div className="absolute w-[220px] h-[220px] left-[595px] top-[570px] bg-white rounded-lg">
        <h3
          className="absolute w-[154px] h-[22px] left-[33px] top-[230px] font-bold text-2xl leading-39 text-center text-[#504237] font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Romance
        </h3>
        <p
          className="absolute left-202 top-[270px] text-sm leading-26 text-center text-brown"
          style={{ fontFamily: "Inika" }}
        >
          Offers love stories and romantic fiction across various subgenres such
          as contemporary romance, historical romance, paranormal romance,
          romantic suspense, and erotica.
        </p>
      </div>
      <div className="absolute w-[220px] h-[220px] left-[1010px] top-[570px] bg-white rounded-lg">
        <h3
          className="absolute w-[154px] h-[22px] left-[33px] top-[230px] font-bold text-2xl leading-39 text-center text-[#504237] font-inika"
          style={{ fontFamily: "Inika" }}
        >
          Science Fiction
        </h3>
        <p
          className="absolute left-202 top-[270px] text-sm leading-26 text-center text-brown"
          style={{ fontFamily: "Inika" }}
        >
          Explores imaginative worlds, futuristic technology, and speculative
          concepts, encompassing science fiction (e.g., space opera, dystopian
          fiction, cyberpunk)
        </p>
      </div>
    </div>
  );
};

export default Categories;
