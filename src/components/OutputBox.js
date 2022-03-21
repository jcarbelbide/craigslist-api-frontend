import React, {useEffect, useState} from 'react';
import {OutputBoxStyled} from "./OutputBox.styled";

function OutputBox(props) {

    return (
        <OutputBoxStyled>
            {PrettyPrintJson(props.jsonItems)}
        </OutputBoxStyled>
    )

}

const PrettyPrintJson = (data) => {
    // (destructured) data could be a prop for example
    return (<div><pre>{ JSON.stringify(data, null, 2) }</pre></div>);
}

export default OutputBox;
