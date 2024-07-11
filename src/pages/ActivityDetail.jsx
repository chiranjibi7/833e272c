import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCall} from "../slices/callSlice";
import {Spin} from "antd";
import { useParams } from 'react-router-dom';

function ActivityDetail() {
  const dispatch=useDispatch();
  const {id}=useParams();
  const {singleCall, isLoading}=useSelector(state=>state.call);

  useEffect(()=>{
    dispatch(getSingleCall(id));
  },[]);

  return (
    <div className='w-[90%] h-screen ml-[6rem] my-[2rem]'>
        {isLoading && <Spin/>}
        {singleCall && <div>
            <div>
            <p className='text-lg font-bold'>Call type: <span className='text-sm'>{singleCall?.direction}</span></p>
            <p className='text-lg font-bold'>Call time: <span className='text-sm'>{singleCall && new Date(singleCall?.created_at).toString().split("T")[0]}</span></p>
            <p className='text-lg font-bold'>Call duration: <span className='text-sm'>{singleCall?.duration}</span></p>
            <p className='text-lg font-bold'>Called by: <span className='text-sm'>{singleCall?.from}</span></p>
            <p className='text-lg font-bold'>Called to: <span className='text-sm'>{singleCall?.to}</span></p>
            <p className='text-lg font-bold'>Call answered: <span className='text-sm'>{singleCall?.call_type}</span></p>
            <p className='text-lg font-bold'>Called via: <span className='text-sm'>{singleCall?.via}</span></p>
            </div>
          </div>}
      </div>
  )
}

export default ActivityDetail