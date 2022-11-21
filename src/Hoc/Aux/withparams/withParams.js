import React, { useRef } from "react";
import { useParams, useLocation } from 'react-router-dom';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} location={useLocation()} />;
}

export default withParams;
