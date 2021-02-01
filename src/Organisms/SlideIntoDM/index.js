import { useRef, useState } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/database'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import SectionTitle from '../../atoms/SectionTitle'
import { dmTitle } from '../../content/index.json'
import { MOBILE_WIDTH } from '../../constants'

if (!firebase.apps.length) {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		// dev code
		const firebaseConfig = require('../../firebaseConfig.json')
		firebase.initializeApp(firebaseConfig)
	} else {
		// production code
		firebase.initializeApp()
	}
}

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
	@media (max-width: ${MOBILE_WIDTH}) {
		width: 100vw;
		margin-left: -30px;
		padding-left: 30px;
		border-top-right-radius: 0;
		& > input,
		& > textarea,
		& > * {
			margin-right: 30px;
		}
	}
`

const SlideIntoDm = () => {
	const nameRef = useRef('')
	const bodyRef = useRef('')
	const [title, setTitle] = useState(dmTitle)
	const [buttonLoading, setLoading] = useState(false)

	const titleChange = (message) => {
		setTitle(message)
		setTimeout(() => {
			setTitle(dmTitle)
		}, 5 * 1000)
	}

	const onSubmit = async () => {
		const name = nameRef.current.value()
		const body = bodyRef.current.value()
		if (!name || !body) {
			titleChange('Please enter something :(')
			return
		}
		setLoading(true)

		var postListRef = firebase.database().ref('messages')
		const newPostRef = postListRef.push()
		await newPostRef.set({
			name: name,
			body: body,
		})
		setLoading(false)
		nameRef.current.clear()
		bodyRef.current.clear()
		titleChange('Thank you so much :)')
	}

	return (
		<Container>
			<SectionTitle>{title}</SectionTitle>
			<Input placeholder={'Name'} ref={nameRef} />
			<Input multiline placeholder={'Tell me everything'} ref={bodyRef} />
			<Button loading={buttonLoading} text='Whooosh' onClick={onSubmit} />
		</Container>
	)
}

export default SlideIntoDm
