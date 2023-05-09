import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root', 
    initialState: {
        name: 'Hulk',
        price: '5000',
        power: 'strength',
        movie: 'The Avengers'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        choosePower: (state, action) => { state.power = action.payload },
        chooseMovie: (state, action) => { state.movie = action.payload } 
    }
})
// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, choosePower, chooseMovie} = rootSlice.actions;