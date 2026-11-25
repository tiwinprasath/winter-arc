import Students from './components/Students'

function App() {
  const name = 'test'
  return (
    <>
      <div className='text-3xl font-bold underline'>
        Hello world!
      </div>
      <h1>This is {name}</h1>
      <Students name={name} age={20} />
    </>
  )
}

export default App
