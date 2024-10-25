import { db } from '/db';
import { cai } from '/db/schema';
import { eq, and } from 'drizzle-orm';

export default async function handler(req, res) {
  try {
    const data = await db.select().from(cai).where(
      and(
        eq(cai.cai_type, "Community Center"),
        eq(cai.island, "Oahu"),
      )
    );
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}