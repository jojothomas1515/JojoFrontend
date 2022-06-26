import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";


function Linkitems({name, href, classes = "", wildcard = true}) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({path: `${resolvedPath.pathname}/${wildcard ? '*' : ''}`, end: true})

    return (
        <Link to={href} className={`${classes} ${isActive ? 'active' : ''}`} >{name}</Link>

    );
}

export default Linkitems;
