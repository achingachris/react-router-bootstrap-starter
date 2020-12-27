const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center'>copyright react-bootstrap-starter &copy; {year}</footer>
    </>
  )
}

export default Footer
