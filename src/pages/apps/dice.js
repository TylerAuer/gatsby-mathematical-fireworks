import React from "react"
import Layout from "../../components/layout"
import AppIntro from "../../components/intro"
import InputField from "../../components/inputField"
import Die from "../../components/die"
import DataDisplay from "../../components/dataDisplay"
import ControlBtn from "../../components/control-btn"
import { css } from "@emotion/core"
import CountsBarChart from "../../components/countsBarChart"
import AvgLineChart from "../../components/avgLineChart"

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

const intro = (
  <>
    <p>
      <b>Dice</b> are really just simple <b>random number</b> generators. And,
      humans have been using dice to add randomness to games for{" "}
      <a href="https://en.wikipedia.org/wiki/Dice">over 4000 years</a>. There
      are nearly{" "}
      <a href="https://www.boardgamegeek.com/boardgamemechanic/2072/dice-rolling/linkeditems/boardgamemechanic?pageid=1&sort=rank">
        30,000 different board games
      </a>{" "}
      that use dice in some way. It may seem like mathematicians would not be
      able to study dice because they are random, but we actually can! It just
      took us a long time to figure out how.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/Al-Kindi">Al-Kindi</a>, an Arab
      mathematician in the 9th century was the first to recognize patterns in
      large sets of random data when he and others studied language to help
      crack coded messages. In the 16th century,{" "}
      <a href="https://en.wikipedia.org/wiki/Gerolamo_Cardano">
        Gerolamo Cardano
      </a>{" "}
      expanded upon these patterns and gave the first proof of{" "}
      <b>The Law of Large Numbers</b> which says that random things become more
      predictable the more times they happen. This site runs{" "}
      <b>Monte Carlo Simulations</b>, a computer imitation of random events
      repeated over and over and over again.
    </p>
    <p>
      While it might take you 5 seconds to roll a die and record the results,
      most computers can simulate thousands of rolls every second--yours will
      seem slower because it also has to render all these fancy-schmancy
      graphics. With a computer, mathematicians can look for hidden patterns in
      random data. These patterns often don't appear until you've collected
      thousands and thousands of data.
    </p>
    <p>
      Scientists and mathematicians use this method to predict the outcome of
      sporting events, forecast the paths of hurricanes, and test new casino
      games. Now you can use it to explore patterns in rolling dice.
    </p>
    <p>
      Select the number of dice to roll and hit "Start". Your computer will
      randomly determine the results for each die and add their values together
      to make a <b>sum</b>. The computer will also count the results for each
      sum and track the average sum over time.
    </p>
  </>
)

class DiceApp extends React.Component {
  constructor(props) {
    super(props)
    this.barChart = React.createRef()
    this.diceCountOnChange = this.diceCountOnChange.bind(this)
    this.startOnClick = this.startOnClick.bind(this)
    this.stop = this.stop.bind(this)
    this.resetOnClick = this.resetOnClick.bind(this)
    this.state = {
      iterations: 0,
      diceCount: 2,
      lastRoll: ["?", "?"],
      avgSumHist: [
        {
          id: "Rolling Average",
          color: "rgba(255, 0, 141, 1)",
          data: [],
        },
      ],
      resultCounts: this.genEmptyDiceCountDictArr(2),
    }
  }

  genEmptyDiceCountDictArr(diceCount) {
    let newResultCount = []
    for (let i = diceCount; i <= 6 * diceCount; i++) {
      newResultCount.push({
        id: i.toString(),
        value: 0,
      })
    }
    return newResultCount
  }

  diceCountOnChange(e) {
    this.stop()
    const maxDiceCount = 20

    let newDiceCount = parseInt(e.target.value)
    if (newDiceCount < 1) {
      newDiceCount = 1
    } else if (newDiceCount > maxDiceCount) {
      newDiceCount = maxDiceCount
    }
    this.setState({
      diceCount: newDiceCount,
      lastRoll: new Array(newDiceCount).fill("?"),
      lastAvg: 0,
      iterations: 0,
      resultCounts: this.genEmptyDiceCountDictArr(newDiceCount),
      avgSumHist: [
        {
          id: "Rolling Average",
          color: "rgba(255, 0, 141, 1)",
          data: [],
        },
      ],
    })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
  }

