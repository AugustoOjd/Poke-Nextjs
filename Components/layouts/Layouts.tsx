import Head from 'next/head'
import React from 'react'
import {NavBar} from '../ui';

interface Props {
    children: React.ReactNode;
    title?: string
  }

const Layouts: React.FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name='author' content='Yo mismo'></meta>
            <meta name='informacion' content={`Informacion del pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
        </Head>

        <NavBar></NavBar>

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>

    </>
  )
}

export default Layouts