import { useTheme, Text, Spacer, Image, Link } from '@nextui-org/react'
import React from 'react'
import NextLink from 'next/link'


export const NavBar = () => {

    const { theme } = useTheme()
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <NextLink href={'/'} passHref>
            <Link>
                <Image 
                    src='https://pbs.twimg.com/media/CesWQMqWQAE7mh5.png'
                    alt='icono app'
                    width={50}
                    height={50}/>
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okemon</Text>
            </Link>
        </NextLink>


        <Spacer css={{flex: 1}}></Spacer>

        <NextLink href={'/favorites'} passHref>
            <Link>
                <Text color='white' h3>Favoritos</Text>
            </Link>
        </NextLink>
        
    </div>
  )
}
