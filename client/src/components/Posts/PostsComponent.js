import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import PostComponent from './Post/PostComponent'
import useStyles from './styles'

const PostsComponent = ({ setCurrentId }) => {
  // @ts-ignore
  const posts = useSelector((state) => state.posts);
  const classes = useStyles()

  // console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={ classes.mainContainer } container alignItems="stretch" spacing={ 3 }>
        { posts.map((post) => (
          <Grid key={ post._id } item xs={ 12 }>
            <PostComponent post={ post } setCurrentId={ setCurrentId } /> 
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default PostsComponent