import React, { useEffect } from 'react';

export default function About({ data, setDocumentTitle }) {
    useEffect(() => {
        setDocumentTitle("About");
    }, [setDocumentTitle]);

    return (
        <div className="about">
            <h1>About Page</h1>
            {/* About page content */}
        </div>
    );
}
