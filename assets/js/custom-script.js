$(document).ready(function() {

    $(window).on('load', function() {
        $('#loader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    // Fallback timeout
    setTimeout(function() {
        if ($('#loader').is(':visible')) {
            $('#loader').fadeOut('slow', function() {
                $(this).remove();
            });
        }
    }, 500); 


    var selectElement = $('#coSelect');    

    if (selectElement.length) {
        selectElement.change(function() {
            var selectedValue = $(this).val();
            var allSections = $('.section-collection');

            // Hide all sections
            allSections.hide();

            // Show selected section
            var selectedSections = $('.collection-' + selectedValue);
            selectedSections.show();

            // Set the selection in localStorage
            localStorage.setItem('collection', selectedValue);
        });

        // Set the selected collection from localStorage if available
        var storedSelection = localStorage.getItem('collection');
        if (storedSelection) {
            selectElement.val(storedSelection);
            $('.collection-' + storedSelection).show();
        }
    } else {
        console.error("Select element not found");
    }

    // select all id startes with tab-
    var tabs = $('[id^="tab-"]');

    tabs.each(function() {
        // Remove active class from all tabs
        tabs.removeClass('active');

        // Hide all tab content
        var contents = $('.tab-pane');
        contents.removeClass('show active');

        // Add active class to clicked tab
        $(this).addClass('active');

        // Show the corresponding tab content
        var target = $($(this).attr('data-target'));
        if (target.length) {
            target.addClass('show active');
            localStorage.setItem('collection-tab', target.attr('id'));
        }
    });

    var collectionTab = localStorage.getItem('collection-tab');
    if (collectionTab) {
        var tab = $('#nav-tab a[data-target="#' + collectionTab + '"]');
        tab.trigger('click');
    }

    var selectElement = $('#userSelect');

    selectElement.change(function() {
        var selectedTab = $(this).val();

        // Hide all tab content
        $('.tab-pane').removeClass('show active');

        // Show the selected tab content
        $('#' + selectedTab).addClass('show active');

        // Store the selection in localStorage
        localStorage.setItem('activeTab', selectedTab);
    });

    // Retrieve the active tab from localStorage
    var activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        selectElement.val(activeTab);
        $('#' + activeTab).addClass('show active');
    } else if (selectElement.find('option').length > 0) {
        // If there's no active tab stored, default to the first option
        var firstTab = selectElement.find('option').first().val();
        $('#' + firstTab).addClass('show active');
    }
});