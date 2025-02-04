import React from 'react';

const ClothesContent = () => (
  <section className="content">
    <div className="content-block">
      <h2>Did you know that you can change your cloth color?</h2>
      <p>No problem. Here you can choose what color you want to wear.</p>
    </div>
    <div className="content-block">
      <h2>Red Outfit</h2>
      <p>You always start with this every time you start a new game.</p>
      <div className="gif">
        <img src="/images/gifs/red_out.gif" alt="Default Seve" />
      </div>
    </div>
    <div className="content-block">
      <h2>Blue Outfit</h2>
      <p>Easy to obtain. Need 3 <b>Void Screws</b> to have it.</p>
      <div className="gif">
        <img src="/images/gifs/blue_outfit.gif" alt="Blue Seve" />
      </div>
    </div>
    <div className="content-block">
      <h2>Green Outfit</h2>
      <p>Easy to obtain. Need 4 <b>Void Screws</b> to have it.</p>
      <div className="gif">
        <img src="/images/gifs/green_outfit.gif" alt="Green Seve" />
      </div>
    </div>
    <div className="content-block">
      <h2>Some Other Place</h2>
      <p><strong>Some Other Place</strong> can be discovered as soon as you start the game, if you didn't know.</p>
      <div className="gif">
        <img src="/images/gifs/entry.gif" alt="Entry" />
        <img src="/images/map.png" alt="Map" className="pop-out-image" />
      </div>
    </div>
    <div className="content-block">
      <h2>Black Outfit</h2>
      <p>Now this is a hard one to obtain. You must have at least <b>XP Lvl 5</b> to gain access to <b>Anxiety Tower</b>.</p>
      <div className="gif">
        <img src="/images/gifs/black_outfit.gif" alt="Black Seve" />
      </div>
    </div>
    <div className="content-block">
      <h2>Entry to Black Outfit Room</h2>
      <p>Here's how to gain entry to the room to get the black outfit.</p>
      <div className="gif">
        <img src="/images/gifs/entry1.gif" alt="Anxiety Tower Soda Machine" />
      </div>
    </div>
    <div className="videoblock">
      <p>Genuinely, it is a hard one to practice. Having both <b>Health Upgrades</b> will give you extra 2 tries on this. It's all about rhythm.</p>
      <video width="640" height="360" controls>
        <source src="/video/attempt.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="content-block">
      <h2>Back to Red Outfit</h2>
      <p>If you choose not to wear any cloth color (aka blue, green or black), you will have <b>Red Outfit</b>.</p>
      <div className="gif">
        <img src="/images/gifs/normal.gif" alt="Back to normal" />
      </div>
    </div>
  </section>
);

export default ClothesContent;