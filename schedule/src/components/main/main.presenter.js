import { Input } from 'antd'
import * as S from './main.styles'

export default function MainPresenter() {
    return (
        <S.MainBox>
            <S.MenuBox>
                <S.InputBox>
                    <S.InputForm>
                        <S.PatientInput placeholder='환자명을 입력해주세요' />
                        <S.PatientButton>검색</S.PatientButton>
                    </S.InputForm>
                </S.InputBox>
                <S.AdminButton>관리자 모드</S.AdminButton>
                
            </S.MenuBox>
            메인 페이지
        </S.MainBox>
    )
}