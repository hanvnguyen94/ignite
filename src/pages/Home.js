import React, { useEffect } from 'react'
import GameDetail from '../components/GameDetail'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
// components & style
import Game from '../components/Game'
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { fadeIn } from '../animation'

import { useLocation } from 'react-router-dom'

const Home = () => {
	// get current location
	const location = useLocation()
	const pathId = location.pathname.split('/')[2]

	// Fetch games
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadGames())
	}, [dispatch])
	// get that data back from fetch games
	// extracting properties from games state
	const { popular, newGames, upcoming, searched } = useSelector(
		(state) => state.games
	)

	return (
		<GameList variants={fadeIn} initial='hidden' animate='show'>
			<AnimateSharedLayout type='crossfade'>
				{/* need a toggle to do transition, in this case pathID on & off */}
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>

				{/* input search box */}
				{/* searched is an empty array => truthy value will render the searched div
				so have to check for array length if it's === 0 (falsy) or not
				*/}
				{searched.length ? (
					<div className='searched'>
						<h2>Searched Games</h2>
						<Games>
							{searched.map((game) => (
								<Game
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
									key={game.id}
								/>
							))}
						</Games>
					</div>
				) : (
					''
				)}

				{/*  Upcoming */}
				<h2>Upcoming Games</h2>
				<Games>
					{upcoming.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
							key={game.id}
						/>
					))}
				</Games>

				{/* Popular */}
				<h2>Popular Games</h2>
				<Games>
					{popular.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
							key={game.id}
						/>
					))}
				</Games>

				{/* New */}
				<h2>New Games</h2>
				<Games>
					{newGames.map((game) => (
						<Game
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
							key={game.id}
						/>
					))}
				</Games>
			</AnimateSharedLayout>
		</GameList>
	)
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`

export default Home
