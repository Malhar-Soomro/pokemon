import { Button, Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
})

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
    const classes = useStyle();
    return (
        <StylesProvider injectFirst>
            <Container className={classes.root}>
                <h2 className='font-bold text-xl'>My buttons</h2>
                <Button
                    disabled={!gotoPrevPage}
                    variant="contained"
                    color="secondary"
                    onClick={gotoPrevPage}
                >
                    Previous
                </Button>
                <Button
                    disabled={!gotoNextPage}
                    variant="contained"
                    color="secondary"
                    onClick={gotoNextPage}
                >
                    Next
                </Button>

            </Container>
        </StylesProvider>
    )
}

export default Pagination
