// AOS.init();
//$("#root").load("root.html")

var siteURL;
function ShowLoader() {
    $(".loader-outer").css("display", "flex");
}

function HideLoader() {
    $(".loader-outer").css("display", "none");
}

function iframeOpen(id) {
    $('body').addClass("iframe-open");

    //$(".load-site").attr("src", "http://127.0.0.1:5500/" + id).css("display", "block");
    $(".load-site").attr("src", "https://uiwork.azurewebsites.net/" + id).css("display", "block");
    HideLoader();
}

// If reCAPTCHA is still loading, grecaptcha will be undefined.

$(document).ready(function () {

    // grecaptcha.ready(function(){
    //     grecaptcha.render("container", {
    //       sitekey: "6Lcs5_ohAAAAAORuxztfsBPUYY4QN68dSbWCaEuk"
    //     });
    //   });

    setTimeout(function () {

        // modal
        var contactModal = new bootstrap.Modal(document.getElementById('contact_form'), {});
        $("#myForm").on('submit', function (event) {

            ShowLoader();
            var response = grecaptcha.getResponse();
            if (response.length == 0) {
                document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
                HideLoader();
                return false;
                
            }
            else{
                event.preventDefault();
                var formData = $(this).serialize();
                $.ajax({
                    type: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    url: '../mail.php',
                    dataType: "json",
                    data: formData,
                    success: function (response) {
                        //alert(response.status);
                        localStorage.setItem("modalopen", true);
                        contactModal.hide();
                        HideLoader();
                        iframeOpen(siteURL)
                    },
                    error: function (xhr, status, error) {
                        console.log(status);
                        HideLoader();
                    }
                });
            }
            
        });
        function verifyCaptcha() {
            document.getElementById('g-recaptcha-error').innerHTML = '';
        }
        $(".btn-open-iframe").click(function () {
            ShowLoader();
            siteURL = $(this).attr("data")
            // var checkmodal = localStorage.getItem("modalopen");
            // if (!checkmodal === true) {
            //     contactModal.show();
            //     HideLoader();
            // }
            // else {
                iframeOpen(siteURL)
                //$(".load-site").attr("src", "http://127.0.0.1:5500/" + siteURL).css("display", "block");
            //}
        });
        $(".btn-close-iframe").click(function () {
            $(".load-site").attr("src", "").css("display", "none");
            $('body').removeClass("iframe-open");
        })

        // particle
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#448ec1"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#448ec1"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 6,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#448ec1",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": false,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
        );

        // tilt
        $('.card').tilt({
            scale: 1,
            perspective: 1000
        })

        // cursor
        var cursor = $(".cursor");
        $(".ribbon")
            .mouseenter(function () {
                //debugger;
                cursor.css({
                    transform: "scale(2)"
                });
            })
            .mousemove(function (e) {
                cursor.css({
                    top: (e.clientY - cursor.height() / 2) + 20,
                    left: (e.clientX - cursor.width() / 2) + 20
                });
            })
            .mouseleave(function () {
                cursor.css({
                    transform: "scale(0.5)"
                });
                cursor.css({
                    top: "-9999em",
                    left: 0
                });
            });

    }, 500)


});

