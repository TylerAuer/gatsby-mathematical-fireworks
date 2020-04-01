import React from "react"
import Layout from "../../components/layout"
//import { Bar } from "react-chartjs-2"

const data = [12, 19, 3, 5, 2, 3]

class DiceApp extends React.Component {
  constructor(props) {
    super(props)
    this.chartReference = React.createRef()
  }

  componentDidMount() {
    console.log(this.chartReference) // returns a Chart.js instance reference
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div id="intro">
            <p>
              Humans have been playing games with dice for{" "}
              <a href="https://en.wikipedia.org/wiki/Dice">over 4000 years</a>{" "}
              because they add an element of chance and randomness. There are
              nearly{" "}
              <a href="https://www.boardgamegeek.com/boardgamemechanic/2072/dice-rolling/linkeditems/boardgamemechanic?pageid=1&sort=rank">
                30,000 different board games
              </a>{" "}
              that use dice in some way. Casinos use them, too, for many of
              their gambling games like craps.
            </p>
            <p>
              It may seem like mathematicians would not be able to study dice
              because they are random, but we actually can! It just took us a
              long time to figure out how.
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Al-Kindi">Al-Kindi</a>, an
              Arab mathematician in the 9th century was the first to look at
              large collections of random data when he and others studied
              language to help crack coded messages. In the 16th century,{" "}
              <a href="https://en.wikipedia.org/wiki/Gerolamo_Cardano">
                Gerolamo Cardano
              </a>{" "}
              expanded these patterns and gave the first proof of{" "}
              <b>The Law of Large Numbers</b>, which says that random things
              become more predictable the more times they happen.
            </p>
            <p>
              Sometimes we roll a single die. Other times we roll multiple dice
              and add their values together.
            </p>
            <p>
              This site runs a Monte Carlo Simulation of rolling a six-sided
              die. While it may take you 10 seconds for each roll, most
              computers can simulate thousands of rolls every second. Scientists
              and mathematicians use this method to predict the outcome of
              sporting events, forecast the paths of hurricanes, and test new
              casino games.
            </p>
            <p>
              This method takes advantage of the Law of Large Numbers which says
              that as you rerun a random event over-and-over-and-over, your
              results become more and more predictable.
            </p>
            <button className="btn btn-sm btn-light float-right">
              Hide Introduction
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DiceApp
