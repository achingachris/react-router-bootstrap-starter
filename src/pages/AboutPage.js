import {Helmet} from "react-helmet";
import AboutHeader from '../components/AboutHeader'

const AboutPage = () => {
  return (
    <>
    <Helmet>
        <title>About Page</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <AboutHeader />
    </>
  )
}

export default AboutPage
