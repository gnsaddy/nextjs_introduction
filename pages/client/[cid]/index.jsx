import React from "react"
import { useRouter } from "next/router"

export default function ClientPage() {
	const router = useRouter()
	console.log("id ", router.query.id)
	console.log("cid ", router.query.cid)
	console.log("all ", router.query)

	let loadProjectHandler = () => {
		// load data
		// router.push("/client/abcd/projectA")
		router.push({
			pathname: "/client/[cid]/[pid]",
			query: {
				cid: router.query.cid,
				pid: "projectA",
			},
		})
	}

	return (
		<>
			<div>
				<h1>Client Project Index, {router.query.cid}</h1>
			</div>

			<button onClick={loadProjectHandler}>
				Load project for {router.query.cid}
			</button>
		</>
	)
}
