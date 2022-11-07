(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    window.addEventListener("DOMContentLoaded", (() => {
        const wrapperVideo = document.getElementById("fon");
        const video1 = document.getElementById("video1");
        const video2 = document.getElementById("video2");
        const switchPage = document.querySelector(".checkbox");
        const btnGreen2 = document.querySelector(".content__circle-2");
        const red = document.querySelector(".content__circle-3");
        const btnGreen4 = document.querySelector(".content__circle-4");
        const btnGreen5 = document.querySelector(".content__circle-5");
        const btnGear = document.querySelector(".content__circle-1");
        const noseCircle = document.querySelector(".nose-circle");
        const leftCircle = document.querySelector(".left-circle");
        const rightCircle = document.querySelector(".right-circle");
        const unsafeCircle = document.querySelector(".unsafe-circle");
        const noseReleased = document.querySelector(".nose-released ");
        const leftReleased = document.querySelector(".left-released");
        const rightReleased = document.querySelector(".right-released");
        const noseRemoved = document.querySelector(".nose-removed");
        const leftRemoved = document.querySelector(".left-removed");
        const rightRemoved = document.querySelector(".right-removed");
        const line = document.querySelector(".circle__box-2");
        const r8 = document.getElementById("r8");
        const box__left = document.getElementById("left");
        const box__right = document.getElementById("right");
        const box__nose = document.getElementById("nose");
        const removed__left = document.getElementById("removed__left");
        const removed__right = document.getElementById("removed__right");
        const removed__nose = document.getElementById("removed__nose");
        const p2 = document.getElementById("p2");
        const kv3 = document.getElementById("kv3");
        btnGear.addEventListener("mousedown", (() => {
            if (false == btnGear.classList.contains("q") && false == switchPage.classList.contains("t")) {
                btnGear.classList.add("q");
                btnGear.style.background = "rgba(164, 164, 164, 1.0)";
                btnGear.style.background = "-webkit-linear-gradient(bottom right, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "-moz-linear-gradient(bottom right, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "linear-gradient(to top left, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGreen2.style.backgroundColor = "#41ff07";
                btnGreen4.style.backgroundColor = "#41ff07";
                btnGreen5.style.backgroundColor = "#41ff07";
                noseCircle.style.backgroundColor = "#41ff07";
                leftCircle.style.backgroundColor = "#41ff07";
                rightCircle.style.backgroundColor = "#41ff07";
                noseCircle.style.opacity = ".8";
                leftCircle.style.opacity = ".8";
                rightCircle.style.opacity = ".8";
            }
        }));
        btnGear.addEventListener("mouseup", (() => {
            if (btnGear.classList.contains("q") && false == switchPage.classList.contains("t")) {
                btnGear.classList.remove("q");
                btnGear.style.background = "rgba(164, 164, 164, 1.0)";
                btnGear.style.background = "-webkit-linear-gradient(top left, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "-moz-linear-gradient(top left, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "linear-gradient(to bottom right, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGreen2.style.backgroundColor = "#378521";
                btnGreen4.style.backgroundColor = "#378521";
                btnGreen5.style.backgroundColor = "#378521";
                noseCircle.style.backgroundColor = "#378521";
                leftCircle.style.backgroundColor = "#378521";
                rightCircle.style.backgroundColor = "#378521";
                noseCircle.style.opacity = ".3";
                leftCircle.style.opacity = ".3";
                rightCircle.style.opacity = ".3";
            }
        }));
        window.onload = function() {
            switchPage.addEventListener("click", (() => {
                wrapperVideo.play();
                video1.play();
                video2.play();
                setTimeout((() => {
                    wrapperVideo.play();
                    video1.play();
                    video2.play();
                }), 1e3);
                setTimeout((() => {
                    wrapperVideo.pause();
                }), 15e3);
                setTimeout((() => {
                    video1.pause();
                }), 15105);
                setTimeout((() => {
                    video2.pause();
                }), 16055);
            }));
        };
        switchPage.addEventListener("click", (() => {
            if (false == switchPage.classList.contains("t")) {
                switchPage.classList.add("t");
                document.getElementById("checkbox").disabled = true;
                setTimeout((() => {
                    document.getElementById("checkbox").disabled = false;
                }), 16700);
                noseRemoved.style.color = "inherit";
                leftRemoved.style.color = "inherit";
                rightRemoved.style.color = "inherit";
                p2.style.transform = "rotate(9deg)";
                kv3.style.transform = "rotate(-180deg)";
                line.style.transform = "rotate(20deg)";
                removed__nose.style.transform = "rotate(-134deg)";
                removed__left.style.transform = "rotate(-134deg)";
                removed__right.style.transform = "rotate(-134deg)";
                red.style.backgroundColor = "#ff0000";
                unsafeCircle.style.backgroundColor = "#ff0000";
                unsafeCircle.style.opacity = ".8";
                setTimeout((() => {
                    btnGreen2.style.backgroundColor = "#41ff07";
                    noseReleased.style.color = "#189918";
                    noseCircle.style.backgroundColor = "#41ff07";
                    noseCircle.style.opacity = ".8";
                    r8.style.transform = "rotate(-180deg)";
                    box__nose.style.transform = "rotate(-180deg)";
                }), 14e3);
                setTimeout((() => {
                    btnGreen4.style.backgroundColor = "#41ff07";
                    leftReleased.style.color = "#189918";
                    leftCircle.style.backgroundColor = "#41ff07";
                    leftCircle.style.opacity = ".8";
                    box__left.style.transform = "rotate(-180deg)";
                }), 15e3);
                setTimeout((() => {
                    box__right.style.transform = "rotate(-180deg)";
                    btnGreen5.style.backgroundColor = "#41ff07";
                    rightReleased.style.color = "#189918";
                    rightCircle.style.backgroundColor = "#41ff07";
                    rightCircle.style.opacity = ".8";
                    unsafeCircle.style.backgroundColor = "#750202";
                    unsafeCircle.style.opacity = ".3";
                    red.style.backgroundColor = "#750202";
                }), 16700);
            } else {
                switchPage.classList.remove("t");
                document.getElementById("checkbox").disabled = true;
                setTimeout((() => {
                    document.getElementById("checkbox").disabled = false;
                }), 16e3);
                r8.style.transform = "rotate(-134deg)";
                box__nose.style.transform = "rotate(-134deg)";
                box__left.style.transform = "rotate(-134deg)";
                box__right.style.transform = "rotate(-134deg)";
                noseReleased.style.color = "inherit";
                leftReleased.style.color = "inherit";
                rightReleased.style.color = "inherit";
                line.style.transform = "rotate(-29deg)";
                kv3.style.transform = "rotate(-134deg)";
                noseCircle.style.backgroundColor = "#378521";
                noseCircle.style.opacity = ".3";
                leftCircle.style.backgroundColor = "#378521";
                leftCircle.style.opacity = ".3";
                rightCircle.style.backgroundColor = "#378521";
                rightCircle.style.opacity = ".3";
                btnGreen2.style.backgroundColor = "#378521";
                btnGreen4.style.backgroundColor = "#378521";
                btnGreen5.style.backgroundColor = "#378521";
                unsafeCircle.style.backgroundColor = "#ff0000";
                unsafeCircle.style.opacity = ".8";
                red.style.backgroundColor = "#ff0000";
                setTimeout((() => {
                    p2.style.transform = "rotate(-29deg)";
                    noseRemoved.style.color = "#189918";
                    leftRemoved.style.color = "#189918";
                    rightRemoved.style.color = "#189918";
                    removed__nose.style.transform = "rotate(-180deg)";
                    removed__left.style.transform = "rotate(-180deg)";
                    removed__right.style.transform = "rotate(-180deg)";
                    unsafeCircle.style.backgroundColor = "#750202";
                    unsafeCircle.style.opacity = ".3";
                    red.style.backgroundColor = "#750202";
                }), 13e3);
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();