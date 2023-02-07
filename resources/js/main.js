// array of events

const settings = {
	startHour: 9,
	endHour: 22,
	showWeekends: true,
};

const minutes = 60 * (settings.endHour - settings.startHour);

const events = [
	{
		name: "Gender a jazyk v&nbsp;minulosti a současnosti",
		note: "1.10",
		day: 1,
		start: 950,
		length: 90,
	},
	{
		name: "Dutch Language for Beginners",
		note: "P319",
		day: 1,
		start: 1050,
		length: 90,
	},

	{
		name: "Základy prozodie",
		note: "P016",
		day: 1,
		start: 750,
		length: 90,
	},

	{
		name: "Osvojování řeči",
		note: "P016",
		day: 2,
		start: 750,
		length: 90,
	},

	{
		name: "Statistické metody ve&nbsp;fonetickém výzkumu&nbsp;I",
		note: "P016",
		day: 0,
		start: 850,
		length: 90,
	},

	{
		name: "Standard v&nbsp;řečové komunikaci",
		note: "P016",
		day: 0,
		start: 650,
		length: 90,
	},

	{
		name: "Historická lingvistika",
		note: "C507",
		day: 1,
		start: 550,
		length: 145,
	},

	{
		name: "Grammaticalization",
		note: "C507",
		day: 3,
		start: 650,
		length: 90,
	},

	{
		name: "Aphasia: an introduction from a linguistic perspective",
		note: "C507",
		day: 4,
		start: 550,
		length: 90,
	},

	{
		name: "Nástroje a metody v&nbsp;lingvistickém výzkumu",
		note: "C507",
		day: 3,
		start: 750,
		length: 90,
	},

	{
		name: "Teorie jazykové změny",
		note: "C136",
		day: 0,
		start: 750,
		length: 90,
	},

	{
		name: "Francouzština B2.2",
		note: "CM203",
		day: 1,
		start: 850,
		length: 90,
	},

	{
		name: "Volejbal",
		note: "SCUK004",
		day: 3,
		start: 1230,
		length: 75,
	},

	{
		name: "Posilovna",
		note: "SCUK011",
		day: 3,
		start: 1155,
		length: 75,
	},

	{
		name: "Úvod do pedagogiky pro učitele",
		note: "C244",
		day: 3,
		start: 950,
		length: 90,
	},
];

for (let i = settings.startHour; i < settings.endHour; i++) {
	$("#times-container").append("<div>" + i + ":00</div>");
}

for (let i = 0; i < events.length; i++) {
	$("#events-" + events[i].day).append("<div class='event' id='event-" + i + "'><h5>" + events[i].name + "</h5>" + events[i].note + "</div>");
	$("#event-" + i).css("left", ((events[i].start - settings.startHour * 60) / minutes) * 100 + "%");
	$("#event-" + i).css("width", (events[i].length / minutes) * 100 + "%");
}

html2canvas(document.getElementById("timetable-wrapper"), { scale: 8 }).then(function (canvas) {
	document.getElementById("output").appendChild(canvas);
});
