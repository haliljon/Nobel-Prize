import fetchPrizeData from "../services/fetchPrizes";

describe('Fetch Data', () => {
    test('gets the correct data', async () => {
        const data = await fetchPrizeData();
        expect(data).toBeInstanceOf(Object);
        expect(data.id).not.toBeNull();
    });
});