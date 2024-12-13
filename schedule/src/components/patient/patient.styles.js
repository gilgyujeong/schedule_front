const { default: styled } = require("@emotion/styled");
const { Button, Select, DatePicker } = require("antd");

export const PatientBox = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
`

export const PatientLeftInnerBox = styled.div`
    width: 70%;
    border: 1px solid black;
    background-color: white;
`

export const PatientRightInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid black;
    background-color: white;
`

export const PatientSearchInput = styled.input`
    width: 95%;
    margin: 10px auto;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    display: block;
    background-color: white;
`;

export const PatientListBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1px;
    height: 82vh;
`

export const PatientItem = styled.div`
    width: 10vw;
    padding: 5px;
    margin: 5px 12px;
    border-radius: 3px;
    color: gray;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "#d3f9d8" : "white")};
    border: ${(props) => (props.isSelected ? "1px solid green" : "1px solid black")};
`

export const PatientInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const PatientInfoItem = styled.div`
    width: 12vw;
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
    color: gray;
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

export const PatientModalBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const PatientModalInput = styled.input`
    width: 15vw;
    margin: 7px;
    padding: 5px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    background-color: white;
    color: gray;
    display: block;
`

export const PatientModalComboBox = styled(Select)`
    width: 15vw;
    margin: 7px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    display: block;

    .ant-select-selector {
        border: none !important;
        color: gray !important;
    }
`

export const PatientModalDate = styled(DatePicker)`
    width: 15vw;
    margin: 7px;
    padding: 5px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    color: gray;
    display: block;
`