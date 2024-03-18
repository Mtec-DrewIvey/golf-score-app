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
				break; // Exit loop after populating the first empty cell
			}
		}

		// Loop through existing player rows in backNine table
		for (let i = 0; i < backPlayerRows.length; i++) {
			const playerNameCell =
				backPlayerRows[i].querySelector("[data-player-name]");
			if (!playerNameCell.textContent) {
				playerNameCell.textContent = playerName;
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
		console.log(
			`Score ${score} added for player ${playerName} on hole ${hole}`
		);
	} else {
		console.log(`Player with ID ${playerId} not found.`);
	}
}

// Exporting needed functions/variables
export { players, addPlayer, addScore };
