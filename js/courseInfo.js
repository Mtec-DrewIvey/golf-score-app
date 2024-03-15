// Get course info when selected from the dropdown.
export async function getCourseInfo() {
	const selectElement = document.getElementById("course-select");
	const selectedOption = selectElement.options[selectElement.selectedIndex];
	const courseName = selectedOption.textContent;
	const selectedCourseId = selectElement.value;
	const url = `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${selectedCourseId}.json`;
	const response = await fetch(url);
	const data = await response.json();

	let courseHeaderHtml = `<h2 id="courseName">${courseName}</h2>`;
	document.getElementById("displayCourseAndTeeType").innerHTML =
		courseHeaderHtml;

	return data;
}

// Get teeBox when selected from dropdown (teebox holds all the relevant hole information)
export async function getTeeBox() {
	const course = await getCourseInfo();
	const teeBoxSelect = document.getElementById("tee-box-select");
	const holes = course.holes;
	const hole1 = holes[0]; // We only need to grab the teeType once per course so might as well just grab it from the first hole and return the tee index.
	const teeBoxe1 = hole1.teeBoxes;

	let teeBoxSelectHtml = `<option value="" selected disabled> Select a Tee Box </option>`;

	teeBoxe1.forEach(function (teeBox, index) {
		if (teeBox.teeType === "auto change location") {
			return;
		} else {
			teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}</option>`;
		}
	});
	teeBoxSelect.innerHTML = teeBoxSelectHtml;
}

export async function displayCourseInfo(selectedTeeIndex) {
	const course = await getCourseInfo();
	const holes = course.holes;
	let frontNineYards = 0;
	let backNineYards = 0;
	let frontNinePar = 0;
	let backNinePar = 0;
	let totalYards = 0;
	let totalPar = 0;

	// For each hole, get relevant hole information
	holes.forEach((hole, index) => {
		const holeNum = index + 1;
		const teeBox = hole.teeBoxes[selectedTeeIndex];
		const yards = teeBox.yards;
		const par = teeBox.par;
		const hcp = teeBox.hcp;

		// Populate table with hole info
		const yardsCell = document.getElementById(`hole${holeNum}Yards`);
		yardsCell.textContent = yards;

		const parCell = document.getElementById(`hole${holeNum}Par`);
		parCell.textContent = par;

		const hcpCell = document.getElementById(`hole${holeNum}Hcp`);
		hcpCell.textContent = hcp;

		// Logic to get OUT & IN data
		if (holeNum <= 9) {
			frontNineYards += yards;
			frontNinePar += par;
		} else if (holeNum > 9 && holeNum <= 18) {
			backNineYards += yards;
			backNinePar += par;
		} else {
			return `Invalid Hole Number`;
		}
	});

	// Fill out table with OUT & IN data
	const frontNineYardsCell = document.getElementById("outYards");
	frontNineYardsCell.textContent = frontNineYards;

	const frontNineParCell = document.getElementById("outPar");
	frontNineParCell.textContent = frontNinePar;

	const backNineYardsCell = document.getElementById("inYards");
	backNineYardsCell.textContent = backNineYards;

	const backNineParCell = document.getElementById("inPar");
	backNineParCell.textContent = backNinePar;

	// Get TOTAL (OUT + IN)
	totalYards = frontNineYards + backNineYards;
	totalPar = frontNinePar + backNinePar;

	// Fill out table with Totals
	const totalYardsCell = document.getElementById("totalYards");
	totalYardsCell.textContent = totalYards;

	const totalParCell = document.getElementById("totalPar");
	totalParCell.textContent = totalPar;
}
