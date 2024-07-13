import { Fab, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function() {
    const navigate = useNavigate();

    const handleAddExpense = () => {
        navigate('/expenses');
    };

    return (
        <div>
            <Navbar/>
            <TextField
                sx={{ marginTop: 2, width: '25ch', float: 'left' }}
                required
                id="outlined-required"
                label="Required"
                defaultValue="Expense Title"
            />
            <TextField
                sx={{ marginTop: 2, marginLeft: 2, width: '25ch', float: 'left' }}
                required
                id="outlined-required"
                label="Required"
                defaultValue="Expense Amount"
            />
            <Fab variant="extended" sx={{position: 'fixed', bottom: 2, right: 2, margin: 2}} onClick={handleAddExpense}>
                <ControlPointIcon sx={{margin: 2}}/>
            </Fab>
        </div>
    );
}