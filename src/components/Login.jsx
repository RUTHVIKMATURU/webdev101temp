import { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

// Very simple Login component using Firebase Auth
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      // signInWithEmailAndPassword returns userCredential on success
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setMessage(`Logged in as ${userCredential.user.email}`)
      // In a real app, you'd redirect or update UI to show the authenticated state
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-gray-900 p-6 rounded">
        <h2 className="text-2xl mb-4">Log in</h2>

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
            placeholder="Your password"
          />
        </label>

        <button className="w-full bg-red-600 py-2 rounded" type="submit">Sign in</button>

        {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
      </form>
    </div>
  )
}

/*
  Notes for beginners:
  - `signInWithEmailAndPassword(auth, email, password)` tries to log in a user.
  - On success you receive `userCredential` which contains the logged-in user info.
  - Always handle errors in a user-friendly way in production.
*/
