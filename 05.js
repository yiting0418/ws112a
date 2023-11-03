import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("test.db");
db.query("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, tel TEXT)");

const names = ["Ann", "Ben"];
const tels = ["0912345678", "0934567890"];

// Run a simple query
for (let i = 0; i<names.length; i++){
  const name = names[i];
  const tel = tels[i];
  db.query("INSERT INTO people (name, tel) VALUES (?, ?)", [name, tel]);
}  
// Print out data in table
for (const [id, name, tel] of db.query("SELECT id, name, tel FROM people"))
  console.log(id, name||"", tel||"");

// Close connection
db.close();
