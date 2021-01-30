import styled from 'styled-components'

const Image = styled.img`
	max-width: 100%;
`

const InstagramPost = ({ caption, image }) => {
	return (
		<div>
			<Image src={image} alt='instagram post' />
		</div>
	)
}

export default InstagramPost
