// media resize
// default logo
import logo from './img/logo.svg'

export const smallImage = (imagePath, size) => {
	if (!imagePath) return null

	const image = imagePath.match(/media\/screenshots/)
		? imagePath.replace(
				'media/screenshots',
				`media/resize/${size}/-/screenshots`
		  )
		: imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`)

	return image
}
