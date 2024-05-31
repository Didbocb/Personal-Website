import React, { useEffect } from 'react';

export default function Projects({ data, setDocumentTitle }) {
    useEffect(() => {
        setDocumentTitle("Projects");
    }, [setDocumentTitle]);

    return (
        <div className="projects">
            <h1>Projects Page</h1>
            {/* Projects page content */}
        </div>
    );
}
