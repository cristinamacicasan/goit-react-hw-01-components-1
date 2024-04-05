import React from "react";

import Profile from './Profile/Profile';
import userData from './Profile/user.json';

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
      React homework template
    </div>
  );
};



export default App;
