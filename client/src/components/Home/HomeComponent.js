import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core'
import { getPosts } from '../../actions/posts'
import { useDispatch } from 'react-redux'


import PostsComponent from '../Posts/PostsComponent'
import FormComponent from '../Form/FormComponent'

const HomeComponent = () => {

  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 7 } >
            <PostsComponent setCurrentId={ setCurrentId }/> 
          </Grid>
          <Grid item xs={ 12 } sm={ 4 }>
            <FormComponent currentId={ currentId } setCurrentId={ setCurrentId }/> 
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default HomeComponent