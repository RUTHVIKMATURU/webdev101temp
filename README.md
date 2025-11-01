# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Added: Very simple Login & Signup using Firebase (beginner-friendly)

I added a minimal Firebase Authentication example with two new pages (Sign up and Log in). This is intentionally simple so beginners can follow along and extend it.

Summary of changes (exact files changed/added):

- package.json — added the `firebase` dependency.
- src/firebase.js — NEW file. Initializes Firebase and exports `auth`.
- src/components/Signup.jsx — NEW file. Simple sign-up form using `createUserWithEmailAndPassword`.
- src/components/Login.jsx — NEW file. Simple login form using `signInWithEmailAndPassword`.
- src/components/Home.jsx — updated: added links to `/login` and `/signup` and registered routes for these pages.

Quick setup (what you must do locally):

1) Install the new dependency (from your project root):

```powershell
npm install
# or just install firebase if you prefer
npm install firebase
```

2) Create a Firebase web app at https://console.firebase.google.com and copy the config.
3) Open `src/firebase.js` and replace the placeholders in `firebaseConfig` with your real values.

What I added (full file contents and explanations):

1) `src/firebase.js` (new)

```js
// Firebase initialization file
// -----------------------------
// 1) Create a Firebase project at https://console.firebase.google.com
// 2) In Project Settings -> Your apps -> Add a Web app and copy the config below
// 3) Replace the placeholder values in `firebaseConfig` with your values
// 4) This file exports `auth` which is used by the Login/Signup components

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Replace the following config object with your Firebase app config
// You can find these values in the Firebase console after creating a Web app.
const firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_AUTH_DOMAIN",
	projectId: "YOUR_PROJECT_ID",
	storageBucket: "YOUR_STORAGE_BUCKET",
	messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
	appId: "YOUR_APP_ID"
}

// Initialize Firebase app and export the auth instance
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app

/*
What this file does (for beginners):
- We import the Firebase functions we need from the Firebase SDK.
- We create a config object that tells Firebase which project to connect to.
- We call initializeApp(config) to create a Firebase app instance.
- We call getAuth(app) and export it — this is what the rest of the app uses to sign up and log in users.
*/
```

2) `src/components/Signup.jsx` (new)

```jsx
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
```

3) `src/components/Login.jsx` (new)

```jsx
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
```

4) `src/components/Home.jsx` (updated)

I added imports and routes for `/login` and `/signup`, and a small nav area linking to those pages. The change location is inside the existing `Routes` block for the `/` route where the navigation bar is rendered.

Snippet changed in `src/components/Home.jsx` (the nav area):

```jsx
// inside the homepage element's nav
<nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-70 fixed top-0 left-0 w-full z-10">
	<h1 className="text-3xl font-bold text-red-600">NETFLIX</h1>
	{/* Simple navigation links to Login and Signup pages */}
	<div className="space-x-4">
		<Link to="/login" className="text-sm text-gray-300 hover:underline">Log in</Link>
		<Link to="/signup" className="text-sm text-gray-300 hover:underline">Sign up</Link>
	</div>
</nav>

// and near the other routes
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
```

5) `package.json` (snippet)

I added the `firebase` dependency so you can install it via `npm install`.

```json
	"dependencies": {
		"react": "^19.1.1",
		"react-dom": "^19.1.1",
		"firebase": "^9.22.1",
		"react-icons": "^5.5.0",
		"react-router-dom": "^7.9.5"
	}
```

How to try it quickly:

1. Install dependencies: `npm install`
2. Fill in your Firebase config in `src/firebase.js` (see step 2 above).
3. Run the dev server: `npm run dev` (Vite will start)
4. Open `http://localhost:5173` (or the port Vite shows) and use the "Log in" / "Sign up" links in the top-right of the page.

Notes & next steps (suggestions for beginners):

- Currently the forms only show a plain success/error message. You can extend them to redirect after login, or to store user data in Firestore.
- For production, consider protecting routes (private routes) and showing the user's state in the UI.
- Validate passwords (min length) and show nicer error messages based on Firebase error codes.

If you'd like, I can also:
- Add a small authenticated area that reads the current user and shows "You're logged in as ...".
- Add route protection (redirect to /login when not authenticated).
