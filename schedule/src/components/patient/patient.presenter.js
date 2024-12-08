import * as S from './patient.styles'

export default function PatientPresenter(props) {
    return (
        <S.PatientBox>
            <S.PatientListBox>
                {props.patient &&
                    props.patient.map((el, index) => {
                        return (
                            <S.PatientItem key={index} onClick={() => props.handleSelectPatient(index)} isSelected={props.selectedPatient === index}>
                                {el.name}
                            </S.PatientItem>
                        )
                    })    
                }
            </S.PatientListBox>
            <S.PatientButtonBox>
                <S.PatientButton onClick={props.onClickPatientInquiry}>환자 조회</S.PatientButton>
                <S.PatientButton>환자 등록</S.PatientButton>
            </S.PatientButtonBox>
            
        </S.PatientBox>
    )
}