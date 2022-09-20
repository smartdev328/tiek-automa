import { useState } from 'preact/hooks'

export default function ContactForm({ appUri }) {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const sendContactEmail = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const firstName = event.target.firstname.value
    const lastName = event.target.lastname.value
    const message = event.target.message.value
    await fetch(`${appUri}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        message,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setMessage('Thank you for contacting us. We will get back to you soon.')
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <>
      <div className='w-full max-w-xl mx-auto mb-8'>
        {error && (
          <div
            class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
            role='alert'
          >
            <strong class='font-bold'>{error}</strong>
          </div>
        )}
        {message && (
          <div
            class='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'
            role='alert'
          >
            <strong class='font-bold'>{message}</strong>
          </div>
        )}
      </div>
      {!message && (
        <form className='w-full max-w-xl mx-auto' onSubmit={sendContactEmail}>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-first-name'
              >
                First Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-first-name'
                name='firstname'
                type='text'
                placeholder='Jane'
                required
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-last-name'
              >
                Last Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-last-name'
                name='lastname'
                type='text'
                placeholder='Doe'
                required
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='email'
              >
                E-mail
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='email'
                name='email'
                type='email'
                required
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                className=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                id='message'
                name='message'
              ></textarea>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-12'>
            <div className='w-full px-3 flex items-center'>
              <input
                id='default-checkbox'
                type='checkbox'
                required
                className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-700'>
                I am not a Robot
              </label>
            </div>
          </div>

          <div className='w-full'>
            <button
              className='shadow bg-blue-400 hover:bg-blue-400 hover:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      )}
    </>
  )
}
