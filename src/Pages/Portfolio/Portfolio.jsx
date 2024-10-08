import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.webp";
import ImageSeven from "../../images/image7.webp";
import ImageEight from "../../images/image8.jpeg";
import ImageNine from "../../images/image9.webp";
import ImageTen from "../../images/image10.webp";
import ImageEleven from "../../images/image11.webp";
import ImageTwelve from "../../images/image12.jpeg";
import ImageThirteen from "../../images/image13.jpeg";
import ImageFourteen from "../../images/image14.jpeg";
import ImageFiveteen from "../../images/image15.jpeg";
import ImageSixteen from "../../images/image16.webp";
import ImageSeventeen from "../../images/image17.jpeg";
import ImageEighteen from "../../images/image18.jpeg";
import ImageNineteen from "../../images/image19.webp";
import ImageTwenty from "../../images/image20.webp";
import ImageTwentyOne from "../../images/image21.jpeg";
import ImageTwentyTwo from "../../images/image22.webp";
import ImageTwentyThree from "../../images/image23.webp";


const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "Notes App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 1,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo APP",
    image: ImageFour,
    link: "",
  },
  {
    id: 1,
    name: "Design",
    image: ImageFive,
    link: "",
  },
  {
    id: 2,
    name: "Web Design",
    image: ImageSix,
    link: "",
  },
  {
    id: 1,
    name: "Coding",
    image: ImageNine,
    link: "",
  },
  {
    id: 2,
    name: "Ecommerce",
    image: ImageSeven,
    link: "",
  },
  {
    id: 1,
    name: "Coding",
    image: ImageTen,
    link: "",
  },
  {
    id: 2,
    name: "Web Design",
    image: ImageEight,
    link: "",
  },
  {
    id: 1,
    name: " Design",
    image: ImageEleven,
    link: "",
  },

  {
    id: 1,
    name: "Design",
    image: ImageTwelve,
    link: "",
  },
  {
    id: 2,
    name: "Shopping Cart Design",
    image: ImageNineteen,
    link: "",
  },
  {
    id: 1,
    name: "Design",
    image: ImageThirteen,
    link: "",
  },
  {
    id: 1,
    name: "Shopping Cart Design",
    image: ImageFourteen,
    link: "",
  },
  {
    id: 2,
    name: "Website Template Design",
    image: ImageTwenty,
    link: "",
  },
  {
    id: 1,
    name: "Shopping Cart Design",
    image: ImageFiveteen,
    link: "",
  },
  {
    id: 3,
    name: "Shopping Cart Design",
    image: ImageTwentyOne,
    link: "",
  },
  {
    id: 1,
    name: "Shopping Cart Design",
    image: ImageSixteen,
    link: "",
  },
  {
    id: 3,
    name: "Website Design",
    image: ImageTwentyTwo,
    link: "",
  },
  {
    id: 1,
    name: "Shopping Cart Design",
    image: ImageSeventeen,
    link: "",
  },
  {
    id: 3,
    name: "Web Design",
    image: ImageTwentyThree,
    link: "",
  },
  {
    id: 1,
    name: "Shopping Cart Design",
    image: ImageEighteen,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

function Portfolio() {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section className="portfolio" id="portfolio">
      <Header headerText="My Portfolio" icon={<FaBriefcase size={40} />} />

      <div className="portfolio-content">
        <ul className="portfolio-content-filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio-content-cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio-content-cards-item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio-content-cards-item-imgWrapper">
                <a href="#">
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {
                  index === hoveredValue && (
                    <div className="overlay-wrapper">
                      <p className="item-name">{item.name}</p>
                      <button className="visit">Visit</button>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
