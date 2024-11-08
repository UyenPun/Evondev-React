import React from "react";
import { YoutubeData } from "./Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);

  return (
    <div className='youtube-list'>
      {props.children}

      {/* item: 1 doi tuong cua YoutubeData; index: start: 0 */}
      {YoutubeData.map((item, index) => {
        const newClass = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            // Neu index = 1 thi co class abc
            className={newClass}></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
