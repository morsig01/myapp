<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Planet Rotation</title>
<style>
    body {
        margin: auto;
        overflow: hidden;
        background-color: #111; /* Very dark grey */
    }
</style>
</head>
<body>
<canvas id="canvas"></canvas>
<script>
    // Get the canvas element
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth / 2; // Adjust width as needed
    canvas.height = window.innerHeight;

    // Define center coordinates
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Define the main planet
    var planet1 = {
        x: canvas.width / 2,
        y: centerY,
        radius: 50,
        speed: 0.01,
        angle: 0
    };

    // Define the number of orbiting planets
    var numOrbitingPlanets = 250;
    var orbitingPlanets = [];

    // Create orbiting planets
    for (var i = 0; i < numOrbitingPlanets; i++) {
        var distance = 100 + Math.random() * 300; // Vary distance between 100 and 400
        var angle = Math.random() * Math.PI * 2; // Random angle
        var size = 5 + Math.random() * 15; // Vary size between 5 and 20
        var color = getWarmColor(); // Get a warm color
        orbitingPlanets.push({
            distance: distance,
            radius: size,
            speed: 0.02 + Math.random() * 0.07, // Randomize speed a bit
            angle: angle,
            color: color
        });
    }

    function getWarmColor() {
        var red = Math.floor(Math.random() * 0);
        var green = Math.floor(Math.random() * 256); // Limiting green to keep the color warm
        var blue = 0; // No blue component
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update main planet position slightly
        planet1.x += Math.random() - 0.5;
        planet1.y += Math.random() - 0.5;

        // Draw the main planet
        ctx.beginPath();
        ctx.arc(planet1.x, planet1.y, planet1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();

        // Draw the orbiting planets
        for (var i = 0; i < numOrbitingPlanets; i++) {
            var planet = orbitingPlanets[i];
            var planetX = centerX + planet.distance * Math.cos(planet.angle);
            var planetY = centerY + planet.distance * Math.sin(planet.angle);
            ctx.beginPath();
            ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
            ctx.fillStyle = planet.color;
            ctx.fill();

            // Update position of orbiting planet
            planet.angle += planet.speed;
        }

        requestAnimationFrame(draw);
    }

    draw(); // Start animation
</script>
</body>
</html>