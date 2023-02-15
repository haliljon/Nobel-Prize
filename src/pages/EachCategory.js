import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { nobelPrizeActions } from '../redux/nobel-prize'

const EachCategory = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const nobelPrizes = useSelector((state) => state.nobel)
    let newArray = []
    for (let i = 0; i < nobelPrizes.length; i++) {
        if (nobelPrizes[i].category === params.categoryName) {
            newArray.push(nobelPrizes[i])
        }
    }
    console.log(newArray[15]);

    useEffect(() => {
        dispatch(nobelPrizeActions())
    }, [dispatch])
    return (
        <div>
            <h1>Each Category {JSON.stringify(params)}</h1>
            <div className='container-fluid mt-3 mb-3'>
                <div className="row">
                    {newArray.map((item) => (
                        <button className="col-3 btn eachBtn" key={item.year}>
                            <div className="category">
                                <div>{item.year}{item.laureates.map((laureate) => (<div key={laureate.id}>{`${laureate.surname} ${laureate.firstname}`}</div>))
                                }
                                </div>
                            </div>
                        </button>))}
                </div></div>
        </div>
    )
}

export default EachCategory