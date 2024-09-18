import axios from 'axios'
import { FormEvent } from 'react'

export function App() {

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await axios.post(import.meta.env.VITE_API_URL + '/api/submit', {fontSize: event.currentTarget.fontSize.value, details: event.currentTarget.details.value}).then(response => console.log(response.data))
  }

  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center bg-gray-800'>
      <form method="post" className='border w-2/5 flex flex-col gap-y-4 bg-gray-50 rounded-lg px-2 py-5' onSubmit={handleSubmit}>
        <label>
          <p>Font size <span className='text-red-500'>*</span></p>
          <select name="fontSize" required className='w-full'>
            <option value=""></option>
            <option value="Small" >Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <label>
          <p>Please tell us your discomfort</p>
          <textarea name="details" className='w-full border' rows={5} cols={7} placeholder='Type here....'></textarea>
        </label>

        <button type='submit' className='border bg-gray-600 text-white hover:bg-gray-400 hover:text-black'>Submit</button>
      </form>
    </main>
  )
}

