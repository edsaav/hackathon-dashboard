import * as S from './styles';

export const Answer = ({ question, answer }) => {
  const answered = !!answer;
  return (
    <S.AnswerCard>
      <S.Content answered={answered}>
        <h3>{question}</h3>
        <h4>{answer || ' '}</h4>
      </S.Content>
      {answered ? (
        <a href='#'>edit</a>
      ) : (
        <button>Answer</button>
      )}
    </S.AnswerCard>
  )
}