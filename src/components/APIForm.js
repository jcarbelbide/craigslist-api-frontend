import React, {useEffect, useState} from 'react';
import {APIFormStyled} from "./APIForm.styled";
import {TwoColumnFlexboxStyled} from "./TwoColumnFlexbox.styled";
import {FormLabelStyled} from "./FormLabel.styled";

function APIForm(props) {
    const [location, setLocation] = useState("sfbay")
    const [subLocation, setSubLocation] = useState("all")
    const [board, setBoard] = useState("sss")
    const [startingIndex, setStartingIndex] = useState("0")
    const [query, setQuery] = useState("mountain bike")

    const sendDataToParent = () => {
        props.handleRequest(location, subLocation, board, startingIndex, query)
    }

    return (
        <div>
            <TwoColumnFlexboxStyled>
                <APIFormStyled>
                    <FormLabelStyled>Location</FormLabelStyled>
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)}/>

                    <FormLabelStyled>Sub-Location</FormLabelStyled>
                    <input type="text" value={subLocation} onChange={e => setSubLocation(e.target.value)}/>

                    <FormLabelStyled>Board</FormLabelStyled>
                    {getBoardOptions(board, setBoard)}

                </APIFormStyled>

                <APIFormStyled>
                    <FormLabelStyled>Starting Index</FormLabelStyled>
                    <input type="text" value={startingIndex} onChange={e => setStartingIndex(e.target.value)}/>

                    <FormLabelStyled>Search Query</FormLabelStyled>
                    <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>

                </APIFormStyled>
            </TwoColumnFlexboxStyled>
            <button onClick={sendDataToParent}>Request API</button>
        </div>
    )
}

function getBoardOptions(board, setBoard) {
    return (
        <select defaultValue={board} onChange={e => setBoard(e.target.value)}>
            <option>sss</option>
            <option>ccc</option>
            <option>bbb</option>
            <option>hhh</option>
            <option>jjj</option>
            <option>ggg</option>
            <option>rrr</option>
        </select>
    )
}

export default APIForm;
