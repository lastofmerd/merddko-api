const axios = require('axios');

const keywords = [
  ...'abcdefghijklmnopqrstuvwxyz0123456789+- '
];

const servers = ['zero3', 'zero4', 'zero5'];

const getItemList = async () => {
  const allItems = [];

  for (const server of servers) {
    for (const char of keywords) {
      try {
        const url = `https://www.uskopazar.com/${server}/?search=${encodeURIComponent(char)}`;
        const response = await axios.get(url);

        const items = parseItems(response.data, server);
        allItems.push(...items);

      } catch (err) {
        console.error(`Error fetching data from ${server} - ${char}`, err.message);
      }
    }
  }

  return allItems;
};

const parseItems = (html, server) => {
  const items = [];

  // Buraya cheerio veya regex ile HTML'den item verilerini çıkaran kod eklenecek.
  // Örnek veri şeması:
  // items.push({
  //   server,
  //   item: "Raptor +8",
  //   price: 10000000,
  //   seller: "AliBaba",
  //   location: "Moradon",
  //   average: 5000000
  // });

  return items;
};

module.exports = { getItemList };
