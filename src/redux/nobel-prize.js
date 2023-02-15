import fetchPrizeData from '../services/fetchPrizes';

const FETCH_PRIZE = 'FETCH_PRIZE';

const initialState = [];

const nobelPrizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_PRIZE}`:
      return [...action.payload];
    default:
      return state;
  }
};

export const nobelPrizeActions = () => async (dispatch) => {
  const payload = await fetchPrizeData();
  dispatch({
    type: FETCH_PRIZE,
    payload,
  });
};

export default nobelPrizeReducer;
