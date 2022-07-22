
import React, { useEffect, useState } from 'react'
import Layouts from '../../Components/layouts/Layouts'
import NoFavorites from '../../Components/ui/NoFavorites'
import { locaFavorites } from '../../utils';
import { FavoritePokemons } from '../../Components/pokemon';

const Favorite = () => {

  const [FavoritePokes, setFavoritePokes] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokes( locaFavorites.pokemons())
  }, [])

  return (
    <>
    <Layouts title='pokemons Favoritos'>

      {
        FavoritePokes.length === 0 
        
        ?
        <NoFavorites/>
        :
        
          ( <FavoritePokemons pokemons={FavoritePokes} /> )
        }

    </Layouts>

    </>
  )
}

export default Favorite