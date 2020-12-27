import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

const AboutPage = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'another page implimented with React-Router'

  return (
    <>
      <CustomHelmet titleTage={pageTitle}/>
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
    </>
  )
}

export default AboutPage
