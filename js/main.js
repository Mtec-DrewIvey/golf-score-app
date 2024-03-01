// Get the available courses from the API and Return Data
async function getAvailableCourses() {
	const url =
		"https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json";
	const response = await fetch(url);
	const data = await response.json();
	return data;
}
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

	document
		.getElementById("course-select")
		.addEventListener("change", getCourseInfo);
}
// Get course info when selected from the dropdown.
async function getCourseInfo() {
	const selectedCourseId = document.getElementById("course-select").value;
	console.log(`Selected Course ID: ${selectedCourseId}`);
	const url = `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${selectedCourseId}.json`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
}

displayCourses();
