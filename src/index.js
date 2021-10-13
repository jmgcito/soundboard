import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";
import squish from "./audio/squish.mp3";
import wow from "./audio/wow.mp3";
import { Howl, Howler } from "howler";

const Scale = (props) => {
  return (
    <button className="button" type="button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click a button",
      song: process.env.PUBLIC_URL + "thedeli.mp3",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  handleClick() {
    this.setState({
      message: "playing...",
    });
  }
  render() {
    const { name } = this.props;
    Howler.volume(1.0);

    return (
      <div>
        <h1 className="vertical-center">Mwahahahahahaaaaaaaaa</h1>
        <div className="vertical-center">
          <Scale
            name="Squish"
            onClick={() => {
              this.soundPlay(squish);
            }}
          />
          <Scale
            name="W0W"
            onClick={() => {
              this.soundPlay(wow);
            }}
          />
        </div>
        <h1 className="vertical-center">{this.state.message}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
