import { useRef, useState } from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import SectionTitle from '../../atoms/SectionTitle'
import { dmTitle } from '../../content/index.json'

const Container = styled.div`
	background-color: ${(p) => p.theme.palette.secondary};
	flex: 1;
	padding: 50px 0px;
	padding-left: 10vw;
	margin-left: -10vw;
	display: flex;
	flex-direction: column;
	border-top-right-radius: 50px;
	& > input,
	& > textarea,
	& > * {
		margin: 15px 0;
		margin-right: 50px;
	}
`

const SlideIntoDm = () => {
	const nameRef = useRef('')
	const bodyRef = useRef('')
	const [title, setTitle] = useState(dmTitle)

	const onSubmit = (e) => {
		// const name = nameRef.current.value
		// const body = bodyRef.current.value
		setTitle('Thank you so much :)')
		setTimeout(() => {
			setTitle(dmTitle)
		}, 10 * 1000)
	}

	return (
		<Container>
			<SectionTitle>{title}</SectionTitle>
			<Input placeholder={'Name'} ref={nameRef} />
			<Input multiline placeholder={'Tell me everything'} ref={bodyRef} />
			<Button text='Whooosh' onClick={onSubmit} />
		</Container>
	)
}

export default SlideIntoDm
