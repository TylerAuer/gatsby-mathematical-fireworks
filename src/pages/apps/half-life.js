import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import AppIntro from "../../components/intro"
import ControlBtn from "../../components/control-btn"
import { prettyNum } from "../../components/numFormatter"
import DataDisplay from "../../components/dataDisplay"

const ctrlBtnStyle = css`
  margin: 3px 2px;
  font-family: "Bungee", cursive;
  background-color: rgba(20, 186, 204, 1);
  color: white;
  &:hover,
  &:focus {
    background-color: rgb(92, 221, 41);
    color: white;
  }
`
const resetBtnStyle = css`
  margin: 3px 2px;
  font-family: "Bungee", cursive;
  background-color: rgb(255, 116, 81);
  color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: rgba(255, 0, 141, 1);
  }
`
const rangeFormStyle = css`
  height: 40px;
  -webkit-appearance: none;
  margin: 0px 0;
  width: 100%;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 2px #000000;
    background: #ff008d;
    border-radius: 14px;
    border: 1px solid #000000;
  }
  &::-webkit-slider-thumb {
    box-shadow: 2px 2px 2px #000000;
    border: 2px solid #ff008d;
    height: 30px;
    width: 40px;
    border-radius: 7px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #ff008d;
  }
  &::-moz-range-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 2px #000000;
    background: #ff008d;
    border-radius: 14px;
    border: 1px solid #000000;
  }
  &::-moz-range-thumb {
    box-shadow: 2px 2px 2px #000000;
    border: 2px solid #ff008d;
    height: 30px;
    width: 40px;
    border-radius: 7px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #ff008d;
    border: 1px solid #000000;
    border-radius: 28px;
    box-shadow: 1px 1px 2px #000000;
  }
  &::-ms-fill-upper {
    background: #ff008d;
    border: 1px solid #000000;
    border-radius: 28px;
    box-shadow: 1px 1px 2px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 2px 2px 2px #000000;
    border: 2px solid #ff008d;
    height: 30px;
    width: 40px;
    border-radius: 7px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #ff008d;
  }
  &:focus::-ms-fill-upper {
    background: #ff008d;
  }
`

const intro = (
  <>
    <p>
      There are <span id="dots-on-page">5000</span> atoms (pink dots) on this
      page. When you hit the start button, they will begin to turn white,
      randomly. This is meant to simulate a phenomenon known as{" "}
      <a href="https://en.wikipedia.org/wiki/Radioactive_decay">
        radioactive decay
      </a>
      .
    </p>
    <p>
      It is impossible to predict how long it will take an individual atom to
      decay in the same way that it is impossible to know for sure if a coin
      will land on heads or tails. But, since there are <b>so</b> many atoms, we
      can make predictions about what the pattern will look like. The amount of
      atoms that remain radioactive follows an{" "}
      <a href="https://www.desmos.com/calculator/y4kpct1jkq">
        exponential curve
      </a>
      . You often learn about exponential equations in an Algebra 1 course.
    </p>
    <p>
      The <b>rate of decay</b> of a material is described with something called{" "}
      <b>half-life</b>. The half-life of a material is how long it takes, on
      average, for half of the atoms in the material to decay. Not all materials
      decay, only matter with unstable atoms.
    </p>
    <p>
      Some materials have a very long half-life, while others are very short.{" "}
      <b>Uranium-235</b>, an isotope often used in nuclear weapons, has a
      half-life of 703,800,000 <b>years</b>! While Boron-19 has a half-life of
      only 0.00292 <b>seconds</b>.
    </p>
  </>
)

// TODO: Make live atoms vibrate and then go still and gray when dead
// Use a parent div to ensure they hold their size and position
// how to make keyframes with emotion: https://emotion.sh/docs/keyframes
const AtomBuilder = props => {
  const liveAtomStyle = css`
    height: 6px;
    width: 6px;
    border-radius: 3px;
    margin: 2px;
    transition-duration: 1500ms;
    background-color: rgba(255, 0, 141, 1);
  `
  const deadAtomStyle = css`
    height: 6px;
    width: 6px;
    border-radius: 3px;
    margin: 2px;
    transition-duration: 1500ms;
    background-color: rgba(255, 0, 141, 0); // $theme-pink
  `

  let atoms = []
  let keyCounter = 0
  for (let atom of props.atomArr) {
    if (atom) {
      atoms.push(<div css={liveAtomStyle} key={keyCounter} />)
    } else {
      atoms.push(<div css={deadAtomStyle} key={keyCounter} />)
    }
    keyCounter++
  }

  return (
    <div className="container">
      <div
        id="atom-holder"
        className="d-flex flex-wrap justify-content-center"
        css={css`
          border: 4px solid rgba(20, 186, 204, 1);
          border-radius: 10px;
          padding: 5px;
          min-height: 400px;
          margin-bottom: 50px;
        `}
      >
        {atoms}
      </div>
    </div>
  )
}

