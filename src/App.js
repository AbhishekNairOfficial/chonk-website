import { createGlobalStyle, ThemeProvider } from 'styled-components'

// import HomePage from './pages/Home'
import theme from './themes'
import './App.css'
import { lazy, Suspense } from 'react'
import Container from './atoms/Loader'

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

const HomePage = lazy(() => import('./pages/Home'))

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Suspense fallback={<Container />}>
				<HomePage />
			</Suspense>
		</ThemeProvider>
	)
}

export default App
