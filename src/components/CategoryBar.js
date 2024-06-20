import { useState } from "react";
import '../css/CategoryBarStyle.css';
import titleLogo from '../imgs/image.svg';
import { useParams } from "react-router-dom";

function CategoryBar() {
    const categories = [
      {id : 1, title : 'Category 1', url: '/category1'},
      {id : 2, title : 'Category 2', url: '/category2'},
      {id : 3, title : 'Category 3', url: '/category3'},
      {id : 4, title : 'Category 4', url: '/category4'}
  ];
  const { id } = useParams();

  const [currentCategory, setCurrentCategory] = useState('Home')

    var category = categories.map(function (category, index) {
        let hrefLink = '/category/' + category.id;
        return (
          <a href={hrefLink} className="categories" key={index} onClick={() => handleClick(id)}>{category.title}</a>
        );
      });
    var handleClick = (id) => {
      var categoryTitle = categories.filter((category) => {
          if (category.id === id) {
             return category.title;
          }
      });
      setCurrentCategory(categoryTitle);
    };

    return (
      <div>
          <div class="flex justify-start items-center gap-2 title">
            <img src={titleLogo}></img>
            <h1>{currentCategory}</h1>
          </div>
          <div className="category-bar relative flex flex-wrap min-w-full gap-5">
              {category}
          </div>
      </div>
    );
  }
export default CategoryBar;
