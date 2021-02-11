import * as api from '../api/axios'

export const getPosts = () => async (dispatch) => {

  try {
      const { data } = await api.fetchPosts()
      dispatch({ type: 'FETCH-ALL', payload: data })
  } catch (error) {
      console.log(error.message);
  }
}