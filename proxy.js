export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  // Only allow Google Calendar iCal URLs
  if (!url.startsWith('https://calendar.google.com/calendar/ical/')) {
    return res.status(403).json({ error: 'Only Google Calendar URLs allowed' });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch calendar' });
    }
    const text = await response.text();
    res.setHeader('Content-Type', 'text/calendar');
    res.setHeader('Cache-Control', 's-maxage=300'); // cache 5 min
    return res.status(200).send(text);
  } catch (e) {
    return res.status(500).json({ error: 'Proxy error' });
  }
}
