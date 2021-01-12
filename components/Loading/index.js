import React from 'react'
const loadingImg =
    'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg'
const Loading = () => {
    return (
        <img
            src={loadingImg}
            alt="Loading..."
            style={{
                position: 'absolute',
                left: '50%',
                top: '35%',
                transform: 'translate(-50%)'
            }}
        />
    )
}
export default Loading
