import { getAvailableCourses } from "./allCourses.js";
import { getCourseInfo, getTeeBox } from "./courseInfo.js";

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
}

displayCourses();
