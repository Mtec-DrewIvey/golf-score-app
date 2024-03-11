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

// Pass variable as function parameter if reusing. Try to keep out of global namespace.
export async function getTeeBox() {
	const course = await getCourseInfo();
	const holes = course.holes;
	const hole1 = holes[0]; // We only need to grab the teeType once per course so might as well just grab it from the first hole.
	const teeBoxes = hole1.teeBoxes;

	let teeBoxSelectHtml = `<option value="" selected disabled> Select a Tee Box </option>`;

	teeBoxes.forEach(function (teeBox, index) {
		if (teeBox.teeType === "auto change location") {
			return;
		} else {
			teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}</option>`;
		}
	});
	document.getElementById("tee-box-select").innerHTML = teeBoxSelectHtml;
}
