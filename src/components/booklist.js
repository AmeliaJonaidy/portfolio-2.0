import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const BookList = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">The Lost Researcher: Escape Back to Earth VR Game</h1>
        <p className="project-summary">
        The escape room game is set in a parallel universe, where the player must solve puzzles to escape three distinct, generated universes. Each universe has a unique theme: a futuristic spaceship setting, an "end of the world" scenario with zombies, and a fantasy world with chemical potions and witches. The player embarks on this journey alone for research purposes, but things go awry, and they become trapped, needing to solve puzzles to escape each universe. 
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>Unity: ProBuilder Tools, Unity Scripts: C#</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>Diverse Themes: The escape room features three distinct themes: futuristic, "end of the world," and fantasy. Each theme is uniquely designed with its own concepts and aesthetics. The puzzles span across three separate universes, offering players the opportunity to explore and interact with a variety of environments.</li>
          <li>Detailed Instructions: At the start of each room in the escape room, clear guidelines will be provided to explain how the game progresses through the puzzles. Players must follow these instructions to solve each puzzle. This ensures they fully understand the process and objectives. The detailed puzzle instructions will be prominently displayed on one wall of each universe, providing clear guidance as players navigate through the different worlds.</li>
          <li>In-game Audio: The game will feature immersive in-game audio that aligns with the theme of each universe. This sound design will enhance the atmosphere, helping players feel fully immersed as they navigate through each unique world.</li>
          <li>Unique Puzzles: Each universe features unique puzzles based on its theme. In the futuristic universe, players find and click on colored shapes; in the "end of the world," they must locate letters to spell "AMELIA"; in the fantasy universe, they gather potions to activate switches and solve a number-based puzzle to escape back to Earth.</li>

        </ul>

        <h2 className="project-features-title">Target Audience</h2>
        <p>The game is designed for puzzle solvers and can be played solo or with a parent guiding children through the challenges. The player faces one puzzle in each of the first two universes and two puzzles in the fantasy universe.  The game encourages replayability, allowing players to improve their speed to solve the puzzles. </p>

        <h2 className="project-features-title">Challenges Faced</h2>
        <p>
        One of the main challenges I faced was working with Unity and C# for the first time. The project took about 10 weeks, and learning to navigate Unity’s features was initially quite difficult. I had to quickly familiarize myself with new tools and concepts, such as creating teleportation mechanics for movement around the room, designing puzzles, and integrating audio, all while learning on the go.</p>
        <p>The biggest challenge I faced was figuring out how to make the player teleport between the three universes. I had to learn that, once a player completed a puzzle or interacted with an object, the room needed to be replaced by setting the rooms to active or inactive. Initially, writing the scripts for this and determining the correct positioning of all three rooms was difficult for me to grasp. </p>

        <h2 className="project-features-title">Learning Outcomes</h2>
        <ul className="project-features-list">
          <li>Technical Skills: I learn how to write C# scripts to ensure the puzzles function correctly and the audio plays as intended. For instance, I figured out how to set different objects to "true" or "false" at specific moments, such as making certain objects appear when a switch is clicked, which is necessary to solve the next puzzle. </li>
          <li>Technical Skills: I learned how to import assets into Unity and use them effectively, including positioning them to ensure each room has a well-defined theme. Additionally, I discovered how to use Unity's shape tools and ProBuilder to create custom elements for my puzzles. For example, the keypad in my escape room wasn't an asset but was built from scratch using the shape tool and text tool in Unity. </li>
        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <p>A potential future improvement is to create a starting page, where players first encounter the game's title and an overview of the universes they will explore. This page will include a start button that teleports players to the first scene, the spaceship room, and also feature a narrator who provides a story about the researcher and the player's mission to escape.</p>
        <p>Another improvement I plan to make is to enhance the realism of my rooms and introduce more challenging puzzles. Some of the current puzzles are relatively simple and can be completed too quickly, so I aim to create more complex puzzles that will require deeper thought and problem-solving. This will help to extend the gameplay experience and make it more engaging for players. </p>
        <p>I also plan to improve the user experience by allowing players to click on an object to view the instructions, which will pop up on a separate screen instead of being displayed on a wall. This will make the instructions more visually appealing and provide a cleaner, more immersive way for players to access guidance during the game.

</p>

        <h2 className="project-features-title">Role in the Project</h2>
        <p>Developed the entire VR Escape Room: Did the Game Design Document, Did the designing of the rooms and puzzles.</p>

        <div className="media-section">
        <img 
            src={require('../assets/img/immersive3.png')}
            alt="immersive1" 
            style={{ width: '700px', height: 'auto' }} 
            />
                <img 
            src={require('../assets/img/immersive1.png')}
            alt="immersive1" 
            style={{ width: '700px', height: 'auto' }} 
            />
        <img 
            src={require('../assets/img/immersive2.png')}
            alt="immersive2" 
            style={{ width: '700px', height: 'auto' }} 
            />

        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/SZPw69nsuFc"
        title="The Lost Researcher Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="project-video"
        ></iframe>


        <div className="back-to-portfolio">
          <Link to="/myportfolio" className="back-link">Back to Other Portfolio Projects</Link>
        </div>

      </div>
    </div>
  );
};

export default BookList;
