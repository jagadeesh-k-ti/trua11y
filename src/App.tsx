import axios from 'axios'
import { FormEvent, useState } from 'react'

export function App() {
  const [_, setFormState] = useState({fontSize: '', details: ''})

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setFormState((state) => ({...state, fontSize: event.currentTarget.fontSize.value, details: event.currentTarget.details.value}))

    await axios.post(import.meta.env.VITE_API_URL + '/api/submit', {fontSize: event.currentTarget.fontSize.value, details: event.currentTarget.details.value}).then(response => console.log(response.data))
  }

  return (
    <main>
      <form method="post"  onSubmit={handleSubmit}>
        <label>
          <p>Font size</p>
          <select name="fontSize" required>
            <option value=""></option>
            <option value="Small" >Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <label>
          <p>Please explain your discomfirt</p>
          <textarea name="details" rows={5} cols={7}></textarea>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

