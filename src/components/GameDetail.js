import React from 'react'
// style
import styled from 'styled-components'
import { motion } from 'framer-motion'
// redux
import { useSelector } from 'react-redux'

const GameDetail = () => {
	// data
	const { screen, game, isLoading } = useSelector((state) => state.detail)
	return (
		<>
			{!isLoading && (
				<CardShadow>
					<Detail>
						<Stats>
							<div className='rating'>
								<h3>{game.name}</h3>
								<p>Rating: {game.rating}</p>
							</div>
							<Info>
								<h3>Platform</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<h3 key={data.platform.id}>{data.platform.name}</h3>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img src={game.background_image} alt={game.background_image} />
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className='gallery'>
							{screen.results.map((screen) => (
								<img src={screen.image} alt={screen.image} key={screen.id} />
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	)
}

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: #fff;
	}
`

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: #fff;
	position: absolute;
	left: 10%;
	color: #000000;
	img {
		width: 100%;
	}
`

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Info = styled(motion.div)`
	text-align: center;
`

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`

const Description = styled(motion.div)`
	margin: 5rem 10rem;
`

export default GameDetail
