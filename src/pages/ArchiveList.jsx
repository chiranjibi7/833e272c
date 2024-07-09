import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCalls, resetAllCalls } from '../slices/callSlice';
import { Activity } from '../components/ActivityFeed';

function ArchiveList() {
  const dispatch=useDispatch();
  const {isLoading,allCalls,archivedCallResponse, unarchivedCallsResponse, unarchivedCallResponse} = useSelector(state=>state.call);

  useEffect(()=>{
    dispatch(resetAllCalls());
    dispatch(getAllCalls());
  },[dispatch, archivedCallResponse, unarchivedCallsResponse, unarchivedCallResponse])

  console.log(allCalls)
  return (
    <div className='w-[90%] ml-[6rem] my-[2rem] flex flex-col' >
      {isLoading && <p>Loading...</p>}
      {allCalls && allCalls.map(call=>{
        if(call.is_archived) return <Activity key={call.id} {...call} flag="archived"/>        
      })}
    </div>
  )
}

export default ArchiveList;