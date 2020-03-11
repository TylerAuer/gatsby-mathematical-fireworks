import React from "react"

const colorCycle = [
  "rgb(255, 230, 0)", // yellow
  "rgb(92, 221, 41)", // green
  "rgb(255, 0, 141)", // pink
  "rgb(20, 186, 204)", // blue
  "rgb(255, 116, 81)", // orange
]

// TODO: Clearly comment this code
// TODO: Tweak the color effect changes to be smoother
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
      if (Math.random() > 0.98) {
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
        <span key={i} className="title-letter" style={style}>
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
      }, 100) // how often to randomly change colors
    }, 1500) // how long to wait before starting to change colors
  }

  componentWillUnmount() {
    clearInterval(this.id)
  }

  render() {
    return (
      <div className="row">
        <div id="header-title-div" className="col-12 text-center">
          <h1 id="header-title" className="display-4">
            {this.state.text}
          </h1>
        </div>
      </div>
    )
  }
}

export default Title
