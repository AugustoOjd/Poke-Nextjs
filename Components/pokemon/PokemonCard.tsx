import { FC } from 'react';
import { SmallPokemon, PokemonResponse } from '../../interfaces';
import { useRouter } from 'next/router';
import { Grid, Card, Row, Text } from '@nextui-org/react';

interface Props {
    pokemon: SmallPokemon;
  }

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter()

    const action = ()=>{
        router.push(`/pokemon/${pokemon.id}`)
    }

  return (
    <>
                    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>

                    <Card hoverable clickable onClick={action}>
                        <Card.Body css={{p: 1}}>
                        <Card.Image 
                        src={pokemon.img}
                        width='100%'
                        height={'140px'}
                        />
                        </Card.Body>
                        <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                        </Row>
                        </Card.Footer>
                    </Card>

                    </Grid>
    </>
  )
}
