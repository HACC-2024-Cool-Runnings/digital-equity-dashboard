import { db } from '../../db';
import { libraries } from '../../db/schema';
import { eq, and } from 'drizzle-orm';

export default async function handler(req, res) {
  const { island, library } = req.query;

  try {
    // Build the dynamic query
    const conditions = [];
    if (island) conditions.push(eq(libraries.Island, island));
    if (library) conditions.push(eq(libraries.Library, library));

    console.log('Conditions:', conditions); // Add logging here

    const data = await db.select().from(libraries).where(and(...conditions)).all();

    // Send the data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
}