import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
    color: gray;
`

export const MenuBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InputBox = styled.div`
    width: 100%;
`

export const InputForm = styled.form`

`

export const PatientInput = styled(Input)`
    width: 15vw;
    margin: 10px;
`

export const PatientButton = styled(Button)`
    width: 5vw;
`

export const AdminButton = styled(Button)`
    width: 7vw;
    margin: 10px;
`


export const ScheduleBox = styled.div`

`