import React, { useState } from 'react';

const ProgressBar = () => {
    const [ progress, setProgress ] = useState(20);

    const increaseProgress = () => {
        setProgress((prevState) => {
            return prevState >= 100 ? 0 : prevState + 20
        })
    }

    return (
        <div>
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {`${progress}%`}
                </div>
            </div>
            <button onClick={increaseProgress}>Increase</button>
        </div>
    )
}
export default ProgressBar;