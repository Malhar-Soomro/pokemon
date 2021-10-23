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

const PokemonCard = ({ pokemonName, loading }) => {
    const classes = useStyle();
    return (
        <>

            {!loading && <Card className={classes.card}>
                <CardHeader
                    title={pokemonName}
                />
                <CardMedia
                    style={{ width: "45px" }}
                    component="img"
                    image={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
                />
            </Card>}
        </>
    )
}


export default PokemonCard
