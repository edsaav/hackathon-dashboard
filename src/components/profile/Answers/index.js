import { Answer } from './Answer';
import * as S from './styles';

export const Answers = () => {
  return (
    <S.Answers>
      <Answer question='Weight' />
      <Answer question='Height' answer='5ft 5in' />
      <Answer question='Race' answer='Asian' />
      <Answer question='Ethnicity' answer='Not Hispanic or Latino' />
      <Answer question='Height' answer='5ft 5in' />
      <Answer question='Race' answer='Asian' />
      <Answer question='Ethnicity' answer='Not Hispanic or Latino' />
    </S.Answers>
  )
}