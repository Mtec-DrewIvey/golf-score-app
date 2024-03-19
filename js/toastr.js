export function showNotification(message, type = "success") {
	toastr.options = {
		positionClass: "toast-top-right",
		closeButton: true,
		timeOut: 5000, // 5 seconds
	};
	toastr[type](message);
}
