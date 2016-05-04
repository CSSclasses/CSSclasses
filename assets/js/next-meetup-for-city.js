(function () {
    var upcomingEvent = function (element) {
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

        var renderUpcomingEvent = function (events) {
            if (!events.length) {
                return;
            }

            events.forEach(function (event) {
                if (event.venue.city.indexOf(element.dataset.city) > -1) {
                    element.innerHTML = "<p>The next event takes place on <a href=" + event.event_url + ">" + strftime('%A, %B %o, %I:%M%P-ca. 6:00pm', new Date(event.time)) + "</a></p>";
                }
            });
        };

        var getEvents = function (callback) {
            reqwest(reqwestOptions).then(callback);
        };

        getEvents(function (res) {
            console.log(res);
            renderUpcomingEvent(res.results);
        });
    };

    var elements = document.getElementsByClassName("next-event");

    [].forEach.call(elements, function (element) {
        upcomingEvent(element);
    });

}(reqwest, strftime));
