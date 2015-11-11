(function () {
  var upcomingEvents = function () {
    var reqwestOptions = {
      url: 'https://api.meetup.com/2/open_events',
      method: 'get',
      type: 'jsonp',
      data: {
        and_text: 'False',
        desc: 'False',
        format: 'json',
        limited_events: 'False',
        offset: 0,
        only: 'time,venue,event_url',
        'photo-host': 'public',
        page: 20,
        radius: 25.0,
        status: 'upcoming',
        sig_id: '111973952',
        sig: '5992951a7b154c83b404c2ae95bf932738813c03',
        text: 'CSSclasses'
      }
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
      if (!upcomingEvents.length) {
        return;
      }

      var upcomingEventsEl = document.getElementById('upcoming-events');
      var upcomingEventsListEl = document.getElementById('upcoming-events-list');
      var eventsListHtml = upcomingEvents.map(renderUpcomingEvent);

      upcomingEventsListEl.innerHTML = eventsListHtml;
      upcomingEventsEl.classList.remove('is-hidden');
    };

    var getEvents = function (callback) {
      reqwest(reqwestOptions).then(callback);
    };

    getEvents(function (res) {
      renderUpcomingEvents(res.results);
    });
  };

  upcomingEvents();
}(reqwest, strftime));
