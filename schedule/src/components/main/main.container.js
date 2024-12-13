import React, { useRef, useEffect } from "react";
import { Grid } from 'gridjs'
import "gridjs/dist/theme/mermaid.css"; 
import MainPresenter from "./main.presenter";
import { useRouter } from "next/router";

export default function MainContainer() {
    const gridRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (gridRef.current) {
            new Grid({
                columns: ["Time", "치료사1", "치료사2", "치료사3", "치료사4", "치료사5"],
                data: [
                    ["09:00 ~ 09:30", "환자1", "환자2", "환자3", "환자4", "환자5"],
                    ["09:30 ~ 10:00", "환자2", "환자3", "환자4", "환자5", "환자6"],
                    ["10:10 ~ 10:40", "환자3", "환자4", "환자5", "환자6", "환자1"],
                    ["10:40 ~ 11:10", "환자4", "환자5", "환자6", "환자1", "환자2"],
                    ["11:20 ~ 11:50", "환자5", "환자6", "환자1", "환자2", "환자3"],
                    ["11:50 ~ 12:20", "환자6", "환자1", "환자2", "환자3", "환자4"],
                    ["13:30 ~ 14:00", "환자0", "환자0", "환자0", "환자0", "환자0"],
                    ["14:00 ~ 14:30", "환자0", "환자0", "환자0", "환자0", "환자0"],
                    ["14:40 ~ 15:10", "환자0", "환자0", "환자0", "환자0", "환자0"],
                    ["15:10 ~ 15:40", "환자0", "환자0", "환자0", "환자0", "환자0"],
                    ["15:50 ~ 16:20", "환자0", "환자0", "환자0", "환자0", "환자0"],
                    ["16:20 ~ 16:50", "환자0", "환자0", "환자0", "환자0", "환자0"],
                    ["16:50 ~ 17:20", "환자0", "환자0", "환자0", "환자0", "환자0"],

                ],
                search: false,
                sort: false,
                // pagination: {
                //     enabled: false,
                //     limit: 13,
                // },
            }).render(gridRef.current);
        }
    }, []);

    const onClickAdminButton = () => {
        router.push("/admin");
    }

    const onClickPatientButton = () => {
        router.push("/patient");
    }

    const onClickTherapistButton = () => {
        router.push("/therapist");
    }

    return (
        <MainPresenter 
            gridRef={gridRef}
            onClickAdminButton={onClickAdminButton}
            onClickPatientButton={onClickPatientButton}
            onClickTherapistButton={onClickTherapistButton}
        />
    )
}