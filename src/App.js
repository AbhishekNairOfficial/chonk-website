import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
const Messages = lazy(() => import('./pages/MessagesFromFriends'))

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Suspense fallback={<Container />}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/messages'>
							<Messages />
						</Route>
						<Route path='/'>
							<HomePage />
						</Route>
						<Redirect to='/' />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</ThemeProvider>
	)
}

export default App
