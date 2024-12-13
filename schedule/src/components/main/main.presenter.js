import * as S from './main.styles';

export default function MainPresenter(props) {

    return (
        <S.MainBox>
            <S.MenuBox>
                <S.InputBox>
                    <S.InputForm>
                        <S.PatientInput placeholder='환자명을 입력해주세요' />
                        <S.PatientButton>검색</S.PatientButton>
                    </S.InputForm>
                </S.InputBox>
                <S.AdminButton onClick={props.onClickPatientButton}>환자 관리</S.AdminButton>
                <S.AdminButton onClick={props.onClickTherapistButton}>치료사 관리</S.AdminButton>
                <S.AdminButton onClick={props.onClickAdminButton}>관리자 모드</S.AdminButton>
            </S.MenuBox>
            <div ref={props.gridRef}></div>
        </S.MainBox>
    )
}