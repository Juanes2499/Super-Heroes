import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Logo from "../../../Logos/Heroes.png";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(255, 255, 255)'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')

    const navRef = React.useRef()

    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <div className='container'>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={Logo} width="80" height="50" alt="Logo" />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            
                        </Typography>
                        <a className="nav-link o-navbar-links font-weight-normal" href="/Home">Heroes anteriores</a>
                        <a className="nav-link o-navbar-links font-weight-normal" href="/Home">¿Cómo funciona?</a>
                        <a className="nav-link o-navbar-links font-weight-normal" href="/Home">Iniciar sesión</a>
                    </Toolbar>
                </div>
            </AppBar>
        </div >
    );
}