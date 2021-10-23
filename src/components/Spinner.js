import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import image from "./loading.gif"

const useStyle = makeStyles({
    spinner: {
        textAlign: "center",
        marginTop: "20px"
    }
})
const Spinner = () => {
    const classes = useStyle();
    return (
        <Container className={classes.spinner}>
            <img className="my-3" src={image} alt="loading" />
        </Container>
    );
}

export default Spinner;
