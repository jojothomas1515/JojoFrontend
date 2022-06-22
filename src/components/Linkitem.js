import React from 'react';
import {Link, useResolvedPath, useMatch} from "react-router-dom";


function Linkitem({name, href, classes = "", wildcard=true}) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({path:`${resolvedPath.pathname}/${wildcard ? '*':''}`, end:true})

    return (
        <li><Link to={href} className={`${classes} ${isActive ? 'active':''}`} >{name}</Link></li>

    );
}

export default Linkitem;
