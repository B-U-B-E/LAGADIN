let bodyStyle = document.body.style;

        bodyStyle.backgroundColor = "black";

        let mediaDiv = document.querySelector(".media");
        document.body.appendChild(mediaDiv);
        mediaDiv.style.position = "relative";
        
        mediaDiv.style.height = "100vh";




        let cardsContainer = document.getElementById("cards-container");

        let button = document.getElementById("button");
        mediaDiv.append(button);
        button.addEventListener("click", function buttonGetClicked() {

            cardsContainer.classList.toggle('active')
            button.classList.toggle('active')
            button.style.transition = "all 1s linear"
            button.innerHTML =
                `<h1 style = font-size:20px>Lagadin was clicked...click again</h1><span style="font-size:50px; ">⬇</span>`
            button.style.width = "100%"
            button.append(cardsContainer);

        })

        let cards = document.querySelector(".cards");

        function bubeFunky(bubeCard) {
            if (bubeCard.matches) {
                cards.style.display = "block";
                button.style.position = "relative";
            } else {
                cards.style.display = "flex";
                button.style.position = "absolute";
            }
        }

        let bubeCard = window.matchMedia("(max-width: 1000px)")
        bubeFunky(bubeCard);
        bubeCard.addListener(bubeFunky)

        let footer = document.querySelector("footer");
        console.log(footer)
        document.body.appendChild(footer)
        footer.innerText = "This page is coded, designed,photographed product by Ljubomir Sukarov-Bube"