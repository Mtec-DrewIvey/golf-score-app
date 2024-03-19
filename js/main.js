import { displayAllCourses } from "./allCourses.js";
import { getCourseInfo, getTeeBox, displayCourseInfo } from "./courseInfo.js";
import { addPlayer, addScore, totalScores } from "./players.js";
import { showNotification } from "./toastr.js";

function handleCourseSelectEventListener() {
	document
		.getElementById("course-select")
		.addEventListener("change", async () => {
			await getCourseInfo();
			await getTeeBox();
		});
}

function handleTeeBoxEventListener() {
	document
		.getElementById("tee-box-select")
		.addEventListener("change", async () => {
			const selectedTeeIndex = document.getElementById("tee-box-select").value;
			await displayCourseInfo(selectedTeeIndex);
		});
}

function hadleAddPlayerEventListener() {
	document.getElementById("addPlayerButton").addEventListener("click", () => {
		const playerNameInput = document.getElementById("playerNameInput");
		const playerName = playerNameInput.value;
		addPlayer(playerName);
		playerNameInput.value = ""; // Clear input field
	});
}

function scoreInputEventListener() {
	// Front Nine Table
	const frontTableBody = document.querySelector("#frontNineTable tbody");
	frontTableBody.addEventListener("input", (e) => {
		handleScoreInput(e, "front");
	});

	// Back Nine Table
	const backTableBody = document.querySelector("#backNineTable tbody");
	backTableBody.addEventListener("input", (e) => {
		handleScoreInput(e, "back");
	});

	// Check for completion of 18th hole
	const hole18Input = document.querySelector(
		'#backNineTable tbody [data-hole="18"]'
	);
	hole18Input.addEventListener("change", function () {
		const score18 = parseInt(this.value);
		if (!isNaN(score18) && score18 >= 0) {
			showNotification(
				"Congratulations! You have completed all 18 holes.",
				"success"
			);
		}
	});
}

function handleScoreInput(e, half) {
	const target = e.target;
	if (target.tagName === "INPUT" && target.dataset.inputType === "score") {
		const playerId = target.closest("[data-player]").dataset.playerId;
		// console.log(`playerId is: ${playerId}`);
		const hole = target.dataset.hole;
		const score = parseInt(target.value);
		addScore(playerId, hole, score);
		totalScores(hole);
	}
}

function handleDisplay() {
	displayAllCourses();
	handleCourseSelectEventListener();
	handleTeeBoxEventListener();
	hadleAddPlayerEventListener();
	scoreInputEventListener();
}

handleDisplay();
