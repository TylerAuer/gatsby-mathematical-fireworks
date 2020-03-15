import React from "react"
import { Helmet } from "react-helmet"

const HeadMeta = () => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <title>Mathematical Playgrounds</title>

    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-116279760-1"
    />
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-116279760-1');
      `}
    </script>
  </Helmet>
)

export default HeadMeta
