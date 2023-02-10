const settings = {
	startHour: 9,
	endHour: 22,
	showWeekends: false,
	twentyFourHour: true,
	aspectRatio: 16 / 9,
	showTimes: false,
};

const minutes = 60 * (settings.endHour - settings.startHour);

const events = [
	{
		name: "Gender a jazyk v&nbsp;minulosti a současnosti",
		note: "1.10",
		day: 1,
		start: 950,
		length: 90,
		color: "#FFFAE3",
	},
	{
		name: "Dutch Language for Beginners",
		note: "P319",
		day: 1,
		start: 1050,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Základy prozodie",
		note: "P016",
		day: 1,
		start: 750,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Osvojování řeči",
		note: "P016",
		day: 2,
		start: 750,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Statistické metody ve&nbsp;fonetickém výzkumu&nbsp;I",
		note: "P016",
		day: 0,
		start: 850,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Standard v&nbsp;řečové komunikaci",
		note: "P016",
		day: 0,
		start: 650,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Historická lingvistika",
		note: "C507",
		day: 1,
		start: 550,
		length: 145,
		color: "#FFFAE3",
	},

	{
		name: "Grammaticalization",
		note: "C507",
		day: 3,
		start: 650,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Aphasia: an introduction from a linguistic perspective",
		note: "C507",
		day: 3,
		start: 550,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Nástroje a metody v&nbsp;lingvistickém výzkumu",
		note: "C507",
		day: 3,
		start: 750,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Teorie jazykové změny",
		note: "C136",
		day: 0,
		start: 750,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Francouzština B2.2",
		note: "CM203",
		day: 1,
		start: 850,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Volejbal",
		note: "SCUK004",
		day: 3,
		start: 1230,
		length: 75,
		color: "#FFFAE3",
	},

	{
		name: "Posilovna",
		note: "SCUK011",
		day: 3,
		start: 1155,
		length: 75,
		color: "#FFFAE3",
	},

	{
		name: "Úvod do pedagogiky pro učitele",
		note: "C244",
		day: 3,
		start: 950,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Francouzština. Civilisation française et francophone",
		note: "C455A",
		day: 4,
		start: 650,
		length: 90,
		color: "#FFFAE3",
	},

	{
		name: "Francouzština. Le français parlé, reflet de la pop-culture",
		note: "CM203",
		day: 4,
		start: 750,
		length: 90,
		color: "#FFFAE3",
	},
];

if (!settings.showWeekends) {
	$(".weekend").css("display", "none");
}

$("#export-btn").click(function () {
	html2canvas(document.getElementById("timetable-wrapper"), { scale: 8 }).then(function (canvas) {
		document.getElementById("output").appendChild(canvas);
	});
});

$("#event-manager").on("click", ".duplicate-event", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	events.push({
		name: events[id].name,
		note: events[id].note,
		day: events[id].day,
		start: events[id].start,
		length: events[id].length,
		color: events[id].color,
	});
	$("#event-manager").append(
		'<div class="event-item card" id="event-item-' +
			(events.length - 1) +
			'">\
			<h4>' +
			events[events.length - 1].name +
			'</h4>\
			<input type="text" name="event-name" class="event-name" placeholder="Event Name" value="' +
			events[events.length - 1].name +
			'" />\
			<input type="text" name="event-note" class="event-note" placeholder="Event Note" value="' +
			events[events.length - 1].note +
			'" />\
			<input type="color" name="event-color" class="event-color" value="' +
			events[events.length - 1].color +
			'" />\
			<input type="time" name="event-start" class="event-start" value=' +
			("00" + Math.floor(events[events.length - 1].start / 60)).slice(-2) + // pad with leading zeroes
			":" +
			("00" + (events[events.length - 1].start % 60)).slice(-2) +
			' />\
			<input type="time" name="event-end" class="event-end" value="' +
			("00" + Math.floor((events[events.length - 1].start + events[events.length - 1].length) / 60)).slice(-2) +
			":" +
			("00" + ((events[events.length - 1].start + events[events.length - 1].length) % 60)).slice(-2) +
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
	$("#event-item-" + (events.length - 1))
		.children("select")
		.val(events[events.length - 1].day)
		.change();
});

