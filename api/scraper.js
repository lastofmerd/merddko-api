import { getItemList } from './_alarm_list.js';

export default async function handler(req, res) {
  try {
    const items = getItemList();

    const alarmItems = items.filter(item => item.price < item.average / 5);

    res.status(200).json({
      items,
      alarms: alarmItems
    });
  } catch (error) {
    console.error('Scraper failed:', error);
    res.status(500).json({ error: 'Scraper failed', details: error.message });
  }
}
