function tournamentWinner(competitions, results) {
	let winner = { name: '', score: 0 }
	
	const scores = new Map()
	for (const competitor of competitions) {
		scores.set(competitor[0], 0)
		scores.set(competitor[1], 0)
	}
	
	for (const i in results) {
		const score = results[i]
		let competitor = null
		
		score === 0 ? competitor = competitions[i][1] : competitor = competitions[i][0]

		const points = scores.get(competitor) + 3
		scores.set(competitor, points)
		
		if (winner.name === '' || scores.get(competitor) > winner.score) {
			winner.name = competitor
			winner.score = scores.get(competitor)
		}
	}
	
	return winner.name
}