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
		color: "#ccccff",
	},
	{
		name: "Dutch Language for Beginners",
		note: "P319",
		day: 1,
		start: 1050,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Základy prozodie",
		note: "P016",
		day: 1,
		start: 750,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Osvojování řeči",
		note: "P016",
		day: 2,
		start: 750,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Statistické metody ve&nbsp;fonetickém výzkumu&nbsp;I",
		note: "P016",
		day: 0,
		start: 850,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Standard v&nbsp;řečové komunikaci",
		note: "P016",
		day: 0,
		start: 650,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Historická lingvistika",
		note: "C507",
		day: 1,
		start: 550,
		length: 145,
		color: "#ffcccc",
	},

	{
		name: "Grammaticalization",
		note: "C507",
		day: 3,
		start: 650,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Aphasia: an introduction from a linguistic perspective",
		note: "C507",
		day: 4,
		start: 550,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Nástroje a metody v&nbsp;lingvistickém výzkumu",
		note: "C507",
		day: 3,
		start: 750,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Teorie jazykové změny",
		note: "C136",
		day: 0,
		start: 750,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Francouzština B2.2",
		note: "CM203",
		day: 1,
		start: 850,
		length: 90,
		color: "#ffcccc",
	},

	{
		name: "Volejbal",
		note: "SCUK004",
		day: 3,
		start: 1230,
		length: 75,
		color: "#ffcccc",
	},

	{
		name: "Posilovna",
		note: "SCUK011",
		day: 3,
		start: 1155,
		length: 75,
		color: "#ffcccc",
	},

	{
		name: "Úvod do pedagogiky pro učitele",
		note: "C244",
		day: 3,
		start: 950,
		length: 90,
		color: "#ffcccc",
	},
];

for (let i = settings.startHour; i < settings.endHour; i++) {
	$("#times-container").append("<div>" + i + ":00</div>");
}

for (let i = 0; i < events.length; i++) {
	$("#events-" + events[i].day).append(
		"<div class='event' id='event-" +
			i +
			"' style='background-color: " +
			events[i].color +
			";'><h5>" +
			events[i].name +
			"</h5>" +
			events[i].note +
			"</div>"
	);
	$("#event-" + i).css("left", ((events[i].start - settings.startHour * 60) / minutes) * 100 + "%");
	$("#event-" + i).css("width", (events[i].length / minutes) * 100 + "%");
}

for (let i = 0; i < events.length; i++) {
	$("#event-manager").append(
		'<div class="event-item card" id="event-item-' +
			i +
			'">\
			<h4>' +
			events[i].name +
			'</h4>\
			<input type="text" name="event-name" class="event-name" placeholder="Event Name" value="' +
			events[i].name +
			'" />\
			<input type="text" name="event-note" class="event-note" placeholder="Event Note" value="' +
			events[i].note +
			'" />\
			<input type="color" name="event-color" class="event-color" value="' +
			events[i].color +
			'" />\
			<input type="time" name="event-start" class="event-start" value=' +
			("00" + Math.floor(events[i].start / 60)).slice(-2) + // pad with leading zeroes
			":" +
			("00" + (events[i].start % 60)).slice(-2) +
			' />\
			<input type="time" name="event-end" class="event-end" value="' +
			("00" + Math.floor((events[i].start + events[i].length) / 60)).slice(-2) +
			":" +
			("00" + ((events[i].start + events[i].length) % 60)).slice(-2) +
			'"/>\
			<select name="event-day" class="event-day">\
				<option value="0">Monday</option>\
				<option value="1">Tuesday</option>\
				<option value="2">Wednesday</option>\
				<option value="3">Thursday</option>\
				<option value="4">Friday</option>\
				<option value="5">Saturday</option>\
				<option value="6">Sunday</option>\
			</select>\
			<input type="button" name="duplicate-event" class="duplicate-event" value="Duplicate Event" />\
			<input type="button" name="delete-event" class="delete-event" value="Delete Event" />\
		</div>'
	);
	$("#event-item-" + i)
		.children("select")
		.val(events[i].day)
		.change();
}

$("#export-btn").click(function () {
	html2canvas(document.getElementById("timetable-wrapper"), { scale: 8 }).then(function (canvas) {
		document.getElementById("output").appendChild(canvas);
	});
});
