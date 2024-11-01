import { integer, sqliteTable, text, numeric } from "drizzle-orm/sqlite-core";

const cai = sqliteTable("CAI", {
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


const adultschools =  sqliteTable("ADULTSCHOOLS", {
    Community: text("Community"),
    School: text("School"),
    Address: text("Address"),
    Phone: text("Phone"),
    URL: text("URL"),
    ID: integer("ID")
});

const libraries =  sqliteTable("LIBRARIES", {
    Island: text("Island"),
    Library: text("Library"),
    Phone: text("Phone"),
    ID: text("ID")
});

const assets =  sqliteTable("ASSETS", {
    Area_Served: text("Area_Served"),
    Asset_Name: text("Asset_Name"),
    Type_of_Entity: text("Type_of_Entity"),
    Digital_Equity_Pillars: text("Digital_Equity_Pillars"),
    CP1: text("CP1"),
    CP2: text("CP2"),
    CP3: text("CP3"),
    CP4: text("CP4"),
    CP5: text("CP5"),
    CP6: text("CP6"),
    CP7: text("CP7"),
    CP8: text("CP8"),
    CP9: text("CP9"),
    Description_of_Service: text("Description_of_Services"),
    Website: text("Website"),
    Street_Address: text("Street_Address")

    
});

export { cai, adultschools, libraries, assets };
