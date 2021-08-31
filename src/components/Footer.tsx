import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Button, Fab, CircularProgress, LinearProgress, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


type FooterProps = {
    selectedItems: number,
    setDisableCheckbox: (bool : boolean) => void
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    placeholder: {
        height: 40,
        display: 'flex',
        flexDirectin: 'column',
        alignItems: 'center'
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
}));

function Footer({ selectedItems, setDisableCheckbox }: FooterProps) {

    const classes = useStyles();
    const [ loading, setLoading ] = React.useState<boolean>(false);
    const [ success, setSuccess ] = React.useState<boolean>(false);
    const timer = React.useRef<number>(); 

    // const buttonClassname = clsx({
    //     [classes.buttonSuccess]: success,
    // });

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const theme = createMuiTheme({
        overrides: {
            MuiCircularProgress: {
                colorPrimary: {
                    color: 'white'
                }
            }
        }
      });

    const handleClick = () => {
        if (!loading) {
            setDisableCheckbox(true);
            setSuccess(false);
            setLoading(true);
            
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    }

    const foot = () => {
        if (selectedItems > 0) {
            return(
                <ThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <div className={classes.placeholder}>
                            {loading ? (<CircularProgress />) : (<div/>)}
                        </div>
                        <div className={classes.wrapper}>
                            {
                                success ? (<CustomType>Success</CustomType>) : (
                                    <ColorButton
                                        variant="outlined"
                                        color="primary"
                                        disabled={loading || success}
                                        onClick={handleClick}
                                    >
                                        Submit
                                    </ColorButton>
                                )
                            }
                            {loading && <CircularProgress size={14} className={classes.buttonProgress} />}
                        </div>
                    </div>
                </ThemeProvider>
            );
        } else {
            return(
                <div style={{
                    color: 'white',
                    fontSize: '16px'
                }}>
                    Select items to track
                </div>
            );
        }
    }

    const ColorButton = withStyles((theme: Theme) => ({
        root: {
          color: "white",
          borderColor: "white",
          '&:hover': {
            borderColor: "white",
          },
        },
      }))(Button);

      const CustomType = withStyles((theme: Theme) => ({
        root: {
          color: "white"
        },
      }))(Typography);

    return(
        <ThemeProvider theme={theme}>
            {foot()}
        </ThemeProvider>
        
    );
}

export default Footer;