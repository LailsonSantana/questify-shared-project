import React from 'react';

interface VideoProps {
    source: string;
}

const VideoComponent: React.FC<VideoProps> = ({ source }) => {
    return (
        <div>
            <video className="w-full" controls>
                <source src={source} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoComponent;
