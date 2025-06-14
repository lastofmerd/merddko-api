import { getAllItems, getItemDetail } from './alarm_list';
import averageCalculator from './averageCalculator.json';
import itemPool from './item_pool.json';

export default async function handler(req, res) {
  try {
    const items = await getAllItems();
    const alerts = [];

    for (const item of items) {
      const itemDetail = await getItemDetail(item.link);
      const marketAvg = averageCalculator[item.name];

      if (!marketAvg) continue;

      if (item.price < marketAvg / 5) {
        alerts.push({
          item: item.name,
          price: item.price,
          seller: item.seller,
          server: item.server,
          location: item.location,
          marketAvg: marketAvg
        });
      }
    }

    res.status(200).json({ alerts });
  } catch (err) {
    res.status(500).json({ error: 'Alarm kontrolü sırasında hata oluştu.' });
  }
}
