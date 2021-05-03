import { Container, CssBaseline, NoSsr } from "@material-ui/core"
import React, { useEffect } from "react"

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Container>
        <NoSsr>
          <Component {...pageProps} />
        </NoSsr>
      </Container>
    </>
  )
}
