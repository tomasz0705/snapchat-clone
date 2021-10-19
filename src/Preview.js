import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCameraImage } from './features/cameraSlice';
import "./Preview.css";

function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();

    useEffect(() => {
        if (!cameraImage) {
            history.replace("/");
        }
    }, [cameraImage, history]);

    return (
        <div className="preview">
            <h2>THIS IS YOUR PREVIEW</h2>
            <img src={cameraImage} alt="yourphoto" />
        </div>
    )
}

export default Preview
