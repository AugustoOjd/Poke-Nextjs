import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import Layouts from '../../Components/layouts/Layouts'
import {GetStaticProps} from 'next';
import {pokeApi} from '../../api';
import { Pokemon} from '../../interfaces';
import { Card, Grid, Image, Text, Button, Container } from '@nextui-org/react';
import {locaFavorites} from '../../utils'
import {useState} from 'react'





interface props {
    pokemon: any
}

const PokemonPage: NextPage<props> = ({pokemon}) => {
    
    console.log(pokemon)
    const [IsInFavorite, setIsInFavorite] = useState( locaFavorites.existInFavorites( pokemon.id))

    const onToggleFavorite = ()=>{
        locaFavorites.toggleFavorites(pokemon.id)
        setIsInFavorite(!IsInFavorite)
    }

    // console.log(pokemon.sprites.other?.dream_world.front_default)
    return (
    <>
        <Layouts title={pokemon.name}>

            <Grid.Container css={{marginTop: '5px'}} gap={2}>

                <Grid xs={12} sm={4}>
                    <Card hoverable css={{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={ 300}
                            />
                        </Card.Body>

                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header>
                            <Text h1 transform='capitalize'> {pokemon.name} </Text>
                            <Button 
                            onClick={onToggleFavorite} 
                            color={'gradient'}
                            ghost={ !IsInFavorite}>
                                { IsInFavorite ? 'Agregado' : 'Agregar a favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display='flex'>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>

        </Layouts>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map((value, i)=> `${i + 1}`)
    // console.log(pokemon151)

    return {
      paths: pokemon151.map( id => ({
          params: {id}
      })),
      fallback: 'blocking' // false or 'blocking'
    };
  }


export const getStaticProps: GetStaticProps = async ({params}) =>{


    const {id} = params as {id: string}
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

    return {
      props: {
        pokemon: data
      },
      revalidate: 10 // will be passed to the page component as props
    }
  }

export default PokemonPage

