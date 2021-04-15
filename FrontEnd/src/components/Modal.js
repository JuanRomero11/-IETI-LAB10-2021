import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuItem from '@material-ui/core/MenuItem';
export default function TaskFilter(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddTask = () => {
        
    }

    const [options, setOptions] = React.useState('');

    const handleChange = (event) => {
        setOptions(event.target.value);
    };

    const selection = [
        {value: 'Ready', label: 'Ready',},
        {value: 'In Progress', label: 'In Progress',},
        {value: 'Done',   label: 'Done',},

    ]


    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                <PostAddIcon></PostAddIcon>

            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Task Filter</DialogTitle>
                <DialogContent>

                
                 
                    <TextField autoFocus margin="dense" id="duedate" type="date" fullWidth/>
                    <TextField autoFocus margin="dense" id="responsable" label="Responsable" type="text" fullWidth
                    />
                    <TextField id="standard-select-state" select label="status" value={options} onChange={handleChange}>
                        {selection.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddTask} color="primary">
                        Apply
          </Button>
          <Button onClick={handleAddTask} color="primary">
                        clearAll
          </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}