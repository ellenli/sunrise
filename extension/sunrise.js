// Google Calendar (Modern)

function moveAddCalendar() {
  let calendarDivider = document.getElementsByClassName("qZvm2d-clz4Ic");
  let calendarImporter = document.getElementsByClassName("NcbWHe");

  // $(".NcbWHe").insertAfter(".qZvm2d-clz4Ic");

}

function timeFirst() {
  let calendarEvents = document.getElementsByClassName("wgIOqb-XPtOyb");
  var eventHTML;
  var eventName;
  var eventComma;
  var eventStartTime;

  for (var i = 0; i < calendarEvents.length; i++) {
    eventHTML = calendarEvents[i].getElementsByClassName("c1wk3e")[0];
    eventStartTime = calendarEvents[i].getElementsByClassName("wgIOqb-ihIZgd")[0];
    eventComma = calendarEvents[i].getElementsByClassName("qZvm2d-clz4Ic")[0];
    eventName = calendarEvents[i].getElementsByClassName("wgIOqb-r4nke")[0];

    eventHTML.innerHTML = eventStartTime + eventComma + eventName;
  }
}

// Google Calendar (Classic)

function toggleUpdate() {
  if (!isUpdating) {
    // stop listening to changes to #gridcontainer while event times are being added
    isUpdating = true;
    $("#gridcontainer").unbind('DOMSubtreeModified');
    addEventTimes();
  } else {
    // start listening to any changes to #gridcontainer
    isUpdating = false;
    $("#gridcontainer").bind("DOMSubtreeModified", toggleUpdate);
  }
}

function addEventTimes() {

  // event info based on .chip elements
  let calendarEvents = document.getElementsByClassName("chip");
  var eventText;
  var eventHTML;
  var startTime;

  for (var i = 0; i < calendarEvents.length; i++) {

    // get event info
    eventText = calendarEvents[i].textContent;
    eventHTML = calendarEvents[i].getElementsByClassName("cbrdcc")[0];
    if (undefined != eventHTML) {
      // remove first dash from 30 min events
      eventHTML.innerHTML = eventHTML.innerHTML.replace(/- /,'');
    } else {
      // change target class for >30 min events
      eventHTML = calendarEvents[i].getElementsByClassName("evt-lk")[0];
    }

    // add time if time is missing (assumes <strong> for prepended time)
    if (calendarEvents[i].innerHTML.indexOf("<strong>") == -1) {
      // start time bolded with no excess whitespace
      startTime = "<strong>" + eventText.substr(0,eventText.indexOf(' ')).replace(/\s/g,'') + " </strong>";
      $(startTime).insertBefore(eventHTML);
    }
  }
  // resume listening to any changes to #gridcontainer
  toggleUpdate()
}

let isUpdating = true;
toggleUpdate()

// moveAddCalendar()
// timeFirst()
