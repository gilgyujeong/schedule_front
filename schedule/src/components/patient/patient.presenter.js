import Modal from 'antd/es/modal/Modal'
import * as S from './patient.styles'

export default function PatientPresenter(props) {
    return (
        <S.PatientBox>
            <S.PatientLeftInnerBox>
                {props.selectedPatientDetail &&
                    <S.PatientModalBox>
                        <S.PatientModalItem>이름: {props.selectedPatientDetail.name}</S.PatientModalItem>
                        <S.PatientModalItem>나이: {props.selectedPatientDetail.age}</S.PatientModalItem>
                        <S.PatientModalItem>성별: {props.selectedPatientDetail.gender}</S.PatientModalItem>
                        <S.PatientModalItem>발병일: {props.selectedPatientDetail.onset}</S.PatientModalItem>
                        <S.PatientModalItem>입원일: {props.selectedPatientDetail.createAt}</S.PatientModalItem>
                        <S.PatientModalItem>비매너 점수: {props.selectedPatientDetail.nonManner}</S.PatientModalItem>
                        <S.PatientModalItem>체격레벨: {props.selectedPatientDetail.physical}</S.PatientModalItem>
                    </S.PatientModalBox>
                }
            </S.PatientLeftInnerBox>
            <S.PatientRightInnerBox>
                <S.PatientSearchInput 
                    type='text'
                    placeholder='환자명을 입력해주세요'
                    value={props.patientSearch}
                    onChange={props.handlePatientSearch}
                />
                <S.PatientListBox>
                    {props.patient &&
                        props.patient.map((el) => {
                            return (
                                <S.PatientItem 
                                    key={el.patientId} 
                                    onClick={() => props.handleSelectPatient(el.patientId)} 
                                    isSelected={props.selectedPatientId === el.patientId}
                                >
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
            </S.PatientRightInnerBox>

        </S.PatientBox>
    )
}