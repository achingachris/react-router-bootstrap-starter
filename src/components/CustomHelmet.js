import { Helmet } from 'react-helmet'

const CustomHelmet = (props) => {
  return (
    <Helmet>
      <title>{props.titleTage}</title>
    </Helmet>
  )
}

export default CustomHelmet
