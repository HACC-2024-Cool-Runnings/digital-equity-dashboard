import { integer, sqliteTable, text, numeric } from "drizzle-orm/sqlite-core";

export const cai = sqliteTable("CAI", {
    cai_type: text("cai_type"),
    cai_subtype: text("cai_subtype"),
    name: text("name"),
    address: text("address"),
    city: text("city"),
    state: text("state"),
    zip: integer("zip"),
    island: text("island"),
    county: text("county"),
    latitude: numeric("latitude"),
    longitude: numeric("longitude")
});