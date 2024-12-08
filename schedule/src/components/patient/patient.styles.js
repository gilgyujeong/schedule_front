const { default: styled } = require("@emotion/styled");
const { Button } = require("antd");

export const PatientBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

export const PatientListBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 1px;
`

export const PatientItem = styled.div`
    width: 10vw;
    padding: 5px;
    color: gray;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "#d3f9d8" : "white")};
    border: ${(props) => (props.isSelected ? "1px solid green" : "1px solid black")};

`

export const PatientButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const PatientButton = styled(Button)`
    width: 7vw;
    margin: 10px;
`