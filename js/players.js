// Let's handle adding players

class Player {
	constructor(name, id = getNextId(), scores = []) {
		this.name = name;
		this.id = id;
		this.scores = scores;
	}
}

// Create global array to store created Players so we can reference them later
let players = [];

function addPlayer(playerName) {
	if (playerName.trim() !== "" && players.length < 4) {
		const player = new Player(playerName.trim());
		players.push(player);
		const frontPlayerRows = document.querySelectorAll(
			"#frontNine [data-player]"
		);
		const backPlayerRows = document.querySelectorAll("#backNine [data-player]");

		// Loop through existing player rows in frontNine table
		for (let i = 0; i < frontPlayerRows.length; i++) {
			const playerNameCell =
				frontPlayerRows[i].querySelector("[data-player-name]");
			if (!playerNameCell.textContent) {
				playerNameCell.textContent = playerName;
				frontPlayerRows[i].dataset.playerId = player.id;
				break; // Exit loop after populating the first empty cell
			}
		}

		// Loop through existing player rows in backNine table
		for (let i = 0; i < backPlayerRows.length; i++) {
			const playerNameCell =
				backPlayerRows[i].querySelector("[data-player-name]");
			if (!playerNameCell.textContent) {
				playerNameCell.textContent = playerName;
				backPlayerRows[i].dataset.playerId = player.id;
				break; // Exit loop after populating the first empty cell
			}
		}

		return true;
	}
	// Alerting users if invalid name entered or maximum player count reached
	return alert(
		"Unable to add player. 4 Player Maximum Reached or Invalid Name Entered"
	);
}

function getNextId() {
	const id = Date.now();
	return id.toString();
}
// add score to player
function addScore(playerId, hole, score) {
	const player = players.find((player) => player.id === playerId);
	if (player) {
		player.scores[hole - 1] = score;
		// console.log(
		// 	`Score ${score} added for player ${player.name} on hole ${hole}`
		// );
	} else {
		console.log(`Player with player ID: ${playerId} not found.`);
	}
}

function totalScores(hole) {
	players.forEach((player) => {
		const playerId = player.id;
		const scores = player.scores; // Retrieve player's scores

		let outTotal = 0;
		let inTotal = 0;
		let roundTotal = 0;

		scores.forEach((score, index) => {
			roundTotal += score; // Always add to roundTotal

			if (index >= 9 && index < 18) {
				inTotal += score; // Back nine
			}
			if (index < hole) {
				outTotal += score; // Front nine
			}
		});

		const outCell = document.querySelector(
			`tr[data-player-id="${playerId}"] [data-out-total]`
		);
		const inCell = document.querySelector(
			`tr[data-player-id="${playerId}"] [data-in-total]`
		);
		const roundTotalCell = document.querySelector(
			`tr[data-player-id="${playerId}"] [data-round-total]`
		);

		if (outCell && inCell && roundTotalCell) {
			if (hole <= 9) {
				outCell.textContent = outTotal;
			} else {
				inCell.textContent = inTotal;
			}
			roundTotalCell.textContent = roundTotal;
		}
	});
}

// Exporting needed functions/variables
export { players, addPlayer, addScore, totalScores };
