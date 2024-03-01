// export async function getAvailableCourses() {
// 	const baseUrl =
// 		"https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json";
// 	const response = await fetch(baseUrl);
// 	const data = await response.json();
// 	return data;
// }

// export async function displayCourses() {
// 	const courses = await getAvailableCourses();

// 	let courseOptionsHtml = "";

// 	courses.forEach((course) => {
// 		const courseId = course.id;
// 		const courseName = course.name;
// 		courseOptionsHtml += `<option value="${courseId}">${courseName}</option>`;
// 	});
// 	document.getElementById("course-select").innerHTML = courseOptionsHtml;
// }
