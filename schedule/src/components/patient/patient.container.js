import axios from "axios";
import PatientPresenter from "./patient.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PatientContainer() {
    const [patient, setPatient] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [patientSearch, setPatientSearch] = useState('');
    const [selectedPatientDetail, setSelectedPatientDetail] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, setValue, reset} = useForm();

    const onClickPatientInquiry = async () => {
        const response = await axios.get("http://localhost:8080/patient/list");
        setPatient(response.data.data);
    };

    const handleSelectPatient = (id) => {
        const selectedPatient = patient.find((el) => el.patientId === id);
        setSelectedPatientId(id)
        setSelectedPatientDetail(selectedPatient);
    };

    const handlePatientSearch = (event) => {
        setPatientSearch(event.target.value)
    };

    const filteredPatients = patient.filter((el) =>
        el.name.includes(patientSearch)
    );

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        reset();
    }

    const onClickSubmit = async (data) => {
        console.log(data);
        // const request = await axios.post("http://localhost:8080/patient/reg")
    }


    return (
        <PatientPresenter 
            onClickPatientInquiry={onClickPatientInquiry}
            patient={filteredPatients}
            selectedPatientId={selectedPatientId}
            handleSelectPatient={handleSelectPatient}
            patientSearch={patientSearch}
            handlePatientSearch={handlePatientSearch}
            selectedPatientDetail={selectedPatientDetail}
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            register={register}
            handleSubmit={handleSubmit}
            setValue={setValue}
            onClickSubmit={onClickSubmit}
        />
    )
}