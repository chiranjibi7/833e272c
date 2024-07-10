import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCallsService, archiveSingleCallService, unarchiveSingleCallService, unarchiveAllCallService } from "../services";
import { act } from "react";

const initialState={
    isLoading:false,
    unarchivedCalls:[],
    archivedCalls:[],
    error:null
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
        
    },
    extraReducers:(builder)=>{

        builder.addCase(getAllCalls.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(getAllCalls.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.unarchivedCalls = action.payload.filter(call=>!call.is_archived);
            state.archivedCalls=action.payload.filter(call=>call.is_archived);
        }).addCase(getAllCalls.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload
        }); 
        
        builder.addCase(unarchiveSingleCall.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(unarchiveSingleCall.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.archivedCalls=state.archivedCalls.filter(call=>call.id!==action.payload.callId);
            state.unarchivedCalls=[...state.unarchivedCalls,state.archivedCalls.find(call=>call.id===action.payload.callId)];
        }).addCase(unarchiveSingleCall.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;
        }); 

        builder.addCase(archiveSingleCall.pending, (state,action)=> {
            state.isLoading=true;
        }).addCase(archiveSingleCall.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.unarchivedCalls=state.unarchivedCalls.filter(call=>call.id!==action.payload.callId);
            state.archivedCalls=[...state.archivedCalls,state.unarchivedCalls.find(call=>call.id===action.payload.callId)];
        }).addCase(archiveSingleCall.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;
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

export default callSlice.reducer;