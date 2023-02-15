const URL = 'http://api.nobelprize.org/v1/prize.json'
const options = { method: 'GET', headers: { accept: 'application/json' } };

const fetchPrizeData = async () => {
    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        const nobelPrizes = data.prizes;
        return nobelPrizes;
    } catch (error) {
        return (error);
    }
};

export default fetchPrizeData;