class HalfLifeApp extends React.Component {
  constructor(props) {
    super(props)
    this.startOnClick = this.startOnClick.bind(this)
    this.stopOnClick = this.stopOnClick.bind(this)
    this.resetOnClick = this.resetOnClick.bind(this)
    this.handleChangeToHalfLifeSlider = this.handleChangeToHalfLifeSlider.bind(
      this
    )
    this.state = {
      atomCount: 5000,
      halfLifeInMs: 5000,
      msBetweenDecayEvents: 250,
      decayEventProbability: 0.96593632892, // calculated as (5000/1000)th root of 0.5
      decayEventCount: 0,
      halfLifeCount: 0,
      timeElapsed: 0, // in milliseconds
      atomArr: new Array(5000).fill(true),
    }
  }

  /**
   * Recalculates the decay event probability. This is necessary since the decay events happen intermittently over the course of a half-life
   * @param {int} halfLifeInMs how long before half of the surviving atoms decay on average
   * @param {int} msBetweenDecayEvents how long to wait before iterating over the atoms to see which decay
   */
  calcDecayEventProbability(halfLifeInMs, msBetweenDecayEvents) {
    return Math.pow(
      0.5,
      1 / (halfLifeInMs / msBetweenDecayEvents) // nth root where n the number of decay events / half life
    )
  }

  decayEvent() {
    this.setState(state => {
      return { decayEventCount: state.decayEventCount++ }
    })

    // runs probability event for each alive atom
    let atomsRemoved = 0
    let newAtomsArr = this.state.atomArr.map(atom => {
      if (atom) {
        if (Math.random() > this.state.decayEventProbability) {
          atomsRemoved += 1
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    })

    if (this.state.atomCount - atomsRemoved <= 0) {
      this.stop()
    }
    this.setState(state => {
      return {
        atomArr: newAtomsArr,
        atomCount: state.atomCount - atomsRemoved,
        decayEventCount: (state.decayEventCount += 1),
        halfLifeCount:
          state.halfLifeCount + state.msBetweenDecayEvents / state.halfLifeInMs,
      }
    })
  }

  /**
   * Starts or restarts the running of the simulation
   */
  start() {
    this.stop()
    this.simHandle = setInterval(() => {
      this.decayEvent()
    }, this.state.msBetweenDecayEvents)

    this.timerHandle = setInterval(() => {
      this.setState(state => {
        return {
          timeElapsed: state.timeElapsed + 100,
        }
      })
    }, 100)
  }

  /**
   * Stops the running of the simulation
   */
  stop() {
    if (this.simHandle) {
      clearInterval(this.simHandle)
    }
    if (this.timerHandle) {
      clearInterval(this.timerHandle)
    }
  }

  startOnClick(e) {
    this.start()
  }

  stopOnClick(e) {
    this.stop()
  }

  resetOnClick(e) {
    this.stop()
    this.setState({
      atomCount: 5000,
      halfLifeInMs: 5000,
      decayEventProbability: 0.96593632892, // calculated as (5000/1000)th root of 0.5
      decayEventCount: 0,
      halfLifeCount: 0,
      timeElapsed: 0, // in milliseconds
      atomArr: new Array(5000).fill(true),
    })
  }

  // handleChange function for the input fields
  handleChangeToHalfLifeSlider(e) {
    const newDecayEventProbability = this.calcDecayEventProbability(
      e.target.value,
      this.state.msBetweenDecayEvents
    )

    this.setState({
      decayEventProbability: newDecayEventProbability,
      halfLifeInMs: e.target.value,
    })
  }

  render() {
    return (
      <Layout>
        <AppIntro introHTML={intro} />
        <div id="preface" className="container">
          <form>
            <div className="form-group" style={{ margin: "20px auto" }}>
              <label>
                You can adjust the <b>half-life</b> of the atoms in this
                simulation using this slider:
              </label>
              <input
                id="user-input-hl"
                type="range"
                className="form-control-range"
                min="1000"
                max="120000"
                step="1000"
                value={this.state.halfLifeInMs}
                onChange={this.handleChangeToHalfLifeSlider}
                css={rangeFormStyle}
              />
            </div>
          </form>
        </div>

        <div
          style={{ margin: "0px auto 10px auto" }}
          className="container text-center"
          id="button-bank"
        >
          <div className="btn-group">
            <ControlBtn
              css={ctrlBtnStyle}
              className="btn btn-lg"
              text="Start"
              onClick={this.startOnClick}
            />
            <ControlBtn
              css={ctrlBtnStyle}
              className="btn btn-lg"
              text="Stop"
              onClick={this.stopOnClick}
            />
          </div>
          <ControlBtn
            css={resetBtnStyle}
            className="btn btn-lg"
            text="Reset"
            onClick={this.resetOnClick}
          />
        </div>

        <div
          id="data-bank"
          className="container"
          style={{ margin: "20px auto" }}
        >
          <div className="row">
            <DataDisplay
              data={this.state.halfLifeInMs / 1000 + " sec."}
              title={"Half-life"}
            />
            <DataDisplay
              data={Math.floor(this.state.halfLifeCount)}
              title={"Half-lives Elapsed"}
            />
            <DataDisplay
              data={this.state.timeElapsed / 1000 + " sec."}
              title={"Time Elapsed"}
            />
            <DataDisplay
              data={prettyNum(this.state.atomCount)}
              title={"Atoms Left"}
            />
          </div>
        </div>
        <AtomBuilder atomArr={this.state.atomArr} />
      </Layout>
    )
  }
}

export default HalfLifeApp
