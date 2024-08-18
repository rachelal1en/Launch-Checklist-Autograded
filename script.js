window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        let destination = pickPlanet(listedPlanets);
        addDestinationInfo(doucment, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image);
    });

        //const form = document.getElementById("testForm");
        const button = document.getElementById("formSubmit");
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let pilot = document.querySelector("input[name=pilotName]").value;
            let copilot = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoMass = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById("faultyItems");

            formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        })
});