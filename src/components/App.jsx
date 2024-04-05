import React from "react";

import Profile from './Profile/Profile';
import userData from './Profile/user.json';

import Statistics from "./Statistics/Statistics";
import statsData from "./Statistics/data.json";

import FriendList from "./Friend/FriendList";
import friends from "./Friend/friends.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
       <FriendList friends={friends} />
      React homework template
    </div>
  );
};



export default App;
