import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import InputField from "../../components/inputField"
import ControlBtn from "../../components/control-btn"

const startBtnStyle = css``
const stopBtnStyle = css``

const AtomBuilder = props => {
  const liveAtomStyle = css`
    height: 6px;
    width: 6px;
    border-radius: 3px;
    margin: 2px;
    /* transition-duration: 1250ms; */
    background-color: rgba(255, 0, 141, 1);
  `
  const deadAtomStyle = css`
    height: 6px;
    width: 6px;
    border-radius: 3px;
    margin: 2px;
    /* transition-duration: 1250ms; */
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
    this.decayEvent = this.decayEvent.bind(this)
    this.state = {
      atomCount: 5000,
      halfLifeInMs: 5000,
      msBetweenDecayEvents: 250,
      decayEventProbability: 0.96593632892, // calculated as (5000/250)th root of 0.5
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
    console.log("Decay event!")
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
        atomCount: (state.atomCount -= atomsRemoved),
        decayEventCount: (state.decayEventCount += 1),
        halfLifeCount: Math.floor(
          state.decayEventCount /
            (state.halfLifeInMs / state.msBetweenDecayEvents)
        ),
      }
    })
  }

  /**
   * Starts or restarts the running of the simulation
   */
  start() {
    this.stop()
    console.log("Start Button Hit")
    this.simHandle = setInterval(() => {
      this.decayEvent()
    }, this.state.msBetweenDecayEvents)
  }

  /**
   * Stops the running of the simulation
   */
  stop() {
    if (this.simHandle) {
      clearInterval(this.simHandle)
      this.simHandle = 0
    }
  }

  startOnClick(e) {
    this.start()
  }

  stopOnClick(e) {
    this.stop()
  }

  render() {
    return (
      <Layout>
        <div id="preface" className="container">
          <p>
            There are <span id="dots-on-page">5000</span> atoms (pink dots) on
            this page. When you hit the start button, they will begin to turn
            white, randomly. This is meant to simulate a phenomenon known as{" "}
            <a href="https://en.wikipedia.org/wiki/Radioactive_decay">
              radioactive decay
            </a>
            .
          </p>
          <p>
            It is impossible to predict how long it will take an individual atom
            to decay in the same way that it is impossible to know for sure if a
            coin will land on heads or tails. But, since there are <b>so</b>{" "}
            many atoms, we can make predictions about what the pattern will look
            like. The amount of atoms that remain radioactive follows an{" "}
            <a href="https://www.desmos.com/calculator/y4kpct1jkq">
              exponential curve
            </a>
            . You often learn about exponential equations in an Algebra 1
            course.
          </p>
          <p>
            The <b>rate of decay</b> of a material is described with something
            called <b>half-life</b>. The half-life of a material is how long it
            takes, on average, for half of the atoms in the material to decay.
            Not all materials decay, only matter with unstable atoms.
          </p>
          <p>
            Some materials have a very long half-life, while others are very
            short. <b>Uranium-235</b>, an isotope often used in nuclear weapons,
            has a half-life of 703,800,000 <b>years</b>! While Boron-19 has a
            half-life of only 0.00292 <b>seconds</b>.
          </p>
        </div>

        <div
          style={{ margin: "0px auto" }}
          className="container text-center"
          id="button-bank"
        >
          <ControlBtn
            css={startBtnStyle}
            className="btn btn-lg"
            text="Start"
            onClick={this.startOnClick}
          />
          <ControlBtn
            css={stopBtnStyle}
            className="btn btn-lg"
            text="Stop"
            onClick={this.stopOnClick}
          />
        </div>
        <AtomBuilder atomArr={this.state.atomArr} />
      </Layout>
    )
  }
}

export default HalfLifeApp
