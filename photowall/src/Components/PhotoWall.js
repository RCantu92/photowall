import React from 'react';
import Photo from './Photo.js';

function PhotoWall(props) {
    return (
        <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
        </div>
    )
}

export default PhotoWall