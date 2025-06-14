const axios = require('axios');

async function fetchItems() {
  try {
    const response = await axios.get('https://example.com/api/items');
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

module.exports = { fetchItems };
