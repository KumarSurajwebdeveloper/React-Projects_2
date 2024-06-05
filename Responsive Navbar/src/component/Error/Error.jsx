import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Page Not Found</h1>
            <p style={styles.paragraph}>Error: 404 - Not Found</p>
        </div>
    );
};

// Define styles as an object
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    heading: {
        fontSize: '36px',
        color: 'red',
        textTransform: 'uppercase',
    },
    paragraph: {
        fontSize: '24px',
        color: 'gray',
    },
};

export default NotFoundPage;
