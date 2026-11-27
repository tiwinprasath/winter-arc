import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className="simple-page">
      <h1>About</h1>
      <p>Welcome to our app. This is the place to learn more about us.</p>
      <p><Link to="/">Back to home</Link></p>
    </main>
  )
}

export default About
