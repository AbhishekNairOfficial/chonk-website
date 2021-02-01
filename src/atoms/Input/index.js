import { forwardRef, useImperativeHandle, useState } from 'react'
import styled, { css } from 'styled-components'

const commonStyles = css`
	border: 0;
	border-radius: 4px;
	background-color: ${(p) => p.theme.palette.white};
	padding: 15px 20px;
	&:focus {
		outline: 0;
	}
	font-weight: bold;
	font-family: ${(p) => p.theme.fonts.secondary};
	font-size: 1.2em;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: ${(p) => p.theme.palette.black};
`

const StyledInput = styled.input`
	height: 60px;
	${commonStyles}
`

const TextArea = styled.textarea`
	${commonStyles}
`

const Input = (props, ref) => {
	const { multiline } = props

	const [value, setValue] = useState('')

	const onChange = (e) => {
		setValue(e.target.value)
	}

	useImperativeHandle(ref, () => ({
		clear: () => {
			setValue('')
		},
		value: () => {
			return value
		},
	}))

	return multiline ? (
		<TextArea ref={ref} value={value} onChange={onChange} {...props} rows={4} />
	) : (
		<StyledInput ref={ref} value={value} onChange={onChange} {...props} />
	)
}

export default forwardRef(Input)
