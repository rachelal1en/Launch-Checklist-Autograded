window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        const destination = pickPlanet(listedPlanets);

        let name = destination.name;
        let diameter = destination.diameter;
        let star = destination.star;
        let distance = destination.star;
        let moons = destination.moons;
        let imageUrl = destination.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    });

        const form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            let pilotN = document.querySelector("input[name=pilotName]").value;
            let copilotN = document.querySelector("input[name=copilotName]").value;
            let fuelLevelV = document.querySelector("input[name=fuelLevel]").value;
            let cargoMassV = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById("faultyItems");
            event.preventDefault();
            formSubmission(document, list, pilotN, copilotN, fuelLevelV, cargoMassV);
        });
});