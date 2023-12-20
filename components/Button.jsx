import React from "react"
import getArticles from "../utilities/getArticles"

export default function Button({setCurrentArticles, randomcolor}) {
    return (
        <div className="button-container" style={
		
			{backgroundColor: randomcolor}
		}>
			<button onClick={() => setCurrentArticles(getArticles)}>
				<span className="button-emoji">😲</span>
				<span className="now">Now!</span>
				<span className="get">Get New Articles</span>
			</button>
		</div>
        
    )

}