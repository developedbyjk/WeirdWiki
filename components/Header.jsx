import React from "react"

export default function Header({randomcolor}) {
    console.log(randomcolor)
    return (
        <header style={
            {backgroundColor: randomcolor}
        }>
		    <img src="https://i.postimg.cc/vHxtG08L/wikipedia-w.png" />
			<h1>Weird Wikipedia Articles</h1>
		</header>
    )
}