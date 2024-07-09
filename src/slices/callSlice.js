import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCallsService, archiveSingleCallService, unarchiveSingleCallService, unarchiveAllCallService } from "../services";

const initialState={
    isLoading:false,
    allCalls:null,
    singleCall:null,
    archivedCallResponse:"",
    unarchivedCallResponse:"",
    unarchivedCallsResponse:"",
};

export const getAllCalls=createAsyncThunk('call/getAllCallsService',getAllCallsService);
export const getSingleCall=createAsyncThunk();
export const archiveSingleCall=createAsyncThunk('call/archiveSingleCallService',archiveSingleCallService);
export const unarchiveAllCallS=createAsyncThunk('call/ unarchiveAllCallService', unarchiveAllCallService);
export const unarchiveSingleCall=createAsyncThunk('call/ unarchiveSingleCallService', unarchiveSingleCallService);

const callSlice=createSlice({
    name:"call",
    initialState,
    reducers:{
        resetAllCalls:(state)=>{
            state.allCalls=null;
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(getAllCalls.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(getAllCalls.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.allCalls=action.payload;
        }).addCase(getAllCalls.rejected,(state)=>{
            state.isLoading=false;
        }); 
        
        builder.addCase(unarchiveSingleCall.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(unarchiveSingleCall.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.unarchivedCallResponse=action.payload;
        }).addCase(unarchiveSingleCall.rejected,(state)=>{
            state.isLoading=false;
        }); 

        builder.addCase(archiveSingleCall.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(archiveSingleCall.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.archivedCallResponse=action.payload;
        }).addCase(archiveSingleCall.rejected,(state)=>{
            state.isLoading=false;
        }); 

        builder.addCase(unarchiveAllCallS.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(unarchiveAllCallS.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.unarchivedCallsResponse=action.payload;
        }).addCase(unarchiveAllCallS.rejected,(state)=>{
            state.isLoading=false;
        }); 
    }
});
export const {resetAllCalls}= callSlice.actions;
export default callSlice.reducer;