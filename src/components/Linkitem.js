import React from 'react';
import {Link, useResolvedPath, useMatch} from "react-router-dom";


function Linkitem({name, href, classes = ""}) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    console.log(resolvedPath)

    return (
        <li><Link to={href} className={`nav-btn ${classes} ${isActive ? 'active':''}`}>{name}</Link></li>

    );
}

export default Linkitem;
