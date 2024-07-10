import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCalls} from '../slices/callSlice';
import { Activity } from '../components/ActivityFeed';
import { Spin} from 'antd';

function ArchiveList() {
  const dispatch=useDispatch();
  const {isLoading,archivedCalls} = useSelector(state=>state.call);

  useEffect(()=>{
    dispatch(getAllCalls());
  },[dispatch])

 
  return (
    <div className='w-[90%] h-screen ml-[6rem] my-[2rem] flex flex-col' >
      {isLoading && <Spin tip="Loading" size='large'/>}
      {archivedCalls && archivedCalls.map(call=>{
        return <Activity key={call?.id} {...call} />        
      })}
    </div>
  )
}

export default ArchiveList;