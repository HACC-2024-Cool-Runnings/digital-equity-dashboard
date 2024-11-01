import { db } from '../../db';
import { assets } from '../../db/schema';
import { eq, and } from 'drizzle-orm';

export default async function handler(req, res) {
  const { Area_Served, Asset_Name, Type_of_Entity } = req.query;

  try {
    // Build the dynamic query
    const conditions = [];
    if (Area_Served) conditions.push(eq(assets.Area_Served, Area_Served));
    if (Asset_Name) conditions.push(eq(assets.Asset_Name, Asset_Name));
    if (Type_of_Entity) conditions.push(eq(assets.Type_of_Entity, Type_of_Entity));

    console.log('Conditions:', conditions); // Add logging here

    const data = await db.select().from(assets).where(and(...conditions)).all();

    // Send the data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
}