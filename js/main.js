$(function() {
    $(".accordion").accordion({
        collapsible: true,
        active:false,
		activate: changeImage
    });
});

const imageIDs = [
	'model-img-1',
	'model-img-2',
	'model-img-3',
	'model-img-4'
];

function changeImage(event, ui) {
	let oldHeaderID = ui.oldHeader.attr('id');
	if (oldHeaderID == null) { //This would be null when you activate the first panel, i.e. there is no oldHeader and no old image to hide.
		oldHeaderID = Number.NaN;
	} else {
		oldHeaderID = parseInt(oldHeaderID.substring(oldHeaderID.length - 1));
	}

	if (!Number.isNaN(oldHeaderID)) {
		document.querySelector('#' + imageIDs[oldHeaderID - 1]).style.display = 'none'
	}

	let newHeaderID = ui.newHeader.attr('id');
	if (newHeaderID == null) return; // This means the user clicked the same header twice and closed the accordion.

	newHeaderID = parseInt(newHeaderID.substring(newHeaderID.length - 1));


	if (newHeaderID != oldHeaderID) {
		let newImage = document.querySelector('#' + imageIDs[newHeaderID - 1]);
		newImage.style.display = 'inline';
	}
}

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