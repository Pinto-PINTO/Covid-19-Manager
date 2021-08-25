import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core'

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '360px',
        height: '100vh',
        backgroundColor: '#253053',
        zIndex: '-1'
    }
}

const SideMenu = (props) => {

    const { classes } = props;
    console.log(classes)

    return (
        <div className={classes.sideMenu}></div>
    )

}

export default withStyles(style)(SideMenu);