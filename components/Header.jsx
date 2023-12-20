import React from "react"

export default function Header({randomcolor}) {
    console.log(randomcolor)
    return (
        <header style={
            {backgroundColor: randomcolor}
        }>
		    <img src="./images/wikipedia-w.svg" />
			<h1>Weird Wikipedia Articles</h1>
		</header>
    )
}