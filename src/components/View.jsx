import React from "react";
import "./style/view.css";

const View = ({ video, setWatch }) => {
  const handleView = () => {
    setWatch(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setWatch(false);
    }
  };

  return (
    <div className="view_info" onClick={handleBackgroundClick}>
      <div className="view_card">
        {video?.results?.slice(0, 1).map((v) => (
          <iframe
            key={v.id}
            src={`https://www.youtube.com/embed/${v.key}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}

        <button
          className="view_close"
          onClick={handleView}
          aria-label="Cerrar reproductor"
        >
          <i className="bx bx-x"></i>
        </button>
      </div>
    </div>
  );
};

export default View;
