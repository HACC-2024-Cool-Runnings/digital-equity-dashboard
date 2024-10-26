import { db } from '/db';
import { cai } from '/db/schema';
import { eq, and } from 'drizzle-orm';

export default async function handler(req, res) {
  const { cai_type, island, city } = req.query;

  try {
    // Build the dynamic query
    const conditions = [];
    if (cai_type) conditions.push(eq(cai.cai_type, cai_type));
    if (island) conditions.push(eq(cai.island, island));
    if (city) conditions.push(eq(cai.city, city));

    const data = await db.select().from(cai).where(and(...conditions));
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}