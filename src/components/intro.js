import React from "react"
import { css } from "@emotion/core"

const showHideBtnStyle = css`
  background: rgba(255, 0, 141, 1);
  color: white;
  font-family: "Bungee", cursive;
  &:hover {
    color: white;
    background: rgb(236, 0, 141);
  }
`

class AppIntro extends React.Component {
  constructor(props) {
    super(props)
    this.hideShowBtnOnClick = this.hideShowBtnOnClick.bind(this)
    this.state = {
      display: true,
      introBtnText: "Hide Introduction",
    }
  }

  hideShowBtnOnClick(e) {
    this.state.display
      ? this.setState({ display: false, introBtnText: "Show Introduction" })
      : this.setState({ display: true, introBtnText: "Hide Introduction" })
  }

  render() {
    return (
      <div className="container">
        <div
          id="intro"
          style={
            this.state.display ? { display: "block" } : { display: "none" }
          }
        >
          {this.props.introHTML}
        </div>
        <button
          onClick={this.hideShowBtnOnClick}
          className="btn btn-sm"
          style={{ display: "block", margin: "20px auto" }}
          css={showHideBtnStyle}
        >
          {this.state.introBtnText}
        </button>
      </div>
    )
  }
}

export default AppIntro
