// Get All Courses From API
async function getAvailableCourses() {
	const url =
		"https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json";
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

// Using Data from getAvailableCourses, display courses to dropdown. Add event listener on change to get specific course info
export async function displayAllCourses() {
	const courses = await getAvailableCourses();

	let courseOptionsHtml = `<option value="" selected disabled>Select a course</option>`;

	courses.forEach((course) => {
		const courseId = course.id;
		const courseName = course.name;
		courseOptionsHtml += `<option value="${courseId}">${courseName}</option>`;
	});
	document.getElementById("course-select").innerHTML = courseOptionsHtml;
}
