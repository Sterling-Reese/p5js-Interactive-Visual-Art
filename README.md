# Fake Dating Sim → Horror Game

## Description
A narrative-driven game built with p5.js that subverts player expectations by starting as a dating sim before transitioning into a top-down survival shooter. The project is managed with a simple, scene-based state machine to handle different game states (start, play, win, lose).

## Technologies Used
* **Languages:** JavaScript
* **Libraries:** p5.js

## Features
* **Asset Preloading:** Utilizes `preload()` to load all image assets for the player, enemies, and backgrounds before the game starts.
* **Object-Oriented Enemies:** The `Enemy` class manages the state and behavior of each opponent, including movement and collision detection.
* **Player Controls:** Implements keyboard controls (WASD) for player movement with canvas boundary constraints.
* **Game Logic:** Features a timer-based win condition and a life-based loss condition.
