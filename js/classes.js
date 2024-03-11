// Holding class for player in separate file for the time being.

export class Player {
	constructor(name, id, scores = []) {
		this.name = name;
		this.id = id;
		this.scores = scores;
	}
}
