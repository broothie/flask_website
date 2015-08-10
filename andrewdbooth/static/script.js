var prof_pics = [
    '/static/img/favicon.jpg',
    '/static/img/Killington_prof_pic.jpg',
    '/static/img/Niagara_prof_pic.jpg',
    '/static/img/Oozefest_prof_pic.jpg'
]

$(function() {
    // Add navigation functionality to rows
    $('.navigation-row').attr('onclick', 'show_page(this)');

    // Add prof-pic swap functionality
    $('.profile-image').click(function() {
        var index = Math.floor(Math.random() * prof_pics.length);
        var new_src = prof_pics[index];
        prof_pics[index] = $('.profile-image').attr('src');
        $('.profile-image').attr('src', new_src);
    });

    $('.name-div').click(function() {
        show_page(document.getElementById('about_navigation'));
    });

    // Add project image hover functionality
    $('.img-project').hover(
        function() {
            $('.img-project').addClass('img-blurred');
            $(this).removeClass('img-blurred');
        },
        function() {
            $('.img-project').removeClass('img-blurred');
        }
    );
});

function show_page(elem) {
    // Hide all pages
    $('.navigation-row').removeClass('bg-selected');
    $('.page-div').addClass('hidden');

    // Show make corresponding page
    $(elem).addClass('bg-selected');
    var target = $(elem).attr('id').replace('_navigation', '');
    $('#' + target).removeClass('hidden');
}
