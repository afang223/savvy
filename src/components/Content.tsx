import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, ListItemAvatar, Avatar, Grid } from '@material-ui/core';
import { Items, Links } from '../resources/Items';

type ContentProps = {
    setSelected: (num : number) => void,
    disableCheckbox: boolean
}


function Content({ setSelected, disableCheckbox }: ContentProps) {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            },
        }),
    );

    const theme = createMuiTheme({
        overrides: {
          MuiCheckbox: {
            colorSecondary: {
              color: '#337336',
              '&$checked': {
                color: '#337336',
              },
            },
          },
          MuiTouchRipple: {
            child: {
              backgroundColor: "#468063"
            }
          }
        },
      });
    const StyledListItem = withStyles({
        root: {
            backgroundColor: "#EFEFEF",
            height:  "80px",
            color: "black",
            "&.Mui-selected": {
                backgroundColor: "#BFBFBF",
                color: "black"
            },
            "&:hover": {
                backgroundColor:"#D9D9D9"
            }
        },
    })(ListItem);

    const classes = useStyles();
    const [checked, setChecked] = React.useState<String[]>([]);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setSelected(newChecked.length);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{backgroundColor:"#163835"}}
            >
                <List className={classes.root} disablePadding>
                        {Items.map((value) => {
                            const labelId = `checkbox-list-label-${value}`;
                            return (
                            <StyledListItem key={value} role={undefined} dense button onClick={handleToggle(value)} alignItems="center" divider selected={checked.includes(value)} disabled={disableCheckbox}> 
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    disabled={disableCheckbox}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value} color="white"/>
                                <ListItemAvatar>
                                    <Avatar src={Links[Items.indexOf(value)]} variant="rounded" style={{ height: '50px', width: '50px' }} />
                                </ListItemAvatar>
                            </StyledListItem>
                            );
                        })}
                </List>
            </Grid>
        </ThemeProvider>
        
    );
}

export default Content;