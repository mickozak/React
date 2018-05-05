import React from 'react'

const styles = {
    margin: '10px'
}

const User = ({userData}) => {
    return  (
            <div style={styles}>
                <h1></h1>
                <span>
                    <img src={userData.picture.thumbnail} alt={userData.name.first + ' ' + userData.name.last + "'s avatar"} />
                </span>
                <div>
                    Name:<b>{userData.name.first.charAt(0).toUpperCase() + userData.name.first.slice(1)}</b>
                    Surname: <b>{userData.name.last.charAt(0).toUpperCase() + userData.name.last.slice(1)}</b>
                </div>
                <div>
                    E-mail: <a href={'mailto:' + userData.email}>{userData.email}</a>
                </div>
                <hr/>
            </div>
            )
}

export default User