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

    var renderUpcomingEventDate = function (upcomingEvent) {
      var template = [
        '<strong>When:</strong>',
        strftime('%A, %B %o, %I:%M%P-ca. 6:00pm', new Date(upcomingEvent.time))
      ];

      return template.join(' ');
    };

    var renderUpcomingEventLocation = function (upcomingEvent) {
      var eventVenue = upcomingEvent.venue;
      var linkLabel = eventVenue.name + ', ' + eventVenue.address_1 + ', ' + eventVenue.city;
      var template = [
        '<strong>Where:</strong>',
        '<a href="' + upcomingEvent.event_url + '" target="_blank">' + linkLabel + '</a>'
      ];

      return template.join(' ');
    };

    var renderUpcomingEvent = function (upcomingEvent) {
      var template = [
        '<li>',
          '<ul class="list-simple">',
            '<li class="list-simple__el">',
              renderUpcomingEventDate(upcomingEvent),
            '</li>',
            '<li class="list-simple__el">',
              renderUpcomingEventLocation(upcomingEvent),
            '</li>',
          '</ul>',
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

    var render = function () {
      getEvents(function (res) {
        renderUpcomingEvents(res.results);
      });
    };

    return Object.freeze({ render: render });
  };

  upcomingEvents().render();
}(reqwest, strftime));
