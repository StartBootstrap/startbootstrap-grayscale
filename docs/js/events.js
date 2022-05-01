$(function() {
    fetchEvents();
});

function fetchEvents() {
    let email = 'ukrainestrongumd%40gmail.com';
    let apiKey = 'AIzaSyBb29rTfT7UH1ea_C5NuOuLJNXWD-JSApA';
    $.get(`https://www.googleapis.com/calendar/v3/calendars/${email}/events?timeMin=${moment().format()}&key=${apiKey}`).then((data) => {
        for (let i = 0; i < data.items.length; i++) {
            let event = data.items[i];
            let startDate = moment(event.start.dateTime);
            let endDate = moment(event.end.dateTime);
            
            let location = event.location;
            location = (location == undefined) ? 'N/A' : location;

            $('#events-list').append(`
                <div class="event">
                    <div class="event-date">
                        <span class="event-month">${startDate.format('MMM').toUpperCase()}</span>
                        <span class="event-day">${startDate.format('D')}</span>
                    </div>
                    <div class="event-data">
                        <span class="event-title">${event.summary}</span>
                        <span class="event-time"><i class="fa-solid fa-clock"></i> ${startDate.format('h:mm A')} - ${endDate.format('h:mm A')}</span>
                        <span class="event-location"><i class="fa-solid fa-location-dot"></i> ${location}</span>
                    </div>
                </div>
            `)
        }
    });
}