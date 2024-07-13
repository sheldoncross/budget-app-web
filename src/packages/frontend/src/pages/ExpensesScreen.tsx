import { Fab } from "@mui/material";
import ExpenseItem from "../components/ExpenseItem";
import Navbar from "../components/Navbar";
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate } from 'react-router-dom';

// Dummy data
var expenses = [
    {id: 1, title: "Groceries", amount: 100},
    {id: 2, title: "Entertainment", amount: 50},
    {id: 3, title: "Transportation", amount: 200},
    {id: 4, title: "Utilities", amount: 75},
    {id: 5, title: "Clothing", amount: 150},
    {id: 6, title: "Maintenance", amount: 50},
    {id: 7, title: "Gifts", amount: 200},
    {id: 8, title: "Health", amount: 75},
    {id: 9, title: "Education", amount: 150},
    {id: 10, title: "Other", amount: 50},   
];


export default function() {
    const navigate = useNavigate();

    const handleAddExpense = () => {
        navigate('/add-expense');
    };

    return (
        <div>
            <Navbar/>
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
            <Fab variant="extended" onClick={handleAddExpense}>
                <NavigationIcon className="float-right" />
                    Add Expense
            </Fab>
        </div>
    );
};