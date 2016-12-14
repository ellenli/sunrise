$('#gridcontainer').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})
$('.goog-imageless-button-content').contents().first().replaceWith("Add event");
