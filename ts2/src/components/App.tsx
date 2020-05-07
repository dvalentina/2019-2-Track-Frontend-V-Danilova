import React, { useState } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import D3WordCloud from './D3WordCloud'
import Input from './Input'
import '../styles/App.css'
import logo from '../logo.svg'

function App() {
	const text: string = `Используя внешнюю библиотеку d3, создать модуль с визуализацией данных.

	Перейти в корень своего приложения
	Создать проект npx create-react-app ts2 --template typescript
	Подключить библиотеку d3.js
	Подключить тайпинги @types/d3
	Разработать модуль с визуализацией
	Убедиться, что npm start выполняется без ошибок
	В трэвисе перед установкой сделать переход в новое приложение (как было с вебкомпонентами)
	Данные и визуализация могут быть выбраны на ваш вкус.
	
	Код должен быть написан на TypeScript, d3 должна быть подключена с тайпингами.`

	const [value, setValue] = useState(text);
  
	function handleChange(event: any) {
		setValue(event.target.value);
	}

	return (
		<HashRouter>
			<Route exact path='/'>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.tsx</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						<Link to='/wordcloud' className='App-link'>
							Word Cloud
						</Link>
					</header>
				</div>
			</Route>
			<Route path='/wordcloud'>
				<Input
					handleChange={handleChange}
					value={value}
				/>
				<D3WordCloud inputText={value} />
			</Route>
		</HashRouter>
	)
}

export default App;
