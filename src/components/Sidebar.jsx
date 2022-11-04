import React from 'react'
import { StyledSidebarcontainer , StyledSidebarsect1, StyledSidebarsectcover,StyledSidebarsect2, StyledSidebarsect2diff,  StyledSidebarruler, StyledSidebarsect3, StyledSidebarsect4 } from '../styes/Sidebar.styled';
import profile_photo from '../images/Ellipse 17593.svg';
import home from '../images/🦆 icon _Home with Roof Made of Palm Branches_.svg';
import eyes from '../images/🦆 icon _xfce4 eyes_.svg';
import music_icon from '../images/🦆 icon _music album_.svg';
import sound_on from '../images/🦆 icon _sound on_.svg';
import love_france from '../images/🦆 icon _love france heart national culture paris_.svg';
import audio_icon  from '../images/🦆 icon _audio_.svg';
import media_icon from '../images/🦆 icon _media playlist append_.svg';
import search_icon from '../images/search-icon.svg';
import bundle_icon from '../images/bundle-icon.svg';


const Sidebar = () => {
  return (
    <StyledSidebarcontainer>
      <StyledSidebarsect1>
        <img src={profile_photo} alt="" />
        <p>Hey! Aleem</p>
      </StyledSidebarsect1>

      <StyledSidebarsectcover>

        <StyledSidebarsect2>
            <div>
              <img src={home}alt=" home" />
              <p>Home</p>
            </div>

            <div>
              <img src={eyes} alt=" eyes" />
              <p>Discover</p>
            </div>
            <StyledSidebarruler></StyledSidebarruler>
        </StyledSidebarsect2>

        <StyledSidebarsect2>
            <div>
              <img src={music_icon}alt=" home" />
              <p>Your Library</p>
            </div>

            <StyledSidebarsect2diff>
              <img src={love_france} alt=" eyes" />
              <p>Liked Songs</p>
              <img src={sound_on} alt="" />
            </StyledSidebarsect2diff>

            <div>
              <img src={audio_icon}alt=" home" />
              <p>Recently Played</p>
            </div>

            <div>
              <img src={media_icon} alt=" eyes" />
              <p>Create Playlist</p>
            </div>
        </StyledSidebarsect2>

        <StyledSidebarsect3>
          <div>
            <img src={bundle_icon} alt=" eyes" />
            <p>My Playlists </p>
            <img src={search_icon} alt="" />
          </div>
          <StyledSidebarruler></StyledSidebarruler>
        </StyledSidebarsect3>

        <StyledSidebarsect4>
          <p>Riffs & Runs  </p>
          <p>African Heat  </p>
          <p>Gidi Nights </p>
          <p>Running out of Playlist na....</p>
          <p>Saturday was a Good Day</p>
          <p>Gidi Nights</p>

          <p>Riffs & Runs  </p>
          <p>African Heat  </p>
          <p>Gidi Nights </p>
          <p>Running out of Playlist na....</p>
          <p>Saturday was a Good Day</p>
          <p>Gidi Nights</p>

          <p>Running out of Playlist na....</p>
          <p>Saturday was a Good Day</p>
          <p>Gidi Nights</p>

        </StyledSidebarsect4>

      </StyledSidebarsectcover>
    </StyledSidebarcontainer>
  )
}

export default Sidebar;
