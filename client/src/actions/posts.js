import * as api from '../api/axios.js'

export const getPosts = () => async (dispatch) => {
  try {
      const { data } = await api.fetchPosts()
      dispatch({ type: 'FETCH-ALL', payload: data })
      console.log(data, 'get posts');
  } catch (error) {
      console.log(error.message);
  }
}
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
    console.log(post, 'post made');
  } catch (error) {
    console.log(error.message);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: 'UPDATE', payload: data })
    console.log(post, 'post updated')
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    debugger
    await api.deletePost(id)
    dispatch({ type: 'DELETE', payload: id })
    console.log('post deleted')
  } catch (error) {
    console.log(error.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: 'UPDATE', payload: data })
    console.log(data, 'post liked')
  } catch (error) {
    console.log(error)
  }
}