function pushEvent(event) {
	if (!event) {
		events.push({
			name: "New Event",
			note: "Event Note",
			day: 0,
			start: 720,
			length: 120,
			color: events[events.length - 1].color,
		});
	} else {
		events.push({
			name: event.name,
			note: event.note,
			day: event.day,
			start: event.start,
			length: event.length,
			color: event.color,
		});
	}
}

function clearEventTT(i) {
	$("#event-" + i).remove();
}

function listEventTT(i) {
	$("#events-" + events[i].day).append(
		"<div class='event' id='event-" +
			i +
			"' style='background-color: " +
			events[i].color +
			";'><h5>" +
			events[i].name +
			"</h5><span class='note'>" +
			events[i].note +
			"</span></div>"
	);
	$("#event-" + i).css("left", ((events[i].start - settings.startHour * 60) / minutes) * 100 + "%");
	$("#event-" + i).css("width", (events[i].length / minutes) * 100 + "%");
}

function updateEventTT(i) {
	clearEventTT(i);
	listEventTT(i);
}

function listEventEM(i) {
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

	// set day in select menu
	$("#event-item-" + i)
		.children("select")
		.val(events[i].day)
		.change();
}

function generateTimetable() {
	// clear times row
	$("#times-container").empty();

	// generate times row
	for (let i = settings.startHour; i < settings.endHour; i++) {
		$("#times-container").append("<div>" + i + ":00</div>");
	}

	// clear timetable
	$(".events").empty();

	// generate timetable
	for (let i = 0; i < events.length; i++) {
		listEventTT(i);
	}
}

function listEventManager() {
	for (let i = 0; i < events.length; i++) {
		listEventEM(i);
	}
}

function createEvent() {
	pushEvent();
	listEventTT(events.length - 1);
	listEventEM(events.length - 1);
}

function toggleWeekends() {
	setting.weekends = !setting.weekends;
	$(".weekend").toggle();
}

$("#tt-show-weekends").click(function () {
	toggleWeekends();
});

$("#add-event").click(function () {
	createEvent();
});

// on title change in input field in event manager, update the events array and change title in timetable and event manager
$(document).on("change", ".event-name", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	events[id].name = $(this).val();
	updateEventTT(id);
	$("#event-item-" + id)
		.children("h4")
		.text($(this).val());
});

// same for note
$(document).on("change", ".event-note", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	events[id].note = $(this).val();
	updateEventTT(id);
});

// same for color
$(document).on("change", ".event-color", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	events[id].color = $(this).val();
	updateEventTT(id);
});

// same for start time
$(document).on("change", ".event-start", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	let start = $(this).val().split(":");
	events[id].start = parseInt(start[0]) * 60 + parseInt(start[1]);
	events[id].length =
		parseInt(
			$(".event-end", "#event-item-" + id)
				.val()
				.split(":")[0]
		) *
			60 +
		parseInt(
			$(".event-end", "#event-item-" + id)
				.val()
				.split(":")[1]
		) -
		events[id].start;
	updateEventTT(id);
});

// same for end time
$(document).on("change", ".event-end", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	let end = $(this).val().split(":");
	events[id].length = parseInt(end[0]) * 60 + parseInt(end[1]) - events[id].start;
	updateEventTT(id);
});

// same for day
$(document).on("change", ".event-day", function () {
	let id = $(this).parent().attr("id").split("-")[2];
	events[id].day = parseInt($(this).val());
	updateEventTT(id);
});

$(document).ready(function () {
	if (!settings.showWeekends) {
		toggleWeekends;
	}
	generateTimetable();
	listEventManager();
});
