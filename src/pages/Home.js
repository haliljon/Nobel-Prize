import React from 'react';
import { NavLink } from 'react-router-dom';
import chemistry from '../assets/chemistry.png';
import literature from '../assets/literature.png';
import physics from '../assets/physics.png';
import economics from '../assets/economics.png';
import medicine from '../assets/medicine.png';
import peace from '../assets/peace.png';

const Home = () => {
  const categories = [
    { name: 'chemistry', icon: chemistry },
    { name: 'economics', icon: economics },
    { name: 'literature', icon: literature },
    { name: 'physics', icon: physics },
    { name: 'medicine', icon: medicine },
    { name: 'peace', icon: peace }];
  const [searchTerm, setSearchTerm] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredCategories = categories.filter(
    (category) => category.name.toLowerCase().includes(searchTerm),
  );
  return (
    <div>
      <div className="search-bar">
        <input className="search" type="text" placeholder="Search for Category" onChange={handleChange} />
      </div>
      <div className="nobelImg container mt-3 mb-3">
        <img className="nobel-logo" src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png" alt="nobel-logo" />
        <div>The Nobel Prize Winners</div>
      </div>
      <div className="heading pt-3">
        <p className="ps-4">NOBEL PRIZE NOMINEES by CATEGORY</p>
      </div>
      <div className="container mt-3 mb-3">
        <div className="row">
          {filteredCategories.map((category) => (
            <NavLink className="col-4 btn eachCateg" key={category.name} to={`/category/${category.name}`}>
              <div className="category">
                <div className="category-icon">
                  <img className="img-fluid" src={category.icon} alt={category.name} />
                </div>
                <div>
                  <h3>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h3>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
