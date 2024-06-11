import React from "react";

function Youtube() {
  return (
    <div className="youtube-player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Mk5KNS3MHbg?autoplay=1&mute=1&si=2ylqxAgbsr3lWrjK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Youtube;
