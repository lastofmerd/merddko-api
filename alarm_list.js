
const fs = require('fs');
const path = require('path');
const averageCalculator = require('./averageCalculator');
const itemPool = require('./item_pool.json');

// Bildirim fonksiyonu (şimdilik console.log yerine gerçek alarm entegresi yapılabilir)
function notify(item) {
  console.log(`ALARM ❗️ ${item.name} | Server: ${item.server}`);
  console.log(`Fiyat: ${item.price} | Ortalama: ${item.avgPrice}`);
  console.log(`Satıcı: ${item.seller} | Konum: ${item.location}`);
}

function checkForAlarms(scrapedItems) {
  scrapedItems.forEach((item) => {
    const match = itemPool.find((poolItem) => poolItem.name === item.name && poolItem.server === item.server);

    if (match) {
      const avgPrice = averageCalculator(item.name, item.server);
      item.avgPrice = avgPrice;

      if (item.price <= avgPrice / 5) {
        notify(item);
      }
    }
  });
}

module.exports = checkForAlarms;
