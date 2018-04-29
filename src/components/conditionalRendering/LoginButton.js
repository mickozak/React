import React from 'react'

const styles = {
    btn: {
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#4FC3F7',
        color: '#FFFFFF'
    }
}

const LoginButton = (props) => (
    <button style={styles.btn}>
        Login
    </button>
)

export default LoginButton