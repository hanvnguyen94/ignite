import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
// components & style
import Game from '../components/Game'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Home = () => {
	// Fetch games
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadGames())
	}, [dispatch])
	// get that data back from fetch games
	// extracting properties from games state
	const { popular, newGames, upcoming } = useSelector((state) => state.games)

	return (
		<GameList>
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
