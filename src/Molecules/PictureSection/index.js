import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from '../../atoms/Image'

import { instagramUrl } from '../../content/index.json'

const Container = styled.section`
	flex: 2;
	display: grid;
	grid-gap: 30px;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
`

const PicturesSection = () => {
	const [images, setListOfImages] = useState([])

	useEffect(() => {
		fetch(instagramUrl)
			.then((res) => res.json())
			.then((result) => {
				let listOfImages =
					result?.graphql?.user?.edge_owner_to_timeline_media?.edges
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
			})
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