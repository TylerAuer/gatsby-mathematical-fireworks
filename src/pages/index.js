import React from "react"
import Layout from "../components/layout"
import Card from "../components/cards"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <Card
          title="100s Grid"
          desc="Explore place value, skip counting and factors with this customizable 100s chart."
          btnUrl="/apps/grid.html"
          btnText="Where we're going, we don't need roads."
        />
        <Card
          title="Multiplication Table"
          desc="Discover new patterns in this customizable multiplication chart."
          btnUrl="/apps/mult.html"
          btnText="Spared no expense."
        />
      </div>
      <div className="row">
        <Card
          title="Monte Carlo"
          desc="Run random events over and over and over and over..."
          btnUrl="/apps/monte-carlo.html"
          btnText="I, too, like to live dangerously."
        />
        <Card
          title="Half Life"
          desc="Explore how probability drives the decay of radioactive materials. Learn how rates of decay are measured using half-life."
          btnUrl="/apps/half-life.html"
          btnText="The files are in the computer?"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
