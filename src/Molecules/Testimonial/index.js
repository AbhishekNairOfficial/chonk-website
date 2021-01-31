import styled from 'styled-components'

const Container = styled.article`
	padding: 25px;
	padding-right: 8vw;
	border-radius: 6px;
	white-space: pre-wrap;
	-webkit-backdrop-filter: blur(15px);
	backdrop-filter: blur(15px);
	box-shadow: 0 5px 24px 0 #2625262e;
	border: solid 1px rgba(242, 242, 240, 0.5);
	background-image: linear-gradient(
		124deg,
		rgba(255, 255, 255, 0.4),
		rgba(255, 255, 255, 0.1) 70%
	);
`

const NameText = styled.div`
	margin-top: 30px;
	font-size: 1.4em;
	line-height: 1.33;
	text-align: left;
	color: ${(p) => p.theme.palette.black};
`

const BodyText = styled.div`
	font-size: 1.2em;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: ${(p) => p.theme.palette.black};
`

const Testmonial = ({ data }) => {
	const { name, body } = data
	return (
		<Container>
			<BodyText>{body}</BodyText>
			<NameText>{name}</NameText>
		</Container>
	)
}

export default Testmonial
