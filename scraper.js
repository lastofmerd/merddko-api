const fs = require('fs');
const axios = require('axios');
const calculateAverage = require('./averageCalculator');

async function fetchItems() {
    const servers = ['zero3', 'zero4', 'zero5'];
    const itemPool = require('./item_pool.json');
    const alerts = [];

    for (const server of servers) {
        for (const item of itemPool) {
            try {
                const res = await axios.get(`https://uskopazar.com/api/${server}/items?search=${encodeURIComponent(item)}`);
                const data = res.data.filter(i => i.coin >= 10000000);
                const prices = data.map(i => i.coin);
                const average = calculateAverage(prices);

                data.forEach(i => {
                    if (i.coin <= average / 5) {
                        alerts.push({
                            server,
                            item: i.name,
                            seller: i.seller,
                            location: i.location,
                            price: i.coin,
                            average: Math.round(average)
                        });
                    }
                });
            } catch (e) {
                console.error(`Error fetching ${item} from ${server}`);
            }
        }
    }

    if (alerts.length > 0) {
        console.log("ALERTS:", alerts);
    }
}

setInterval(fetchItems, 10000);