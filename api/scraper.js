const { getItemList } = require('./_alarm_list');

module.exports = async (req, res) => {
  try {
    const items = getItemList();

    // Burada istersen filtreleme veya analiz işlemi yapılabilir
    // Şimdilik sadece tüm item listesini döndürüyoruz
    res.status(200).json({ items });
  } catch (error) {
    console.error('Scraper failed:', error);
    res.status(500).json({ error: 'Scraper failed', details: error.toString() });
  }
};
