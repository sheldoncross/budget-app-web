import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type Expense = {
    id: number;
    title: string;
    amount: number;
};

export default function(expense: Expense) {
    const handleOnClick = () => {console.log("Expense clicked!")}

    return (
        <div>
            <List>
                <ListItemButton onClick={handleOnClick}>
                    <ListItemIcon>
                        <AddShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary={expense.title}/>
                    <ListItemText primary={`$${expense.amount}`} sx={{textAlign: 'right'}}/>
                </ListItemButton>
            </List>
        </div>
    );
}