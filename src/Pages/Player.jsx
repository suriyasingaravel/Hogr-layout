import React, { useState } from 'react';

import { BsFillPauseCircleFill } from 'react-icons/bs';
import { BsShuffle } from 'react-icons/bs';
import { CgPlayTrackPrev } from 'react-icons/cg';
import { CgPlayTrackNext } from 'react-icons/cg';
import PlayerControl from '../Components/PlayerControl';

const Player = () => {
    const [playerState, setPlayerState] = useState(false);
  return (
    <div style={{width:"80%", margin:"auto", textAlign:"center"}}>
      <img
      style={{marginTop:"30px", width:"350px", objectFit:"cover"}}
        src="https://img-c.udemycdn.com/course/240x135/3489816_2db5.jpg"
        alt=""
      />
      <h2>Fundamentals of Product Des..</h2>
      <p style={{fontSize:"16px"}} >Chapter 2 - What is Product Design?</p>

      {/* Audio Player */}
      {/* <audio controls>
        <source
          src="https://your-audio-file-url.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio> */}
      {/* <div > */}
      <button style={{width:"230px",height:"35px", backgroundColor:"#2E3035"}}>View Chapter Notes</button>
      <br />
      <button style={{width:"230px",height:"35px", backgroundColor:"#2E3035", marginTop:"10px"}}>Attempt Quiz</button>
      {/* </div> */}
      <div style={{marginTop:"30px", display:"flex", gap:"20px", justifyContent:"center"}}>
      {/* <CgPlayTrackPrev style={{ fontSize: '50px' }} />
      <BsFillPauseCircleFill style={{ fontSize: '50px' }} /> */}
      {/* <BsShuffle style={{ fontSize: '50px' }} /> */}
       {/* <CgPlayTrackNext style={{ fontSize: '50px' }} /> */}
     <PlayerControl/>


      </div>
     
      {/* <PlayerControl/> */}
    </div>
  );
};

export default Player;
