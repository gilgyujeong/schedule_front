import { useState } from "react";
import TherapistPresenter from "./therapist.presenter";
import axios from "axios";

export default function TherapistContainer() {
    const [therapist, setTherapist] = useState([]);
    const [selectedTherapistId, setSelectedTherapistId] = useState(null);
    const [selectedTherapistDetail, setSelectedTherapistDetail] = useState(null);

    const onClickTherapistInquiry = async () => {
        const response = await axios.get("http://localhost:8080/medical/list");
        setTherapist(response.data.data);
        console.log(response.data.data)
    }

    const handleSelectTherapist = (id) => {
        const selectedTherapist = therapist.find((el) => el.medicalId === id)
        setSelectedTherapistId(id);
        setSelectedTherapistDetail(selectedTherapist)

    }

    return (
        <TherapistPresenter 
            therapist={therapist}
            onClickTherapistInquiry={onClickTherapistInquiry}
            handleSelectTherapist={handleSelectTherapist}
            selectedTherapistId={selectedTherapistId}
        />
    )
}