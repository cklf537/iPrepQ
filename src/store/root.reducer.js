import { createSlice } from "@reduxjs/toolkit";
import produce, { current, original } from "immer";

const initialState = {
    questions:[]
};

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers:{
        FILTER_BY_TAGS: (state, action)=>{
            state.questions.data = state.questions.data.filter(question=>question.type.includes(action.payload));
        },
        LOAD_DATA:(state, action)=>{
            state.questions = action.payload;
        }
    }
});

export const {FILTER_BY_TAGS, LOAD_DATA} = rootSlice.actions;
export default rootSlice.reducer;