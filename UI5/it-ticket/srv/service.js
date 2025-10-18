require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.get('/', (req, res) => res.send('It-Ticket API is running!'));

// Employees
app.get('/employees', async (req, res) => {
  const { data, error } = await supabase.from('Employees').select('*').eq('isActive', 'X');
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

app.post('/employees', async (req, res) => {
  const emp = req.body;
  emp.isActive = emp.isActive || 'X';
  const { data, error } = await supabase.from('Employees').insert([emp]);
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

// IT Tickets
app.get('/tickets', async (req, res) => {
  const { data, error } = await supabase.from('IT_Tickets').select('*').eq('isActive', 'X');
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

app.post('/tickets', async (req, res) => {
  const ticket = { ...req.body, ticketID: req.body.ticketID || uuidv4(), isActive: req.body.isActive || 'X' };
  const { data, error } = await supabase.from('IT_Tickets').insert([ticket]);
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

// Assigned Support
app.get('/assigned', async (req, res) => {
  const { data, error } = await supabase.from('Assigned_Support').select('*');
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

app.post('/assigned', async (req, res) => {
  const assignment = { ...req.body, guid: req.body.guid || uuidv4() };
  const { data, error } = await supabase.from('Assigned_Support').insert([assignment]);
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
