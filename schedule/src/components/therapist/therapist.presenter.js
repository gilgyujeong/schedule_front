import * as S from './therapist.styles'

export default function TherapistPresenter(props) {
    return (
        <S.TherapistBox>
            <S.TherapistLeftInnerBox>

            </S.TherapistLeftInnerBox>
            <S.TherapistRightInnerBox>
                <S.TherapistSearchInput 
                    type='text'
                    placeholder='치료사명을 입력해주세요.'
                />
                    {props.therapist && 
                        props.therapist.map((el) => {
                            return (
                                <S.TherapistItem
                                    key={el.medicalId}
                                    onClick={() => props.handleSelectTherapist(el.medicalId)}
                                    isSelected={props.selectedTherapistId === el.medicalId}
                                >
                                    {el.name}
                                </S.TherapistItem>
                            )
                        })
                    }
                <S.TherapistListBox>

                </S.TherapistListBox>
                <S.TherapistButtonBox>
                    <S.TherapistButton onClick={props.onClickTherapistInquiry}>치료사 조회</S.TherapistButton>
                </S.TherapistButtonBox>
            </S.TherapistRightInnerBox>
        </S.TherapistBox>
    )
}