// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let target = document.getElementById("missionTarget");
    target.innerHTML = 
                    `<h2>Mission Destination</h2>
                    <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStat = document.getElementById("pilotStatus");
    let copilotStat = document.getElementById("copilotStatus");
    let fuelStat = document.getElementById("fuelStatus");
    let cargoStat = document.getElementById("cargoStatus");
    let launchStat = document.getElementById("launchStatus");

    // error for empty fields
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    }
    // error for type mismatch
    else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ||
        validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
    }
    // fields contain info in the right type
    else {
        list.style.visibility = "visible";
        pilotStat.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStat.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            fuelStat.innerHTML = "Fuel level too low for launch";
        } else {
            fuelStat.innerHTML = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000) {
            cargoStat.innerHTML = "Cargo mass too heavy for launch";
        } else {
            cargoStat.innerHTML = "Cargo mass low enough for launch";
        }

        if (fuelLevel >= 10000 && cargoLevel < 10000) {
            launchStat.style.color = "green";
            launchStat.innerHTML = "Shuttle is Ready for Launch";
        } else {
            launchStat.innerHTML = "Shuttle Not Ready for Launch";
            launchStat.style.color = "red"
        }

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;