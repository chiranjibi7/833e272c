import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCalls, unarchiveAllCallS} from '../slices/callSlice';
import { Activity } from '../components/ActivityFeed';
import { Spin,Button} from 'antd';

function ArchiveList() {
  const dispatch=useDispatch();
  const {isLoading,archivedCalls} = useSelector(state=>state.call);

  useEffect(()=>{
    dispatch(getAllCalls());
  },[dispatch])

 
  return (
    <div className='w-[90%] h-screen ml-[6rem] md:my-[2rem] my-[5rem] flex flex-col' >
      {isLoading && <Spin tip="Loading" size='large'/>}
      <Button className='w-[20%] m-3' onClick={()=>dispatch(unarchiveAllCallS())}>Unarchive all</Button>
      {archivedCalls && archivedCalls.map(call=>{
        return <Activity key={call?.id} {...call} />        
      })}
    </div>
  )
}

export default ArchiveList;