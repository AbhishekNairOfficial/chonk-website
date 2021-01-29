import { createGlobalStyle, ThemeProvider } from 'styled-components'

import HomePage from './pages/Home'
import theme from './themes'
import './App.css'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
  *::-webkit-scrollbar {
    width: 0 !important
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.palette.white};
		font-family: 'Quicksand', sans-serif;
  }
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<HomePage />
		</ThemeProvider>
	)
}

export default App
