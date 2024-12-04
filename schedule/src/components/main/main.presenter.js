import { Input } from 'antd'
import * as S from './main.styles'

export default function MainPresenter() {
    return (
        <S.MainBox>
            <S.MenuBox>
                <form>
                    <S.InputBox />
                    메뉴
                </form>
                
            </S.MenuBox>
            메인 페이지
        </S.MainBox>
    )
}