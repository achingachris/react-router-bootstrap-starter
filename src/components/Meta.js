import { Helmet } from 'react-helmet'

const CustomHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default CustomHelmet
