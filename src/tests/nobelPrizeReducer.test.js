import nobelPrizeReducer, { nobelPrizeActions } from '../redux/nobel-prize';

describe('Test for Coin Reducer and actions', () => {
  it('Test for default initial states ', () => {
    expect(nobelPrizeReducer(undefined, nobelPrizeActions)).toEqual([]);
  });

  it('Test for all coins states ', () => {
    expect(nobelPrizeReducer([1, 2, 3, 4, 5], nobelPrizeActions())).toEqual([1, 2, 3, 4, 5]);
  });
});
