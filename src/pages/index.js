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
          btnUrl="/apps/100s-grid"
          btnText="Where we're going, we don't need roads."
        />
        <Card
          title="Multiplication Table"
          desc="Discover new patterns in this customizable multiplication chart."
          btnUrl="/apps/mult-table"
          btnText="Spared no expense."
        />
      </div>
      <div className="row">
        <Card
          title="Dice"
          desc="Watch The Law of Large Numbers exert its influence on the data as the computer simulates thousands of dice rolls."
          btnUrl="/apps/dice"
          btnText="I, too, like to live dangerously."
        />
        <Card
          title="Half Life"
          desc="Explore how probability drives the decay of radioactive materials. Learn how rates of decay are measured using half-life."
          btnUrl="/apps/half-life"
          btnText="The files are in the computer?"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
