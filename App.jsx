import React from "react"
import getArticles from "./utilities/getArticles"
import Button from "./components/Button"
import Header from "./components/Header"
import Linkbutton from "./components/Linkbutton"
import colorlist from "./data/colorlist"

export default function App() {

	const [currentArticles, setCurrentArticles] = React.useState(getArticles)
    const [currentLink, setCurrentLink] = React.useState(currentArticles[0].link)
	console.log(currentLink)
	const [randomcolor, setRandomColor] = React.useState(getRandomColor())

	function getRandomColor(){
		 return colorlist[Math.floor(Math.random() *colorlist.length)]
	}

	React.useState(()=>{
			setRandomColor(getRandomColor())
	},[currentLink])


	

	const articles = currentArticles.map(article => {
		return (
			<>
			
			<div key={article.id} className="article">
				<a href={article.link} target="_blank">
					{article.title}
				</a>
				<button>Read now</button>
			</div>
		
			</>		
		)			
	})	
	
	return (
		<div className="wrapper">
			<main>
			<Header  randomcolor = {randomcolor}/>
			
					<div className="wiki">
					{	articles}

					</div>
					
				
				<Button
					randomcolor = {randomcolor}
					setCurrentArticles={setCurrentArticles}
				/>
			</main>
		</div>
	)
}
