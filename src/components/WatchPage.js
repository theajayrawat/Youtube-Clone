import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 flex flex-col">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentContainer/>
    </div>
  );
}

export default WatchPage;
