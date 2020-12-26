import { Helmet } from 'react-helmet'
import Header from '../components/Header'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <Header pageTitle='About' pageDescription='About Page' />
    </>
  )
}

export default AboutPage
