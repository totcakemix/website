const text = `DeadCakeMix`;
            let index = 0;

            function typeWriter() {
                if (index < text.length) {
                    document.getElementById("typed-text").innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 150);
                } else {
                    document.getElementById("sub-text").style.display = "block";
                    document.querySelector(".bg-white").style.display = "inline-block";
                    document.getElementById("scroll-down").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("scroll-down").style.opacity = 1;
                    }, 200);
                }
            }

            document.addEventListener("DOMContentLoaded", function() {
                typeWriter();
            });

            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };

            const aboutMe = document.querySelector("#about-me");
            const latestPost = document.querySelector("#latest-post");

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transition = "opacity 0.5s ease";
                    }
                });
            }, observerOptions);

            observer.observe(aboutMe);
            observer.observe(latestPost);