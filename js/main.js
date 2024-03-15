import { getAvailableCourses } from "./allCourses.js";
import { getCourseInfo, getTeeBox, displayCourseInfo } from "./courseInfo.js";

// Using Data from getAvailableCourses, display courses to dropdown. Add event listener on change to get specific course info
async function displayAllCourses() {
	const courses = await getAvailableCourses();

	let courseOptionsHtml = `<option value="" selected disabled>Select a course</option>`;

	courses.forEach((course) => {
		const courseId = course.id;
		const courseName = course.name;
		courseOptionsHtml += `<option value="${courseId}">${courseName}</option>`;
	});
	document.getElementById("course-select").innerHTML = courseOptionsHtml;

	document
		.getElementById("course-select")
		.addEventListener("change", async () => {
			await getCourseInfo();
			await getTeeBox();
		});

	document
		.getElementById("tee-box-select")
		.addEventListener("change", async () => {
			const selectedTeeIndex = document.getElementById("tee-box-select").value;
			await displayCourseInfo(selectedTeeIndex);
		});
}

displayAllCourses();
