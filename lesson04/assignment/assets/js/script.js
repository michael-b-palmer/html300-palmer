// jQuery plugin for the marquee animation effect
(function ($, window, undefined) {
    $.fn.marqueeify = function (options) {
        // Merge user options with the default settings
        let settings = $.extend({
            horizontal: true,
            vertical: true,
            speed: 100, // Speed in pixels per second
            container: $(this).parent(),
            bumpEdge: function () { }
        }, options);

        // Apply the animation effect to each selected element
        return this.each(function () {
            let containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
                $el = $(this);

            // Function to calculate dimensions of the container and the element
            getSizes = function () {
                containerWidth = settings.container.outerWidth();
                containerHeight = settings.container.outerHeight();
                elWidth = $el.outerWidth();
                elHeight = $el.outerHeight();
            };

            // Definitions for moving the element in different directions
            move = {
                right: function () {
                    $el.animate({ left: (containerWidth - elWidth) }, {
                        duration: ((containerWidth / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.left();
                        }
                    });
                },
                left: function () {
                    $el.animate({ left: 0 }, {
                        duration: ((containerWidth / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.right();
                        }
                    });
                },
                down: function () {
                    $el.animate({ top: (containerHeight - elHeight) }, {
                        duration: ((containerHeight / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.up();
                        }
                    });
                },
                up: function () {
                    $el.animate({ top: 0 }, {
                        duration: ((containerHeight / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.down();
                        }
                    });
                }
            };

            getSizes();

            // Start the movement based on the settings provided
            if (settings.horizontal) {
                move.right();
            }
            if (settings.vertical) {
                move.down();
            }

            // Adjust dimensions on window resize to keep responsiveness
            $(window).resize(function () {
                getSizes();
            });
        });
    };
})(jQuery, window);

// Functionality for handling the color change of the logo on bump
$(document).ready(function () {

    // Counter to track bumps
    let bumpCounter = 0;
    // Save the original colors of the logos
    let originalColorLogo = $('.marquee .logo').css('fill');
    let originalColorLogo2 = $('.marquee .logo2').css('fill');

    // Use the marqueeify plugin on the marquee class
    $('.marquee').marqueeify({
        speed: 300,
        bumpEdge: function () {
            bumpCounter++;

            // Logic to change the color on every second bump
            if (bumpCounter % 2 === 0) {
                $('.marquee .logo').css('fill', originalColorLogo);
                $('.marquee .logo2').css('fill', originalColorLogo2);
            } else {
                let newColorLogo = generateRandomColor();
                let newColorLogo2;

                do {
                    newColorLogo2 = generateRandomColor();
                } while (newColorLogo === newColorLogo2);  // Ensure logo2 color is different from logo color

                $('.marquee .logo').css('fill', newColorLogo);
                $('.marquee .logo2').css('fill', newColorLogo2);
            }
        }
    });

    // Helper function to generate a random color value
    function generateRandomColor() {
        return "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
    }
});
