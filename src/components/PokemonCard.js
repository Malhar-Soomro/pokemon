import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        marginTop: 20,
        border: "1px grey solid"
    }
}));

const PokemonCard = ({ pokemonName }) => {
    const classes = useStyle();
    const capitalize = (name) => {
        const lower = name.toLowerCase();
        const titleCase = lower.charAt(0).toUpperCase() + lower.slice(1);
        return titleCase;
    }
    capitalize(pokemonName)
    return (
        <>
            <Card className={classes.card}>
                <CardHeader
                    title={capitalize(pokemonName)}
                />
                <CardMedia
                    style={{ width: "45px" }}
                    component="img"
                    image={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
                />
            </Card>
        </>
    )
}


export default PokemonCard
