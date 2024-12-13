import Modal from 'antd/es/modal/Modal'
import * as S from './patient.styles'
import { Select } from 'antd'

export default function PatientPresenter(props) {
    return (
        <S.PatientBox>
            <S.PatientLeftInnerBox>
                {props.selectedPatientDetail &&
                    <S.PatientInfoBox>
                        <S.PatientInfoItem>이름: {props.selectedPatientDetail.name}</S.PatientInfoItem>
                        <S.PatientInfoItem>나이: {props.selectedPatientDetail.age}</S.PatientInfoItem>
                        <S.PatientInfoItem>성별: {props.selectedPatientDetail.gender}</S.PatientInfoItem>
                        <S.PatientInfoItem>진단명: {props.selectedPatientDetail.dx}</S.PatientInfoItem>
                        <S.PatientInfoItem>발병일: {props.selectedPatientDetail.onset}</S.PatientInfoItem>
                        <S.PatientInfoItem>입원일: {props.selectedPatientDetail.createAt}</S.PatientInfoItem>
                        <S.PatientInfoItem>비매너 점수: {props.selectedPatientDetail.nonManner}</S.PatientInfoItem>
                        <S.PatientInfoItem>체격레벨: {props.selectedPatientDetail.physical}</S.PatientInfoItem>
                    </S.PatientInfoBox>
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
                    <S.PatientButton onClick={props.handleOpenModal}>환자 등록</S.PatientButton>
                    <S.PatientButton>환자 수정</S.PatientButton>
                    <S.PatientButton>퇴원 처리</S.PatientButton>
                </S.PatientButtonBox>
            </S.PatientRightInnerBox>
            {props.isModalOpen && (
                <Modal
                    title="환자 등록"
                    open={props.isModalOpen}
                    onCancel={props.handleCloseModal}
                    onOk={props.handleSubmit(props.onClickSubmit)}
                    okText='등록'
                    cancelText='취소'
                >
                    <form>
                        <S.PatientModalInput type='text' placeholder='환자명을 입력해주세요' {...props.register("name")} />
                        <S.PatientModalInput type='text' placeholder='나이를 입력해주세요' {...props.register("age")} />
                        <S.PatientModalComboBox placeholder='성별을 선택해주세요' onChange={(value) => props.setValue("gender", value)} >
                            <Select.Option value="MALE">남성</Select.Option>
                            <Select.Option value="FEMALE">여성</Select.Option>
                            <Select.Option value="OTHER">기타</Select.Option>
                        </S.PatientModalComboBox>
                        <S.PatientModalComboBox placeholder='진단명을 선택해주세요' onChange={(value) => props.setValue("dx", value)}>
                            <Select.Option value="hemorrhage">뇌출혈</Select.Option>
                            <Select.Option value="infarction">뇌경색</Select.Option>
                            <Select.Option value="SCI">척추손상</Select.Option>
                            <Select.Option value="OTHER">기타</Select.Option>

                        </S.PatientModalComboBox>
                        <S.PatientModalDate placeholder='발병일을 선택하세요' format='YYYY-MM-DD' onChange={(date, dateString) => props.setValue("onset", dateString)} />
                        <S.PatientModalDate placeholder='입원일을 선택하세요' format='YYYY-MM-DD' onChange={(date, dateString) => props.setValue("createAt", dateString)} />
                        <S.PatientModalComboBox type='text' placeholder='체격레벨을 선택하세요' onChange={(value) => props.setValue("physical", value)}>
                            <Select.Option value="1">1</Select.Option>
                            <Select.Option value="2">2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                            <Select.Option value="5">5</Select.Option>
                        </S.PatientModalComboBox>
                    </form>
                </Modal>
            )}

        </S.PatientBox>
    )
}