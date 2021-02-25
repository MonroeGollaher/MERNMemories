import * as api from '../api/axios.js'
import { AUTH } from '../constants/ActionTypes'

export const signIn = (formData, history) => async (dispatch) => {
  try {
      // logs in the user
      const { data } = await api.signIn(formData)
      dispatch({ type: AUTH, data })
      history.push('/')
  } catch (error) {

  }
}

export const signUp = (formData, history) => async (dispatch) => {
  try {
      // signs up the user
      const { data } = await api.signUp(formData)
      dispatch({ type: AUTH, data })
      history.push('/')
  } catch (error) {

  }
}