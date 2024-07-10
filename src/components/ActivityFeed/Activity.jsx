import React from "react";
import { SlCallIn, SlCallOut } from "react-icons/sl";
import { PiDotsThreeVertical } from "react-icons/pi";
import { Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { archiveSingleCall, unarchiveSingleCall} from "../../slices/callSlice";

function Activity({
  call_type,
  created_at,
  direction,
  duration,
  from,
  to,
  via,
  id,
  is_archived
}) {
  const dispatch = useDispatch();

  return (
    <div className="w-[50%] bg-white p-5 m-4 flex justify-between items-center rounded-lg shadow">
      {direction === "inbound" ? (
        <SlCallIn color="blue" />
      ) : (
        <SlCallOut color="red" />
      )}
      <div>
        from {from} to {to}
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex flex-col gap-1">
          <p className="text-xs">
            {/* {new Date(created_at).toISOString().split("T")[0]} */}
            {created_at}
          </p>
          <p className="text-xs">
            {/* {new Date(created_at).toISOString().split("T")[1].split(".")[0]} */}
            {created_at}
          </p>
        </div>
        <Popconfirm
          okText="Details"
          cancelText={!is_archived ? "Archive" : "Unarchive"}
          title="Call Explorer"
          onCancel={() => {
            if(!is_archived){
                dispatch(archiveSingleCall(id));
            } else {
                dispatch(unarchiveSingleCall(id))
            }
          }}
          onConfirm={()=>dispatch(unarchiveAllCallS())}
        >
          <PiDotsThreeVertical size={20} className="hover:cursor-pointer" />
        </Popconfirm>
      </div>
    </div>
  );
}

export default Activity;
