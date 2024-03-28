import React from 'react';

const YouTubeVideo = () => {
  return (
    <div className='d-flex justify-align-center'>
      <iframe
      className=''
        width="288"
        height="600"
        src="https://www.youtube.com/embed/7oKGRYMHzFM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;