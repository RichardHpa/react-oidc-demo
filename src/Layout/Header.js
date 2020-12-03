import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthenticationContext } from '@axa-fr/react-oidc-context';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <AuthenticationContext.Consumer>
          {props => {
            return (
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  OIDC Demo
                </Typography>
                {props.oidcUser || !props.isEnabled ? (
                  <Button color="inherit" onClick={props.logout}>
                    Logout
                  </Button>
                ) : (
                  <Button color="inherit" onClick={props.login}>
                    Login
                  </Button>
                )}
              </Toolbar>
            );
          }}
        </AuthenticationContext.Consumer>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
