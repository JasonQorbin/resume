$(function() {
    $(".accordion").accordion({
        collapsible: true,
        active:false
    });
});

function createProgressBarElements(progressBarElement, progress){
	for (let i = 0; i < 10; ++i) {
		let barSegment = document.createElement("span");
		barSegment.classList.add("progress-bar-segment");
		let progressClass = (progress-1) >= i ? "segment-state-on" : "segment-state-off";
		barSegment.classList.add(progressClass);
		if (i == 0) {
			barSegment.classList.add("first-segment");
		}
		
		if (i == 9) {
			barSegment.classList.add("last-segment");
		}
		progressBarElement.appendChild(barSegment);
	}
}

function insertProgressBars() {
	let barContainers = document.querySelectorAll(".progress-bar");
	barContainers.forEach((container) => {
		const progress = parseInt(container.getAttribute("value"));
		createProgressBarElements(container, progress);
	})
}

insertProgressBars();