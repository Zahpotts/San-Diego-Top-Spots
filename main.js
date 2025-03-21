$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        var tableBody = $('#topSpotsTable tbody');
        $.each(data, function(index, spot) {
            var name = $('<td>').text(spot.name);
            var description = $('<td>').text(spot.description);
            var locationLink = $('<a>')
                .attr('href', 'https://www.google.com/maps?q=' + spot.location[0] + ',' + spot.location[1])
                .attr('target', '_blank')
                .addClass('btn btn-primary')
                .addClass('btn-sm')
                .text('Open in Maps');
            var location = $('<td>').append(locationLink);
            var row = $('<tr>').append(name, description, location);
            tableBody.append(row);
        });
    });
});