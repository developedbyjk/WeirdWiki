import React from "react"
import getArticles from "./utilities/getArticles"

import Header from "./components/Header"

import colorlist from "./data/colorlist"

export default function App() {

	const [currentArticles, setCurrentArticles] = React.useState(getArticles)
	

	const [randomcolor, setRandomColor] = React.useState(getRandomColor())


	function getRandomColor(){
		 return colorlist[Math.floor(Math.random() *colorlist.length)]
	}



	

	const articles = currentArticles.map(article => {
		return (
			<>
			
			<div key={article.id} className="article">
				<span id="emoji">{article.emoji}</span>
			
					<h2>
					{article.title}
					</h2>
			
				<div id="readbtn" 
				style={
					{
						
						border: "2px solid " + randomcolor
					}
				}
				>
					<a 
					style={
						{
							color: randomcolor,
						}
					}
					href={article.link} target="_blank">
					Read now
					</a>
					</div>

			</div>
		
			</>		
		)			
	})	


	function changeColorAndArticle(){
		setCurrentArticles(getArticles);
		setRandomColor(getRandomColor());
	}
	
	return (
		<div className="wrapper">
			<main>
			<Header  randomcolor = {randomcolor}/>
			
					<div className="wiki">
					{	articles}

					</div>
					
			

				<div className="button-container" style={
					{backgroundColor: randomcolor}
				} >
					<button onClick={() => changeColorAndArticle()}>
						<span className="button-emoji">😲</span>
						<span className="now">Now!</span>
						<span className="get">Reveal New Article</span>
						
					</button>
				</div>

			</main>
		</div>
	)
}