  runSim() {
    const newLastRoll = this.state.lastRoll.map(() => {
      return this.getRandomInt(1, 7)
    })

    const sumOfLastRoll = newLastRoll.reduce((total, num) => {
      return total + num
    })

    let newResultCounts = this.state.resultCounts
    newResultCounts[sumOfLastRoll - this.state.diceCount].value += 1

    let newAvg = sumOfLastRoll
    if (this.state.iterations) {
      newAvg =
        (this.state.avgSumHist[0].data[this.state.avgSumHist[0].data.length - 1]
          .y *
          this.state.iterations +
          sumOfLastRoll) /
        (this.state.iterations + 1)
    }

    this.setState(state => {
      const newAvgDict = {
        x: state.iterations + 1,
        y: newAvg,
      }
      let newAvgSumHist = state.avgSumHist
      newAvgSumHist[0].data.push(newAvgDict)

      return {
        iterations: state.iterations + 1,
        lastRoll: newLastRoll,
        resultCounts: newResultCounts,
        avgSumHist: newAvgSumHist,
      }
    })
  }

  startOnClick(e) {
    this.stop()
    this.simHandle = setInterval(() => {
      this.runSim()
    }, 1)
  }

  stop() {
    clearInterval(this.simHandle)
  }

  resetOnClick(e) {
    this.stop()
    this.setState({
      iterations: 0,
      lastRoll: new Array(this.state.diceCount).fill("?"),
      resultCounts: this.genEmptyDiceCountDictArr(this.state.diceCount),
      avgSumHist: [
        {
          id: "Rolling Average",
          color: "rgba(255, 0, 141, 1)",
          data: [],
        },
      ],
    })
  }

  render() {
    let diceList = []
    for (let i in this.state.lastRoll) {
      diceList.push(<Die key={i} value={this.state.lastRoll[i]} />)
    }

    let avgDisplay = " - "
    if (this.state.avgSumHist[0].data.length > 0) {
      avgDisplay =
        Math.round(
          this.state.avgSumHist[0].data[
            this.state.avgSumHist[0].data.length - 1
          ].y * 1000
        ) / 1000
    }

    let barLabels = []
    for (let i = this.state.diceCount; i <= this.state.diceCount * 6; i++) {
      barLabels.push(i)
    }

    return (
      <Layout>
        <AppIntro introHTML={intro} />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-6 col-md-3">
              <DataDisplay title="Iterations" data={this.state.iterations} />
            </div>

            <div className="col-xs-6 col-md-3 order-md-3">
              <DataDisplay title="Average Sum" data={avgDisplay} />
            </div>

            <div className="col-xs-12 col-md-6 order-md-2">
              <InputField
                title="Number of Dice"
                name="diceNum"
                value={this.state.diceCount}
                onChange={this.diceCountOnChange}
              />
            </div>
          </div>
        </div>

        <div
          id="dice-bin"
          className="container d-flex flex-wrap justify-content-center"
        >
          {diceList}
        </div>

        <div
          id="control-btns"
          className="container text-center"
          style={{ margin: "10px auto" }}
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
              onClick={this.stop}
            />
          </div>
          <ControlBtn
            css={resetBtnStyle}
            className="btn btn-lg"
            text="Reset"
            onClick={this.resetOnClick}
          />
        </div>

        <CountsBarChart
          data={this.state.resultCounts}
          hasData={this.state.iterations}
        />
        <AvgLineChart
          data={this.state.avgSumHist}
          hasData={this.state.iterations}
        />
      </Layout>
    )
  }
}

export default DiceApp
