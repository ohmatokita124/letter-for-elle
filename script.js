$(document).ready(function() {
    // Event handler for checkbox state change
    $("#messageState").on("change", function() {
        // Remove animation classes from .message
        $(".message").removeClass("openNor closeNor");

        if ($(this).is(":checked")) {
            // Checkbox is checked: open the message
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").stop().animate({ backgroundColor: "#f48fb1" }, 2000);
            console.log("Opening");
        } else {
            // Checkbox is unchecked: close the message
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").stop().animate({ backgroundColor: "#fce4ec" }, 2000);
            console.log("Closing");
        }
    });

    // Event handler for animation end on .message
    $(".message").on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function() {
        console.log("Message animation end");
        if ($(this).hasClass("closeNor")) {
            $(this).addClass("closed");
        }
        $(this).removeClass("openNor closeNor").addClass("no-anim");
    });

    // Event handler for animation end on .heart
    $(".heart").on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function() {
        console.log("Heart animation end");
        if (!$(this).hasClass("closeHer")) {
            $(this).addClass("openedHer beating");
        } else {
            $(this).addClass("no-anim").removeClass("beating");
        }
        $(this).removeClass("openHer closeHer");
    });
});
