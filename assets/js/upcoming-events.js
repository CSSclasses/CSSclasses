(function () {
  var upcomingEvents = function () {
    var reqwestOptions = {
      url: 'https://api.meetup.com/opentechschool-berlin/events',
      method: 'get',
      type: 'jsonp',
      data: {
        only: 'time,venue,event_url,name',
        page: 100,
        'photo-host': 'public',
        sig: 'c5c73f83e1b43531530e50bce671b662f3960c05',
        sig_id: '111973952',
        status: 'upcoming'
      }
    };

    var isCSSclasses = function (event) {
      return event.name.indexOf('CSSclasses') > -1;
    };

    var getMapLinkForVenue = function (venue) {
      if (!venue.lat || !venue.lon) {
        return;
      }

      return 'http://maps.google.com/?q=' + venue.lat + ',' + venue.lon;
    };

    var renderUpcomingEventDate = function (upcomingEvent) {
      var template = [
        '<div><strong>When:</strong></div>',
        strftime('%A, %B %o, %I:%M%P-ca. 6:00pm', new Date(upcomingEvent.time))
      ];

      return template.join(' ');
    };

    var renderUpcomingEventLocation = function (upcomingEvent) {
      var eventVenue = upcomingEvent.venue;
      var linkLabel = eventVenue.name + ', ' + eventVenue.address_1 + ', ' + eventVenue.city;
      var template = [
        '<div><strong>Where:</strong></div>',
        '<a href="' + getMapLinkForVenue(eventVenue) + '" target="_blank">' + linkLabel + '</a>'
      ];

      return template.join(' ');
    };

    var renderUpcomingEvent = function (upcomingEvent) {
      var template = [
        '<li class="upcoming-event">',
          '<ul class="list-simple">',
            '<li class="list-simple__el">',
              renderUpcomingEventDate(upcomingEvent),
            '</li>',
            '<li class="list-simple__el">',
              renderUpcomingEventLocation(upcomingEvent),
            '</li>',
          '</ul>',
          '<div class="upcoming-event__register">',
            '<a href="' + upcomingEvent.event_url + '" target="_blank" class="btn btn--upcoming-events">Sign up for free</a>',
          '</div>',
        '</li>'
      ];

      return template.join(' ');
    };

    var renderUpcomingEvents = function (upcomingEvents) {
      if (!upcomingEvents.length) return;

      var events = upcomingEvents.filter(isCSSclasses);
      var upcomingEventsEl = document.getElementById('upcoming-events');
      var upcomingEventsListEl = document.getElementById('upcoming-events-list');
      var eventsListHtml = events.map(renderUpcomingEvent).join('');

      upcomingEventsListEl.innerHTML = eventsListHtml;
      upcomingEventsEl.classList.remove('is-hidden');
    };

    var getEvents = function (callback) {
      reqwest(reqwestOptions).then(callback);
    };

    getEvents(function (res) {
      renderUpcomingEvents(res.data);
    });
  };

  upcomingEvents();
}(reqwest, strftime));
