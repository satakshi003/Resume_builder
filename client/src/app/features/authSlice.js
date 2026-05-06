import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    user: null,
    loading: true
  },
  reducers: {
    login: (state, action)=>{
      state.token = action.payload.token
      state.user = action.payload.user
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state)=>{
      state.token = null,
      state.user = null,
      localStorage.removeItem('token')
    },
    setLoading: (state, action)=>{
      state.loading = action.payload
    },
    
    setUser: (state, action) => {
    state.user = action.payload
}
  }
})

export const {login, logout, setLoading, setUser} = authSlice.actions

export default authSlice.reducer