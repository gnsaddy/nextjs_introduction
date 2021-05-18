import React from "react"
import Link from "next/link"

export default function ClientIndex() {
	const clients = [
		{
			id: "max",
			name: "Max",
		},
		{
			id: "addy",
			name: "aditya",
		},
		{
			id: "amit",
			name: "amit",
		},
	]

	return (
		<>
			<div>
				<h1>Client Page</h1>
			</div>
			<ul>
				{clients.map((client) => {
					return (
						<li key={client.id}>
							{/* href={`/client/${client.id}`} */}
							<Link
								href={{
									pathname: "/client/[id]",
									query: { id: client.id },
								}}
							>
								{client.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
}
