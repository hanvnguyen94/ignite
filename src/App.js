import React from 'react'
// components and pages
import Home from './pages/Home'
import Nav from './components/Nav'
// style and
import GlobalStyles from './components/GlobalStyles'
// routes
import { Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<Route path={['/game/:id', '/']}>
				<Home />
			</Route>
		</div>
	)
}

export default App
