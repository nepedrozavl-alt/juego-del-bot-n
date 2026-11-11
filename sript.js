"use strict";

const btn = document.getElementById("run-btn");
const container = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
let clicks = 0;
let colorIndex = -1;
const colors = ["red", "yellow", "orange", "cyan"];

btn.addEventListener("click", () => {
	clicks += 1;
	scoreDisplay.textContent = `Clicks: ${clicks}`;

	colorIndex = (colorIndex + 1) % colors.length;
	btn.style.backgroundColor = colors[colorIndex];

	const maxLeft = container.clientWidth - btn.offsetWidth;
	const minTop = scoreDisplay.offsetTop + scoreDisplay.offsetHeight + 16;
	const maxTop = container.clientHeight - btn.offsetHeight;
	let left = Math.round(Math.random() * Math.max(0, maxLeft));
	let top = Math.round(minTop + Math.random() * Math.max(0, maxTop - minTop));

	if (left === btn.offsetLeft && top === btn.offsetTop) {
		left = left < maxLeft ? left + 1 : Math.max(0, left - 1);
	}

	btn.style.left = `${left}px`;
	btn.style.top = `${top}px`;
});

