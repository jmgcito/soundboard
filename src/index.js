import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";
import squish from "./audio/squish.mp3";
import wow from "./audio/wow.mp3";
import youre20 from "./audio/youre20.mp3";
import notthatguy from "./audio/yourenotthatguy.mp3";
import heyyeayea from "./audio/heyyeayea.mp3";
import wompwompwomp from "./audio/wompwompwomp.mp3";
import { Howl, Howler } from "howler";

const soundClips = [
  { sound: squish, label: "squish" },
  { sound: wow, label: "w000w" },
  { sound: youre20, label: "you're 20?" },
  { sound: heyyeayea, label: "hey yay yeaaaah" },
  { sound: wompwompwomp, label: "womp womp wooomp" },
  { sound: notthatguy, label: "you're not that guy" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "click a button",
      song: process.env.PUBLIC_URL + "thedeli.mp3",
    };
    this.buttonAndSound = this.buttonAndSound.bind(this);
    this.soundPlay = this.soundPlay.bind(this);
  }
  soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };
  buttonAndSound = () => {
    return soundClips.map((soundObj, index) => {
      return (
        <button
          className="button"
          type="button"
          onClick={() => {
            this.soundPlay(soundObj.sound);
          }}
        >
          {soundObj.label}
        </button>
      );
    });
  };

  render() {
    Howler.volume(1.0);

    return (
      <div className="vertical-center">
        <article className="card middle">
          <div>
            <h1 className="text">Jmgcito's Favorite Sounds</h1>
          </div>
          <div>{this.buttonAndSound()}</div>
          <h2 className="text">{this.state.message}</h2>
        </article>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
