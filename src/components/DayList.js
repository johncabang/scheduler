import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return days;
}

// const items = props.items.map((item, index) => (
//   <ListItem key={index}>{item}</ListItem>
// ));
// //...
// return <div>{items}</div>;

// function TweetList(props) {
//   const tweets = props.tweets.map(tweet => {
//     return (
//       <Tweet
//         key={tweet.id}
//         name={tweet.name}
//         avatar={tweet.avatar}
//         content={tweet.content}
//         date={tweet.date}
//       />
//     );
//   });

//   return tweets;
// }
