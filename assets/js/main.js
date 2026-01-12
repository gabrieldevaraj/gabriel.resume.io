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
    // Updated to show 4+ years of experience
    $('#experience-years').text('4+');

    var mastheadheight = $('.ds-header').outerHeight();
    //console.log(mastheadheight);
    $(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('.ds-header').addClass('ds-fixed-header');
        } else {
            $('.ds-header').removeClass('ds-fixed-header');
        }
        
        // Update scroll progress indicator
        updateScrollProgress();
        
        // Update active navigation item
        updateActiveNav();
    }).scroll();

    // Smooth scroll for navigation links
    $('.nav-icon').on('click', function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        const targetSection = $(targetId);
        
        if (targetSection.length) {
            const headerHeight = $('.ds-header').outerHeight();
            const targetPosition = targetSection.offset().top - headerHeight - 20;
            
            $('html, body').animate({
                scrollTop: targetPosition
            }, 800, 'swing');
        }
    });

    // Function to update active navigation item based on scroll position
    function updateActiveNav() {
        const scrollPos = $(window).scrollTop() + $(window).height() / 3;
        const headerHeight = $('.ds-header').outerHeight();
        
        $('.nav-icon').each(function() {
            const targetId = $(this).attr('href');
            const targetSection = $(targetId);
            
            if (targetSection.length) {
                const sectionTop = targetSection.offset().top - headerHeight - 100;
                const sectionBottom = sectionTop + targetSection.outerHeight();
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    $('.nav-icon').removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
        
        // Handle home section (at top)
        if ($(window).scrollTop() < 200) {
            $('.nav-icon').removeClass('active');
            $('.nav-icon[href="#home"]').addClass('active');
        }
        
        // Handle contact section (at bottom)
        const documentHeight = $(document).height();
        const windowHeight = $(window).height();
        if ($(window).scrollTop() + windowHeight >= documentHeight - 100) {
            $('.nav-icon').removeClass('active');
            $('.nav-icon[href="#contact"]').addClass('active');
        }
    }

    // Function to update scroll progress indicator
    function updateScrollProgress() {
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollTop = $(window).scrollTop();
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        // Create scroll indicator if it doesn't exist
        if ($('.scroll-indicator').length === 0) {
            $('body').prepend('<div class="scroll-indicator"></div>');
        }
        
        $('.scroll-indicator').css('width', scrollPercent + '%');
    }

    // Initialize active nav on page load
    updateActiveNav();
    
    // Add scroll indicator on page load
    updateScrollProgress();

});
