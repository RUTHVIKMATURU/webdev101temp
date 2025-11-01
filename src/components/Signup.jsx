import { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

// Very simple Signup component using Firebase Auth
export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      // createUserWithEmailAndPassword returns a userCredential on success
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      setMessage(`Signed up as ${userCredential.user.email}`)
      // In a real app you might redirect or clear the form here
    } catch (err) {
      // Show a plain message for beginners — normally you'd handle different error codes
      setMessage(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-gray-900 p-6 rounded">
        <h2 className="text-2xl mb-4">Sign up</h2>

        <label className="block mb-2">
          <span className="text-sm">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded px-3 py-2 bg-black text-white border"
            placeholder="you@example.com"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded px-3 py-2 bg-black text-white border"
            placeholder="Choose a password"
          />
        </label>

        <button className="w-full bg-red-600 py-2 rounded" type="submit">Create account</button>

        {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
      </form>
    </div>
  )
}

/*
  Notes for beginners:
  - We import `auth` from `src/firebase.js` and `createUserWithEmailAndPassword` from Firebase.
  - The form collects email and password, and on submit we call `createUserWithEmailAndPassword(auth, email, password)`.
  - On success Firebase creates a new user and returns a `userCredential` object that contains the new user.
  - In production you should validate password strength and show nicer errors. This example keeps it simple.
*/
