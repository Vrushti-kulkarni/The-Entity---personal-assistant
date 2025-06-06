// used jquery in this project


// jqDocReady
$(document).ready(function () {
    $(".text").textillate({
        
        in:{
            effect: "fadeIn",
            delayScale: 1.5,      // controls speed between each character
            delay: 50,            // delay between each character
            sync: false,          // false = animate characters one by one (sequential)
            shuffle: false,       // set true to randomize character order
            reverse: false        // set true to reverse animation direction

        },
        out: {
            effect: 'fadeOut',
            delayScale: 1.5,
            delay: 50,
            sync: false,   // still sequential
            shuffle: false,
            reverse: true  // animate characters in reverse order
      },
      loop: true,
    })
});