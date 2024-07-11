import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCalls,archiveAllCallS} from '../slices/callSlice';
import { Activity } from '../components/ActivityFeed';
import { Spin,Button} from 'antd';

function ActivityFeed() {
  const dispatch=useDispatch();
  const {isLoading,unarchivedCalls} = useSelector(state=>state.call);

  useEffect(()=>{
    dispatch(getAllCalls());
  },[dispatch])


  return (
    <div className='w-[90%] h-screen ml-[6rem] md:my-[2rem] my-[5rem] flex flex-col' >
      {isLoading && <Spin tip="Loading" size='large'/>}
      <Button className='min-w-[50px] max-w-[200px] m-3' onClick={()=>dispatch(archiveAllCallS())}>Archive all</Button>
      {unarchivedCalls && unarchivedCalls.map(call=>{
        return <Activity key={call?.id} {...call}/>        
      })}
    </div>
  )
}

export default ActivityFeed