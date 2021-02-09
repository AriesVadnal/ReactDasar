import React from 'react'
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/K7_H5k3fRYQ/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCOGjadk-3BhWsZ3Rd36wQ6-KXttw" alt=""/>
    <p className="time">{props.time}</p>
            </div>
    <p className="title">{props.title}</p>
    <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
   time : '00.00',
   title : 'Title herer',
   desc : 'Desc heere'
}

export default YouTubeComp;