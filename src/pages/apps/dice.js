import React from "react"
import Layout from "../../components/layout"
import AppIntro from "../../components/intro"
import InputField from "../../components/inputField"
import Die from "../../components/die"
// import { Bar } from "react-chartjs-2"

// const data = [12, 19, 3, 5, 2, 3]

const intro = (
  <>
    <p>
      Humans have been playing games with dice for{" "}
      <a href="https://en.wikipedia.org/wiki/Dice">over 4000 years</a> because
      they add an element of chance and randomness. There are nearly{" "}
      <a href="https://www.boardgamegeek.com/boardgamemechanic/2072/dice-rolling/linkeditems/boardgamemechanic?pageid=1&sort=rank">
        30,000 different board games
      </a>{" "}
      that use dice in some way. Casinos use them, too, for many of their
      gambling games like craps.
    </p>
    <p>
      It may seem like mathematicians would not be able to study dice because
      they are random, but we actually can! It just took us a long time to
      figure out how.
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
      most computers can simulate thousands of rolls every second. With a
      computer, mathematicians can look for hidden patterns in random data.
      These patterns often don't appear until you've collected thousands and
      thousands of data.
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
    this.chartReference = React.createRef()
    this.diceCountOnChange = this.diceCountOnChange.bind(this)
    this.state = {
      iterations: 0,
      diceCount: 2,
    }
  }

  componentDidMount() {
    console.log(this.chartReference) // returns a Chart.js instance reference
  }

  diceCountOnChange(e) {
    let newDiceCount = e.target.value
    if (newDiceCount < 1) {
      newDiceCount = 1
    } else if (newDiceCount > 10) {
      newDiceCount = 10
    }
    this.setState({
      diceCount: newDiceCount,
    })
  }

  render() {
    return (
      <Layout>
        <AppIntro introHTML={intro} />
        <div
          className="containter"
          style={{ maxWidth: "300px", margin: "auto" }}
        >
          <div id="settings-bin">
            <InputField
              title="Number of Dice"
              name="diceNum"
              value={this.state.diceCount}
              onChange={this.diceCountOnChange}
              min="1"
              max="10"
            />
          </div>
        </div>
        <div id="dice-bin" className="container d-flex justify-content-center">
          <Die value="6" />
          <Die value="6" />
          <Die value="6" />
          <Die value="6" />
          <Die value="6" />
        </div>
        <div id="stats-bin"></div>
      </Layout>
    )
  }
}

export default DiceApp
