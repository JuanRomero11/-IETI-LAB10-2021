
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import NewTask from "./NewTask";
import Modal from "./Modal";
import CardContent from '@material-ui/core/CardContent';
// ----------------- datos de usuario
const usuario = {
  "nombre": "Juan",
  "apellido": "Romero",
  "correo": "juan.romero@correox.com"
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  root2: {
    marginTop: 80,
    width: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 40,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // -------------------- Cerrar sesion
  const logout = () => {
    localStorage.setItem('isLogginIn', 'false');
    localStorage.removeItem('isLogginIn');
   // window.location.reload();

  }
  const [task,setTask]=React.useState([{description:"Implement Login", responsable:{username:usuario.nombre ,email:usuario.correo}, 
  status:"ready",dueDate: Date.now() }]);

  const handleAddTask =(t) =>{
    setTask(task.concat(t));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
      <Divider />
      <List>
        {[usuario.nombre + " " + usuario.apellido].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<PersonIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <p>   {usuario.correo} </p>
      </List>
      </div>
      <Divider />
    
    
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <Link to="/UserProfile">
        <Button className="button"
          type="submit"
          fullWidth
          variant="contained"
          color="secundary"
          onClick={() => logout()}
          className="submit"
          startIcon={<ExitToApp />}
        >
          update profile
          </Button>
      </Link>
      <br /><br />
      <Link to="/Login">
        <Button className="button"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => logout()}
          className="submit"
          startIcon={<ExitToApp />}
        >
          Log out
          </Button>
      </Link>

    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
            {/*--------------------- BARRA DE PRESENTACION IEIT LAB4------------------ */}
          </IconButton>
          <Typography variant="h6" noWrap>
            IETI LAB4
          </Typography>
        </Toolbar>
      </AppBar>
      {/*---------------------- DRAWER + CSSS +PARTE ENCABEZADO--------------------------------------*/}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {drawer}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}

      >
        {/* <-------------------------- CARDS -------------------------------------------- */}
        <div className={classes.root2}>
        <Card className={classes.root2} >
          <CardContent>
            <Typography variant="h5" component="h5" gutterBottom>
              Implement Login View
              </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              In progress - 12-05-2019
              </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Juan Romero
              </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root2} >
          <CardContent>
            <Typography variant="h5" component="h5" gutterBottom>
              Implement Login Controller
              </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Ready - 12-05-2019
              </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Juan Romero
              </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root2} >
          <CardContent>
            <Typography variant="h5" component="h5" gutterBottom>
              Facebook integration
              </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
            ready - 12-05-2019
              </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Juan Romero
              </Typography>
          </CardContent>
        </Card>
        {/* mapeo de las carts agregadas funcional -------------------------------*/}
        {task.map(item => (
         <Card className={classes.root2} variant="outlined" >
         <CardContent  >
           <Typography className={classes.title} color="textSecondary" gutterBottom>
             {item.description}
           </Typography>
           <Typography variant="h5" component="h2">
             {item.responsable.nombre}
             {<br/>}
             {item.responsable.email}
           </Typography>
           <Typography className={classes.pos} color="textSecondary">
             {item.status}
           </Typography>
           <Typography variant="body2" component="p">
             {item.dueDate}
             <br />
           </Typography>
         </CardContent>
       </Card>
        ))}
    
        </div>
            {/* <-------------------------- NUEVA TASK -------------------------------------------- */}
        <div>
            <IconButton aria-label="delete">
              <NewTask fun={handleAddTask} />
            </IconButton>
         
        </div>
        <div>
            <IconButton aria-label="add">
              <Modal fun={handleAddTask} />
              TaskFilter
            </IconButton>
         
        </div>
        <div>


        </div>
      </main>

    </div>
  );
}