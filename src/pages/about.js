import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const AboutPage = () => (
  <>
    <Helmet>
      <title>About - Mathematical Playgrounds</title>
    </Helmet>
    <Layout>
      <div className="container">
        <h2>About</h2>
        <p>
          As a math teacher interested in code and design, I like to puzzle
          through ways to help others make sense of complex ideas. So, I'm
          working to strengthen my coding skills by building interactives for
          others to explore.
        </p>
        <h3>Want to See More?</h3>
        <p>
          You can check out{" "}
          <a href="https://github.com/TylerAuer/gatsby-mathematical-fireworks/blob/master/README.md">
            what I've dreamed up but haven't built
          </a>
          . If you've got a different idea, send me an email. My name is Tyler
          Auer. Email me here: [first-name].[last-name] at gmail dot com.
        </p>
        <h3>Code</h3>
        <p>
          The 100s grid, multiplication table, half-life simulator, and dice
          rolling apps were originally{" "}
          <a href="https://github.com/TylerAuer/math-tools">
            built with vanilla JavaScript
          </a>
          . I've since rebuilt them with React.
        </p>
        <p>
          I'm still learning. Everything works, but the code isn’t as pretty as
          it could be. There are too many things done inefficiently, too much
          repeated code. Don't judge, I didn’t know any better.
        </p>
      </div>
    </Layout>
  </>
)

export default AboutPage
