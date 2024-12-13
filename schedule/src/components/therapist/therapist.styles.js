import styled from "@emotion/styled"
import { Button } from "antd"

export const TherapistBox = styled.div`
    display: flex;
    height: 95vh;
    flex-direction: row;
    border: 1px solid black;
`

export const TherapistLeftInnerBox = styled.div`
    width: 70%;
    border: 1px solid black;
    background-color: white;
`

export const TherapistRightInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid black;
    background-color: white;
`

export const TherapistSearchInput = styled.input`
    width: 95%;
    margin: 10px auto;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    display: block;
    background-color: white;
`

export const TherapistListBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1px;
`

export const TherapistItem = styled.div`
    width: 10vw;
    padding: 5px;
    margin: 5px 12px;
    border-radius: 3px;
    color: gray;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "#d3f9d8" : "white")};
    border: ${(props) => (props.isSelected ? "1px solid green" : "1px solid black")};
`

export const TherapistButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const TherapistButton = styled(Button)`
    width: 20%;
    margin: 10px;
`