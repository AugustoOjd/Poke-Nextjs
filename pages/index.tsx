
import type { NextPage, GetStaticProps } from 'next'
import Layouts from '../Components/layouts/Layouts'
import pokeApi from '../api/apiPoke';
import  { PokemonResponse} from '../interfaces'
import { SmallPokemon } from '../interfaces';
import { PokemonCard } from '../Components/pokemon';
import { Grid } from '@nextui-org/react';

interface props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<props>= ({pokemons}) => {

  // console.log(pokemons)
  return (
    <Layouts title='Listado Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>

          {pokemons.map( (pokemon)=> (
            
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>        
          ))}

      </Grid.Container>
    </Layouts>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) =>{


  const {data} = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, i)=> ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}





export default Home
