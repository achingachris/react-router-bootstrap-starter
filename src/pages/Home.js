import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

const HomePage = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <CustomHelmet titleTage={pageTitle}/>
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
    </div>
  )
}

export default HomePage
