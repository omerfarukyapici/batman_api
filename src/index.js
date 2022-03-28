(async () => {

    try {

        //APİ Destination 1 
        const gamesThatNamesAreBatman = "https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0";
        const batmanGamesResponse = await fetch(gamesThatNamesAreBatman);
        const batmanGamesData = await batmanGamesResponse.json();
        //Debug (check data and errors)
        console.log(batmanGamesData);


        //APİ Destination 2
        const batmanGamesPrices = "https://www.cheapshark.com/api/1.0/games?id=612";
        const batmanGamesPricesResponse = await fetch(batmanGamesPrices);
        const batmanGamesPricesData = await batmanGamesPricesResponse.json();
        //Debug (check data and errors)
        console.log(batmanGamesPricesData /* .cheapestPriceEver.price */);


        //APİ Destination 3
        const batmanGamesDealDetails = "https://www.cheapshark.com/api/1.0/deals?id=y7nEC%2FMdMa4myBUYqzJ%2BN09pUxao0wE%2FOOLHOmEAmCM%3D";
        const dealDetailsResponse = await fetch(batmanGamesDealDetails);
        const dealDetailsData = await dealDetailsResponse.json();
        //Debug (check data and errors)
        console.log(dealDetailsData);


        /* 
            for (let i = 0; i <= 33; i++) {
                console.log(batmanGamesData[i].gameID)
            }
        */



        //Show Api Data into Html w/ForEach loop
        const root = document.querySelector("#batman_root");

        let cardOutput = "<div class=' pb-6 flex flex-wrap justify-center'>";

        //Create Cards for each batman game
        const useForEach = async batmanGamesData => {
            batmanGamesData.forEach(data => {

                //Debug
                console.log(data);

                //Create card structure and card content (Basic Html and Tailwind CSS classes)
                cardOutput += `
                <div class="card w-[220px] bg-coral rounded-2xl m-[.7rem] shadow-md hover:relative hover:z-20  hover:scale-105">
                    <div class="flex justify-center relative">
                        <a href="" class="info_icon"></a>
                        <img class=" w-[220px] h-[150px] rounded-t-2xl" src="${data.thumb}" />
                    </div>
                    <div>
                        <ul class="p-5">
                            <li class="text-[#081F32] text-xl font-bold" >${data.external} </li>
                            <li class="pt-12 font-bold text-20 flex justify-between">
                                <div class="">${data.cheapest}$</div>
                                <a href="" class="tracking-widest px-4 text-[1rem] bg-[#2ECC71] leading-4 text-white rounded py-2">ORDER</a>
                            </li>
                        </ul> 
                    </div>
                </div>
                `;

            });

            cardOutput += "</div>";

            //Debug (Check data, check error)
            console.log(cardOutput)

            //Pass all Html and Api data into our root
            root.innerHTML += cardOutput;
        }


        const initApp = async () => {
            useForEach(batmanGamesData)
        }
        initApp();





    } catch (error) {

        //Debug and alert
        console.log("Oops! Someting wrong")

    }


})();