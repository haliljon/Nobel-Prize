import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nobelPrizeActions } from '../redux/nobel-prize';

const EachCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const nobelPrizes = useSelector((state) => state.nobel);
  const newArray = [];
  for (let i = 0; i < nobelPrizes.length; i += 1) {
    if (nobelPrizes[i].category === params.categoryName) {
      newArray.push(nobelPrizes[i]);
    }
  }
  const [searchTerm, setSearchTerm] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredNewArray = newArray.filter((item) => item.year.toLowerCase().includes(searchTerm));

  useEffect(() => {
    dispatch(nobelPrizeActions());
  }, [dispatch]);
  return (
    <div>
      <div className="search-bar">
        <input className="search" type="number" placeholder="search for year" onChange={handleChange} />
      </div>
      <h1 className="text-center mt-3 pb-3">
        The Nobel Prizes in
        {params.categoryName.charAt(0).toUpperCase() + params.categoryName.slice(1)}
      </h1>
      <div className="container-fluid mt-3 mb-3">
        <div className="row">
          {filteredNewArray.map((item) => (
            <button type="button" className="col-3 btn eachBtn" key={item.year}>
              <div className="category">
                <div>
                  {item.year}
                  {item.laureates ? item.laureates.map((laureate) => (<div key={laureate.id}>{`${laureate.surname} ${laureate.firstname}`}</div>)) : <div>No Nobel Prize was awarded this year</div>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EachCategory;
