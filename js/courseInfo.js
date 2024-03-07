// Get course info when selected from the dropdown.
export async function getCourseInfo() {
	const selectedCourseId = document.getElementById("course-select").value;
	const url = `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${selectedCourseId}.json`;
	const response = await fetch(url);
	const data = await response.json();

	return data;
}

export async function getTeeBox() {
	const course = await getCourseInfo();
	const holes = course.holes;
	// console.log(holes);
	const hole1 = holes[0];
	console.log(hole1);
	const teeBoxes = hole1.teeBoxes;

	let teeBoxSelectHtml = `<option value="" selected disabled> Select a Tee Box </option>`;

	teeBoxes.forEach(function (teeBox, index) {
		if (teeBox.teeType === "auto change location") {
			return null;
		} else {
			teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}`;
		}
	});
	document.getElementById("tee-box-select").innerHTML = teeBoxSelectHtml;
}
