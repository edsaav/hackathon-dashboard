import { QuestionCard } from './QuestionCard';

import * as S from './styles';

export const Questions = () => {
  return (
    <S.QuestionSection>
      <S.Header>Answer more questions</S.Header>
      <S.Questions>
        <QuestionCard question='Heart health survey' />
        <QuestionCard question='People aged 35-40 with a chronic condition survey' />
        <QuestionCard question='Answer more questions about your exercising habits' />
      </S.Questions>
    </S.QuestionSection>
  )
}