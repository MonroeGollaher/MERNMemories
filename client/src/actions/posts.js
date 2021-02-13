import { api } from '../api/axios'

export const getPosts = () => async (dispatch) => {

  try {
      const { data } = await api.get('/posts')
      dispatch({ type: 'FETCH-ALL', payload: data })
      console.log(data, 'test');
  } catch (error) {
      console.log(error.message);
  }
}