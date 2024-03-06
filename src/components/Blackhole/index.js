"use client";
import React from "react";
import { useRef, useEffect } from "react";

const Blackhole = () => {
    const myCanvas = useRef(0);
    var ctx, planet1, numOrbitingPlanets, orbitingPlanets, centerX, centerY;
    useEffect(() => {
        if (myCanvas.current) {
            var canvas = myCanvas.current;
            ctx = canvas.getContext('2d');

            // Set canvas size
            canvas.width = window.innerWidth / 2; // Adjust width as needed
            canvas.height = window.innerHeight;

            // Define center coordinates
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            // Define the main planet
            planet1 = {
                x: canvas.width / 2,
                y: centerY,
                radius: 50,
                speed: 0.01,
                angle: 0
            };

            // Define the number of orbiting planets
            numOrbitingPlanets = 300;
            orbitingPlanets = [];

            // Create orbiting planets
            for (var i = 0; i < numOrbitingPlanets; i++) {
                var distance = 100 + Math.random() * 300; // Vary distance between 100 and 400
                var angle = Math.random() * Math.PI * 2; // Random angle
                var size = 3+ Math.random() * 13; // Vary size between 5 and 20
                var color = getWarmColor(); // Get a warm color
                orbitingPlanets.push({
                    distance: distance,
                    radius: size,
                    speed: 0.04 + Math.random() * 0.10, // Randomize speed a bit
                    angle: angle,
                    color: color
                });
            }
            draw(); // Start animation
        }
    }, [])

    function getWarmColor() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 16); // Limiting green to keep the color warm
        var blue = 0; // No blue component
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the main planet at its fixed position
        ctx.beginPath();
        ctx.arc(planet1.x, planet1.y, planet1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();

        // Update and draw the orbiting planets
        for (var i = 0; i < numOrbitingPlanets; i++) {
            var planet = orbitingPlanets[i];
            var planetX = centerX + planet.distance * Math.cos(planet.angle);
            var planetY = centerY + planet.distance * Math.sin(planet.angle);
            ctx.beginPath();
            ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
            ctx.fillStyle = planet.color;
            ctx.fill();

        // Calculate the distance to the center
        var distanceToCenter = Math.sqrt(Math.pow(centerX - planetX, 2) + Math.pow(centerY - planetY, 2));

        // If the orbiting planet is close to the center, erase it and generate a new one
        if (distanceToCenter < 10) {
            // Remove the current orbiting planet
            orbitingPlanets.splice(i, 1);

            // Generate a new orbiting planet a little away from planet1
            var newDistance = 100 + Math.random() * 300; // Vary distance between 100 and 400
            var newAngle = Math.random() * Math.PI * 2; // Random angle
            var newSize = 3 + Math.random() * 13; // Vary size between 5 and 20
            var newColor = getWarmColor(); // Get a warm color
            orbitingPlanets.push({
                distance: newDistance,
                radius: newSize,
                speed: 0.04 + Math.random() * 0.10, // Randomize speed a bit
                angle: newAngle,
                color: newColor
            });

            // Decrease the loop counter since we removed an element
            i--;
        } else {
            // Update position of orbiting planet towards the center
            var dx = centerX - planetX;
            var dy = centerY - planetY;
            var angleToCenter = Math.atan2(dy, dx);
            var speedToCenter = 0.1; // Adjust speed towards the center as needed
            planet.angle += planet.speed;
            planet.angle += speedToCenter;
        }
    }

        // shake main planet
        var shakeMagnitude = 1; // Adjust shaking intensity as needed
        var deltaX = (Math.random() - 0.5) * shakeMagnitude;
        var deltaY = (Math.random() - 0.5) * shakeMagnitude;
        planet1.x += deltaX;
        planet1.y += deltaY;

        requestAnimationFrame(draw);
    }

    return <canvas ref={myCanvas} id="canvas">blackhole</canvas>
}
export default Blackhole;