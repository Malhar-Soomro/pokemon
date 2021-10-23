import { Container, Grid } from '@material-ui/core';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemon, loading }) => {
    return (
        <Container>
            <Grid container>
                {pokemon && pokemon.map(p => (
                    <Grid key={p} item lg={4} md={6} sm={6} xs={12}>
                        <PokemonCard
                            pokemonName={p}
                            loading={loading}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default PokemonList
