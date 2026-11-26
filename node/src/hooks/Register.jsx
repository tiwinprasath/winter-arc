import { useState } from 'react'
import Count from './count'
import { z } from "zod"

const registerSchema=z.object({
  name:z.string().min(3,"Name must have minimum of 3 letters"),
  email:z.string().email("Enter valid email"),
  password:z.string().min(8,"Password must contain at least 8 characters")
})

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [count, setCount] = useState(0)
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextCount = count + 1
    const submission = { ...formData, count: nextCount }

    setCount(nextCount)
    setSubmittedData(submission)
    console.log(submission)
  }

  return (
    <div>
      <h1>Register form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" onChange={handleChange} value={formData.name} required />
        <br />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={handleChange} value={formData.email} required />
        <br />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" onChange={handleChange} value={formData.password} required />
        <br />
        <button type="submit">Submit</button>
      </form>

      <Count
        value={count}
        onIncrement={() => setCount((currentCount) => currentCount + 1)}
      />

      {submittedData && (
        <section aria-live="polite">
          <h2>Submitted data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </section>
      )}
    </div>
  )
}

export default Register
