import { Container, Text, Image, Grid, Card } from '@nextui-org/react'
import React, { useEffect } from 'react'
import Layouts from '../../Components/layouts/Layouts'
import NoFavorites from '../../Components/ui/NoFavorites'
import { useState } from 'react';
import { locaFavorites } from '../../utils';
import { useRouter } from 'next/router';

const index = () => {

  const [FavoritePokes, setFavoritePokes] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokes( locaFavorites.pokemons())
  }, [])

  const router = useRouter()

  const onDetail = ()=> {
    router.push(`/pokemon/${FavoritePokes.find(id => id === id)}`)
  }
  
  return (
    <>
    <Layouts title='pokemons Favoritos'>

      {
        FavoritePokes.length === 0 
        
        ?
         
        <NoFavorites/>
        :
        
        <Grid.Container gap={2} direction={'row'} justify='flex-start'>
          {
            FavoritePokes.map(id => (
              <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card hoverable clickable css={{padding: 10}} onClick={onDetail}>
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}/>
                </Card>
              </Grid>
            ))
          }
        </Grid.Container>
        }

    </Layouts>

    </>
  )
}

export default index