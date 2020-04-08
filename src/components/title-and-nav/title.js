import React from "react"
import { css } from "@emotion/core"

const titleStyle = css`
  margin-bottom: 0px;
  font-size: 38px;
  text-transform: uppercase;
  line-height: 1.1;
  @media (min-width: 576px) {
    font-size: 65px;
  }
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
  @media screen and (min-width: 992px) {
    font-size: 60px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 75px;
  }
  @media screen and (min-width: 2000px) {
    font-size: 120px;
  }
`

const letterStyle = css`
  transition-duration: 1000ms;
`

const colorCycle = [
  "rgb(255, 230, 0)", // yellow
  "rgb(92, 221, 41)", // green
  "rgb(255, 0, 141)", // pink
  "rgb(20, 186, 204)", // blue
  "rgb(255, 116, 81)", // orange
]

// Display's the Title "Mathematical Playgrounds" with its color changing effect
class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: Array(props.text.length).fill("rgb(255, 0, 141)"), // Initial color set here
      text: this.props.text, // HTML that is displayed in <h1></h1>
    }
  }

  updateColors() {
    const oldColors = this.state.colors
    const newColors = oldColors.map(element => {
      if (Math.random() > 0.97) {
        return colorCycle[Math.floor(Math.random() * colorCycle.length)]
      } else {
        return element
      }
    })

    this.setState({
      colors: newColors,
    })
  }

  wrapLetters() {
    const title = this.props.text
    let wrappedLettersText = []

    for (let i in title) {
      const style = {
        color: this.state.colors[i],
      }

      wrappedLettersText.push(
        <span key={i} className="title-letter" style={style} css={letterStyle}>
          {title.charAt(i)}
        </span>
      )
    }

    this.setState({ text: wrappedLettersText })
  }

  componentDidMount() {
    setTimeout(() => {
      this.id = setInterval(() => {
        this.updateColors()
        this.wrapLetters()
      }, 200) // how often to randomly change colors
    }, 1000) // how long to wait before starting to change colors
  }

  componentWillUnmount() {
    clearInterval(this.id)
  }

  render() {
    return (
      <div className="row">
        <div id="header-title-div" className="col-12 text-center">
          <h1 id="header-title" css={titleStyle}>
            {this.state.text}
          </h1>
        </div>
      </div>
    )
  }
}

export default Title
