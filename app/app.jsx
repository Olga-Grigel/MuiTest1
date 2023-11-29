const ReactDOM = require("react-dom/client");
import * as React from 'react';
import Button from '@mui/material/Button';

function ButtonUsage() {
    return <Button variant="contained">Hello world</Button>;
  }


ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <ButtonUsage />
);
