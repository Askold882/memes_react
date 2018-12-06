import React, { Component } from 'react';


class UserProfile extends Component {
  render() {
    return (
      <form className='usr_profile'>
        <div>
          <div class="header">
            <a href="/profile" class="logo">MEMES .I..</a>
            <div class="header-right">
              <a class="active" href="/avatar">Edit</a>
              <img src="https://pixel.nymag.com/imgs/daily/selectall/2016/09/30/30-pepe-trump.w700.h700.jpg" alt="Avatar" class="avatar" />
            </div>
          </div>
          <div id="root"></div>
          
        </div>
      </form>
    )
  }
}

  export default UserProfile;