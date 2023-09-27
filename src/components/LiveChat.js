import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate, randomTextGenerate } from "../utils/helper";
import { LIVE_CHAT_API } from "../utils/constants";

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState([]);

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(()=>{
      const t=setInterval(()=>{

      dispatch(addMessage({
          name: randomNameGenerate(),
          message: randomTextGenerate(20),
      }));

      },500);

      return () => clearInterval(t);
  },[]);

//   useEffect(() => {
//     getChats();
//   }, []);

//   useEffect(() => {
//         setInterval(() => {
//           dispatch(
//             addMessage({
//               name: liveMessage?.authorDetails?.displayName,
//               message: liveMessage?.snippet?.displayMessage,
//             })
//           );
//         }, 500)
    
//   }, []);

//   const getChats = async () => {
//     const data = await fetch(LIVE_CHAT_API);
//     const json = await data.json();
//     setLiveMessage(json.items);
//   };

  return (
    <>
      <div className="w-full h-[600px] ml-2  p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ajay Rawat",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-full mr-1 border border-black rounded-sm"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="p-2 bg-red-100 rounded-lg">Send</button>
      </form>
    </>
  );
}

export default LiveChat;
