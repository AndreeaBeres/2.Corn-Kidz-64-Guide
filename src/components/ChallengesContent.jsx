import React from 'react';

const ChallengesContent = () => (
  <section className="content">
    <div className="content-block">
      <h2>You've probably completed the game a few times. Why not consider doing a challenge?</h2>
    </div>
    <div className="content-block">
      <h2>Vsync</h2>
      <p>This option can be activated before you start the game. It makes the game speed double, requiring you to position the character a lot. It's challenging.</p>
      <img src="/images/gifs/vsync.gif" alt="Vsync" />
    </div>
    <div className="content-block">
      <h2>Keyboarder</h2>
      <p>Hear me out about that. Yes, you can play with a keyboard, but some notes say don't do it, as it's painful or if you cannot reach your controller. It takes a bit of time to get used to it. The only problem is you cannot delete the save file if you want to start all over.</p>
    </div>
    <div className="content-block">
      <h2>Hardcore</h2>
      <p>Now, this challenge requires your dedication and pure skill to achieve 0 deaths the entire gameplay. Although there are parts that can be difficult, having enough health at all times is essential to this one. It's all a matter of trial and error.</p>
      <img src="/images/gifs/hardcore.gif" alt="Hardcore" />
    </div>
    <div className="content-block">
      <h2>Speedrunner</h2>
      <p>How fast can you go? For this one, you need to practice your tricks for hours to attempt to do it right.</p>
    </div>
  </section>
);

export default ChallengesContent;