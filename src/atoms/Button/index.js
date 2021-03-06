import styled from 'styled-components'

const StyledButton = styled.button`
	height: 70px;
	background-color: ${(p) => p.theme.palette.tertiary};
	border: 0;
	border-radius: 10px;
	&:focus {
		outline: 0;
	}
	font-family: ${(p) => p.theme.fonts.secondary};
	font-size: 1.2em;
	line-height: 1.25;
	letter-spacing: 0.48px;
	text-align: center;
	color: ${(p) => p.theme.palette.white};
	text-transform: uppercase;
	cursor: pointer;
	opacity: ${(p) => p.loading && 0.3};
	pointer-events: ${(p) => p.loading && 'none'};
`

const Button = (props) => {
	const { onClick, text, loading } = props

	return (
		<StyledButton loading={loading} onClick={onClick} type='button' {...props}>
			{loading ? '...' : text}
		</StyledButton>
	)
}

export default Button
