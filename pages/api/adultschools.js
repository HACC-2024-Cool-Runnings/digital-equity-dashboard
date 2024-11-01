import { db } from '../../db';
import { adultschools } from '../../db/schema';
import { eq, and } from 'drizzle-orm';

export default async function handler(req, res) {
  const { community, school, address } = req.query;

  try {
    // Build the dynamic query
    const conditions = [];
    if (community) conditions.push(eq(adultschools.Community, community));
    if (school) conditions.push(eq(adultschools.School, school));
    if (address) conditions.push(eq(adultschools.Address, address));

    console.log('Conditions:', conditions); // Add logging here

    const data = await db.select().from(adultschools).where(and(...conditions)).all();

    // Send the data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
}