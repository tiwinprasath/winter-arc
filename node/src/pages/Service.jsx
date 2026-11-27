import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <main className="simple-page">
      <h1>Services</h1>
      <p>Explore the services available in this app.</p>
      <p><Link to="/">Back to home</Link></p>
    </main>
  )
}

export default Service
