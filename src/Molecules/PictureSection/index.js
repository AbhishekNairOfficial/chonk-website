import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from '../../atoms/Image'

import { MOBILE_WIDTH } from '../../constants'
import { instagramUrl } from '../../content/index.json'

const Container = styled.section`
	flex: 2;
	display: grid;
	grid-gap: 30px;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	@media (max-width: ${MOBILE_WIDTH}) {
		grid-gap: 20px;
		grid-template-columns: auto;
	}
`

const PicturesSection = () => {
	const [images, setListOfImages] = useState([])

	const convertDataToState = (data) => {
		let listOfImages = data?.graphql?.user?.edge_owner_to_timeline_media?.edges
		listOfImages = listOfImages
			.filter((item, i) => i < 4)
			.map((i) => {
				const { display_url, edge_media_to_caption } = i.node
				return {
					image: display_url,
					caption: edge_media_to_caption.edges[0].node.text,
				}
			})
		setListOfImages(listOfImages)
	}

	useEffect(() => {
		;(async () => {
			try {
				const result = await fetch(instagramUrl).then((res) => res.json())
				convertDataToState(result)
			} catch (error) {
				const localListOfImages = await import('../../content/data.json')
				convertDataToState(localListOfImages.default)
			}
		})()
	}, [])

	return (
		<Container>
			{images.map(({ image, caption }, key) => (
				<Image image={image} caption={caption} key={key} />
			))}
		</Container>
	)
}

export default PicturesSection
