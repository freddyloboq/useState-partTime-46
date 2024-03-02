import { useState } from 'react'
import './App.css'

function App() {
  const [dataForm, setDataform] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setDataform({ ...dataForm, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          name="name"
          placeholder="Your name here"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type="password"
          name="password"
          placeholder="Your password here"
        />
        <button type="submit">Send</button>
      </form>

      <p>{dataForm.name}</p>
      <p>{ dataForm.password}</p>
    </>
  );
}

export default App
