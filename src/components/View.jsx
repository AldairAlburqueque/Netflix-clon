import React from 'react';
import './style/view.css'

const View = ({ video, setWatch }) => {

  const handleView = () => {
    setWatch(false)
  }

  return (
    <div className='view_info'>
                {
              video?.results.slice(0,1).map(v => (
                <div className="view_card" key={v.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.key}`} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player">
                  </iframe>
                  
                </div>
              ))
            }
            <i class='bx bx-x-circle' onClick={handleView}></i>
    </div>
  )
}

export default View