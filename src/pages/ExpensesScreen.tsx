import ExpenseItem from "../components/ExpenseItem";
import Navbar from "../components/Navbar";

// Dummy data
const expenses = [
    {id: 1, title: "Groceries", amount: 100},
    {id: 2, title: "Entertainment", amount: 50},
    {id: 3, title: "Transportation", amount: 200},
    {id: 4, title: "Utilities", amount: 75},
    {id: 5, title: "Clothing", amount: 150}
];


export default function() {
    return (
        <div>
            <Navbar/>
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
        </div>
    );
};