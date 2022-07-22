import React from 'react'
import {Container, Text, Image} from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <>
        <Container css={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text h1> No hay favoritos</Text>
          <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            css={{opacity: 0.1}}>

          </Image>

        </Container>

    </>
  )
}

export default NoFavorites