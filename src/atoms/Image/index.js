import styled from 'styled-components'

const Image = styled.img`
	max-width: 100%;
`

const Container = styled.div`
	position: relative;
	&:hover > div {
		display: block;
	}
`

const Caption = styled.div`
	position: absolute;
	padding: 20px;
	color: ${(p) => p.theme.palette.white};
	background-color: ${(p) => p.theme.palette.black + 'CC'};
	height: 100%;
	overflow-y: auto;
	font-size: 1em;
	line-height: 1.45em;
	display: none;
`

const InstagramPost = ({ caption, image }) => {
	return (
		<Container>
			<Caption>{caption}</Caption>
			<Image src={image} alt='instagram post' />
		</Container>
	)
}

export default InstagramPost
