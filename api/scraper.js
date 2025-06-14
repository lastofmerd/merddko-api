import { getItemList } from '../alarm_list.js';

export default async function handler(req, res) {
  try {
    const alerts = await getItemList();
    res.status(200).json({ alerts });
  } catch (error) {
    console.error("Error in scraper:", error);
    res.status(500).json({ error: "Scraper failed", details: error.message });
  }
}
