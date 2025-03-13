jQuery(document).ready(function($) {

    // Define the first joining date
    const firstJoiningDate = new Date('2021-06-28'); // Update this date with your actual joining date

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    let experienceYears = currentDate.getFullYear() - firstJoiningDate.getFullYear();

    // If the current date is before the anniversary of your joining date in the current year, subtract 1 year
    const monthsDifference = currentDate.getMonth() - firstJoiningDate.getMonth();
    if (monthsDifference < 0 || (monthsDifference === 0 && currentDate.getDate() < firstJoiningDate.getDate())) {
        experienceYears--;
    }

    // Set the calculated years of experience in the HTML element
    $('#experience-years').text(experienceYears + '+');

    var mastheadheight = $('.ds-header').outerHeight();
    //console.log(mastheadheight);
    $(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('.ds-header').addClass('ds-fixed-header');
        } else {
            $('.ds-header').removeClass('ds-fixed-header');
        }
    }).scroll();

});
