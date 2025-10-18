require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid'); // to generate UUIDs

const app = express();
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // required for Supabase
});

// Test connection
pool.connect()
    .then(() => console.log('Connected to Supabase successfully!'))
    .catch(err => console.error('Supabase connection error:', err));

// ------------------- Root Route -------------------
app.get('/', (req, res) => res.send('It-Ticket API is running!'));

// ------------------- Employees Routes -------------------

// Get all active employees
app.get('/employees', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "Employees" WHERE "isActive" = $1', ['X']);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

// Add a new employee
app.post('/employees', async (req, res) => {
    const { empID, firstName, lastName, email, designation, isActive } = req.body;
    try {
        await pool.query(
            'INSERT INTO "Employees"(empID, firstName, lastName, email, designation, isActive) VALUES($1,$2,$3,$4,$5,$6)',
            [empID, firstName, lastName, email, designation, isActive || 'X']
        );
        res.send('Employee added successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

// ------------------- IT_Tickets Routes -------------------

// Get all active tickets with employee names
app.get('/tickets', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT t."ticketID", t."type" as "Ticket_Type", t."HR", 
                   hr."firstName" || ' ' || hr."lastName" AS "HR_Name",
                   t."supportUser",
                   su."firstName" || ' ' || su."lastName" AS "SupportUser_Name"
            FROM "IT_Tickets" t
            LEFT JOIN "Employees" hr ON hr."empID" = t."HR"
            LEFT JOIN "Employees" su ON su."empID" = t."supportUser"
            WHERE t."isActive" = $1
        `, ['X']);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

// Add a new ticket
app.post('/tickets', async (req, res) => {
    const { ticketID, type, HR, supportUser, isActive } = req.body;
    try {
        const id = ticketID || uuidv4();
        await pool.query(
            'INSERT INTO "IT_Tickets"(ticketID, type, HR, supportUser, isActive) VALUES($1,$2,$3,$4,$5)',
            [id, type, HR, supportUser, isActive || 'X']
        );
        res.send({ message: 'Ticket added successfully!', ticketID: id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

// ------------------- Assigned_Support Routes -------------------

// Get all assigned support
app.get('/assigned', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "Assigned_Support"');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

// Add a new assigned support
app.post('/assigned', async (req, res) => {
    const { guid, wfInstance, ticketType, requester, HR, supportUser } = req.body;
    try {
        const id = guid || uuidv4();
        await pool.query(
            'INSERT INTO "Assigned_Support"(guid, wfInstance, ticketType, requester, HR, supportUser) VALUES($1,$2,$3,$4,$5,$6)',
            [id, wfInstance, ticketType, requester, HR, supportUser]
        );
        res.send({ message: 'Assigned support added successfully!', guid: id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

// ------------------- Start Server -------------------
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
