import React from 'react'
const loadingImg =
    'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg'
const Loading = () => {
    return (
        <div
            className="spinner"
            style={{
                position: 'absolute',
                left: '50%',
                top: '35%',
                transform: 'translate(-50%)'
            }}
        >
            {' '}
            <img src={loadingImg} alt="Loading..." />{' '}
        </div>
    )
}
export default Loading
