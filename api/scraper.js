const { getItemList } = require('./_alarm_list');

module.exports = async (req, res) => {
  try {
    const items = getItemList();

    // 🔥 Alarm filtresi: fiyat, ortalamanın 1/5'inden düşükse
    const alarmItems = items.filter(item => item.price < item.average / 5);

    res.status(200).json({
      items,
      alarms: alarmItems
    });
  } catch (error) {
    console.error('Scraper failed:', error);
    res.status(500).json({ error: 'Scraper failed', details: error.message });
  }
};
