const Controls = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "controls" }, /*#__PURE__*/
    React.createElement("div", { id: "break" }, /*#__PURE__*/
    React.createElement("div", { id: "break-label" }, "Break Length"), /*#__PURE__*/
    React.createElement("div", { id: "break-control" }, /*#__PURE__*/
    React.createElement("button", { id: "break-decrement", onClick: props.decBreak }, /*#__PURE__*/
    React.createElement("svg", { class: "control", viewBox: "0 0 320 512", title: "angle-down" }, /*#__PURE__*/
    React.createElement("path", { d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" }))), /*#__PURE__*/


    React.createElement("div", { id: "break-length" }, props.break), /*#__PURE__*/
    React.createElement("button", { id: "break-increment", onClick: props.incBreak }, /*#__PURE__*/
    React.createElement("svg", { viewBox: "0 0 320 512", class: "control", title: "angle-up" }, /*#__PURE__*/
    React.createElement("path", { d: "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" }))))), /*#__PURE__*/




    React.createElement("div", { id: "session" }, /*#__PURE__*/
    React.createElement("div", { id: "session-label" }, "Session Length"), /*#__PURE__*/
    React.createElement("div", { id: "session-control" }, /*#__PURE__*/
    React.createElement("button", { id: "session-decrement", onClick: props.decSession }, /*#__PURE__*/
    React.createElement("svg", { class: "control", viewBox: "0 0 320 512", title: "angle-down" }, /*#__PURE__*/
    React.createElement("path", { d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" }))), /*#__PURE__*/


    React.createElement("div", { id: "session-length" }, props.session), /*#__PURE__*/
    React.createElement("button", { id: "session-increment", onClick: props.incSession }, /*#__PURE__*/
    React.createElement("svg", { viewBox: "0 0 320 512", class: "control", title: "angle-up" }, /*#__PURE__*/
    React.createElement("path", { d: "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" })))))));






};

const Display = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("div", {
      id: "timer-label",
      style: { color: props.minutes < 1 ? "#FF3D00" : "#E0E0E0" } },

    !props.sessionDone ? "Session" : "Break"), /*#__PURE__*/

    React.createElement("div", {
      id: "time-left",
      style: { color: props.minutes < 1 ? "#FF3D00" : "#E0E0E0" } },
    `${props.minutes.
    toString().
    padStart(2, "0")}:${props.seconds.toString().padStart(2, "0")}`)));


};

const DisplayControl = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display-control" }, /*#__PURE__*/
    React.createElement("button", {
      id: "start_stop",
      className: "btn btn-light",
      onClick: props.countdown }, /*#__PURE__*/

    React.createElement("svg", { viewBox: "0 0 448 512", className: "control", title: "play" }, /*#__PURE__*/
    React.createElement("path", { d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" }))), /*#__PURE__*/


    React.createElement("button", { id: "reset", className: "btn btn-light", onClick: props.reset }, /*#__PURE__*/
    React.createElement("svg", { viewBox: "0 0 512 512", className: "control", title: "undo-alt" }, /*#__PURE__*/
    React.createElement("path", { d: "M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z" })))));




};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0,
      pause: false,
      sessionDone: false };

    this.countdown = this.countdown.bind(this);
    this.reset = this.reset.bind(this);
    this.interval = null;
    this.incSession = this.incSession.bind(this);
    this.decSession = this.decSession.bind(this);
    this.incBreak = this.incBreak.bind(this);
    this.decBreak = this.decBreak.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.beep = React.createRef();
  }

  incSession() {
    if (!this.state.pause) {
      this.setState({
        session:
        this.state.session + 1 <= 60 ?
        this.state.session + 1 :
        this.state.session,
        minutes:
        this.state.session + 1 <= 60 ?
        this.state.session + 1 :
        this.state.session,
        seconds: 0 });

    }
  }
  decSession() {
    if (!this.state.pause) {
      this.setState({
        session:
        this.state.session - 1 > 0 ?
        this.state.session - 1 :
        this.state.session,
        //this.state.session - 1 > this.state.break? this.state.session - 1 : this.state.session,
        minutes:
        this.state.session - 1 > 0 ?
        this.state.session - 1 :
        this.state.session,
        //this.state.session - 1 > this.state.break? this.state.session - 1 : this.state.session,
        seconds: 0 });

    }
  }

  incBreak() {
    if (true) {
      this.setState({
        break:
        this.state.break + 1 <= 60 ? this.state.break + 1 : this.state.break
        //this.state.break + 1 < this.state.minutes? this.state.break + 1 : this.state.break
      });
    }
  }
  decBreak() {
    if (true) {
      this.setState({
        break:
        this.state.break - 1 > 0 ? this.state.break - 1 : this.state.break });

    }
  }

  playAudio() {
    this.beep.current.play();
  }

  countdown() {
    this.setState(prevState => ({
      pause: !prevState.pause }));


    if (!this.state.pause) {
      let minutes = this.state.minutes;
      let seconds = this.state.seconds;

      this.interval = setInterval(() => {
        if (!this.state.pause) {
          clearInterval(this.interval);
        } else if (minutes === 0 && seconds === 0) {
          this.playAudio();
          this.setState(prevState => ({
            sessionDone: !prevState.sessionDone }));

          if (this.state.sessionDone) {
            // When session time is up
            //console.log("Session time up!");
            this.setState({
              sessionDone: true });

            minutes = this.state.break;
            seconds = 0;
          } else {
            // When break time is up
            //console.log("Break time up!");
            // Start new session
            minutes = this.state.session;
            seconds = 0;
            this.setState({
              sessionDone: false });

          }
        } else if (seconds === 0) {
          //console.log('Minutes down')
          minutes -= 1;
          seconds = 59;
        } else {
          //console.log('Seconds down')
          seconds -= 1;
        }
        //console.log('Timer is:', minutes, ':', seconds);
        this.setState({
          minutes,
          seconds });

      }, 1000);
    }
  }

  reset() {
    this.setState({
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0,
      pause: false,
      sessionDone: false });

    clearInterval(this.interval);
    this.beep.current.pause();
    this.beep.current.currentTime = 0;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "clock" }, /*#__PURE__*/
      React.createElement("audio", { ref: this.beep, id: "beep", src: "https://soundbible.com/grab.php?id=1815&type=mp3", controls: true }), /*#__PURE__*/
      React.createElement("div", { id: "title" }, `${this.state.session} + ${this.state.break} Clock`), /*#__PURE__*/
      React.createElement(Controls, {
        break: this.state.break,
        session: this.state.session,
        incSession: this.incSession,
        decSession: this.decSession,
        incBreak: this.incBreak,
        decBreak: this.decBreak }), /*#__PURE__*/

      React.createElement(Display, {
        minutes: this.state.minutes,
        seconds: this.state.seconds,
        sessionDone: this.state.sessionDone }), /*#__PURE__*/

      React.createElement(DisplayControl, { countdown: this.countdown, reset: this.reset })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById("react-div"));