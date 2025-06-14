export default function handler(req, res) {
  import('../item_pool.json')
    .then((data) => {
      const alarms = data.items.filter(item => item.shouldAlert === true);
      res.status(200).json({ alarms });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Data not found' });
    });
}
