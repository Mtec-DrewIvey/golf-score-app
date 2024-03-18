import { displayAllCourses } from "./allCourses.js";
import { getCourseInfo, getTeeBox, displayCourseInfo } from "./courseInfo.js";
import { players, addPlayer, addScore } from "./players.js";

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
		console.log(playerName);
		addPlayer(playerName);
		playerNameInput.value = "";
	});
}

function handleDisplay() {
	displayAllCourses();
	handleCourseSelectEventListener();
	handleTeeBoxEventListener();
	hadleAddPlayerEventListener();
}

handleDisplay();
