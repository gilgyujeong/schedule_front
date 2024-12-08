import axios from "axios";
import PatientPresenter from "./patient.presenter";
import { useState } from "react";

export default function PatientContainer() {
    const [patient, setPatient] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const onClickPatientInquiry = async () => {
        const response = await axios.get("http://localhost:8080/patient/list");
        setPatient(response.data.data);
    }

    const handleSelectPatient = (index) => {
        setSelectedPatient(index)
    }

    return (
        <PatientPresenter 
            onClickPatientInquiry={onClickPatientInquiry}
            patient={patient}
            selectedPatient={selectedPatient}
            handleSelectPatient={handleSelectPatient}
        />
    )
}