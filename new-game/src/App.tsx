import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'


const App = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid 
        templateAreas={{
          base:`'nav' 'main'`,
          lg:`'nav nav' 'aside main'`, //992 pixel breakpoint (happens at 991 width pixel)
        }}
      >
        
        <GridItem area="nav">
          <NavBar/>
        </GridItem>

        <Show above='lg'>        
          <GridItem area="aside" padding={2}>
            <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        
        <GridItem area="main">
          <GameGrid/>
        </GridItem>

      </Grid>    
    </>
  )
}

export default App