import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3001;

const db = new sqlite3.Database('budget.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the budget database.');
});

app.use(express.json())

app.get('/addExpense', (req, res) => {
    const { title, amount } = req.body;
    // Validate input (add more validation as needed)
    if (!title || !amount) {
        return res.status(400).send('Title and amount are required.');
    }
    db.run('INSERT INTO expenses (title, amount) VALUES (?, ?)', [title, amount], function(err) {
        if (err) {
            return console.error(err.message);
        }
        res.send('Expense added successfully!');
    })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
