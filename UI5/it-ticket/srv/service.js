require('dotenv').config();  // Load .env

const cds = require('@sap/cds');

cds.connect.to('db', { kind: 'postgres', url: process.env.DATABASE_URL })
   .then(() => console.log("Connected to Supabase successfully!"))
   .catch(err => console.error("Failed to connect to Supabase:", err));
