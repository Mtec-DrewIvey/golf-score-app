import { getAvailableCourses } from "./allCourses.js";
import { getCourseInfo, getTeeBox, getYards } from "./courseInfo.js";

// Using Data from getAvailableCourses, display courses to dropdown. Add event listener on change to get specific course info
async function displayCourses() {
	const courses = await getAvailableCourses();

	let courseOptionsHtml = `<option value="" selected disabled>Select a course</option>`;

	courses.forEach((course) => {
		const courseId = course.id;
		const courseName = course.name;
		courseOptionsHtml += `<option value="${courseId}">${courseName}</option>`;
	});
	document.getElementById("course-select").innerHTML = courseOptionsHtml;

	document.getElementById("course-select").addEventListener("change", () => {
		getCourseInfo();
		getTeeBox();
	});

	document.getElementById("tee-box-select").addEventListener("change", () => {
		getYards();
	});
}

async function displayCourseInfo() {
	const course = await getCourseInfo();
	const holes = course.holes;
	// const holeRow = document.getElementById("holeRow");
	// const cell = document.createElement("td");

	holes.forEach((hole, index) => {
		const holeRow = document.getElementById("holeRow");
		const cell = document.createElement("td");
		cell.classList.add("border");
		cell.classList.add("border-slate-200");
		cell.classList.add("text-xl");
		cell.classList.add("px-4");
		cell.classList.add("py-4");
		const holeNum = index + 1;

		cell.textContent = holeNum;
		holeRow.appendChild(cell);
	});
}

displayCourses();
