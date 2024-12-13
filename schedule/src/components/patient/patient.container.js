import axios from "axios";
import PatientPresenter from "./patient.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PatientContainer() {
    const [patient, setPatient] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [patientSearch, setPatientSearch] = useState('');
    const [selectedPatientDetail, setSelectedPatientDetail] = useState(null);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
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

    const handleOpenRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };

    const handleCloseRegisterModal = () => {
        setIsRegisterModalOpen(false);
        reset();
    };

    const handleOpenUpdateModal = () => {
        if (selectedPatientId) {
            setIsUpdateModalOpen(true);
            setValue("name", selectedPatientDetail.name);
            setValue("age", selectedPatientDetail.age);
            setValue("gender", selectedPatientDetail.gender);
            setValue("dx", selectedPatientDetail.dx);
            setValue("onset", selectedPatientDetail.onset);
            setValue("createAt", selectedPatientDetail.createAt);
            setValue("physical", selectedPatientDetail.physical);
        } else {
            alert("수정할 환자를 선택해주세요.")
        }
    }

    const handleCloseUpdateModal = () => {
        setIsUpdateModalOpen(false);
        reset();
    }

    const onClickSubmit = async (data) => {
        console.log(data);
        try {
            const requestData = {
                name: data.name,
                age: data.age,
                gender: data.gender,
                dx: data.dx,
                createAt: data.createAt,
                onset: data.onset,
                nonManner: 0,
                physical: data.physical
            };

            const response = await axios.post("http://localhost:8080/patient/reg", requestData);
            handleCloseRegisterModal();
            await onClickPatientInquiry();
            alert("환자 등록에 성공했습니다.")
        } catch {
            alert("환자 등록에 실패했습니다.")
        }
    }

    const onclickUpdateSubmit = async (data) => {
        try {
            const requestData = {
                name: data.name,
                age: data.age,
                gender: data.gender,
                dx: data.dx,
                createAt: data.createAt,
                onset: data.onset,
                nonManner: 0,
                physical: data.physical
            };

            const response = await axios.put(`http://localhost:8080/patient/update/${selectedPatientId}`, requestData);
            await onClickPatientInquiry();
            setSelectedPatientDetail(() => ({
                ...data,
            }));

            handleCloseUpdateModal();
            alert("환자 수정에 성공했습니다.");

        } catch {
            alert("환자 수정에 실패했습니다.");
        }
    }

    const onClickPatientOut = async () => {
        const response = await axios.patch(`http://localhost:8080/patient/out/${selectedPatientId}`)
        await onClickPatientInquiry();
        alert("환자가 퇴원처리 되었습니다.")
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
            isRegisterModalOpen={isRegisterModalOpen}
            handleOpenRegisterModal={handleOpenRegisterModal}
            handleCloseRegisterModal={handleCloseRegisterModal}
            isUpdateModalOpen={isUpdateModalOpen}
            handleOpenUpdateModal={handleOpenUpdateModal}
            handleCloseUpdateModal={handleCloseUpdateModal}
            register={register}
            handleSubmit={handleSubmit}
            setValue={setValue}
            onClickSubmit={onClickSubmit}
            onclickUpdateSubmit={onclickUpdateSubmit}
            onClickPatientOut={onClickPatientOut}
        />
    )
}