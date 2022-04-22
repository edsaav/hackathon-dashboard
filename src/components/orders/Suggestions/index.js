import { Suggestion } from './Suggestion';

import * as S from './styles';

export const Suggestions = () => {
  return (
    <S.Wrapper>
      <S.Header>Testers like you also bought:</S.Header>
      <Suggestion name='Metabolism Test' price='49' imgSrc='images/metBox.png' />
      <Suggestion name='Food Allergy Test' price='149' imgSrc='images/faBox.png' />
      <Suggestion name='Ovarian Reserve Test' price='49' imgSrc='images/ovBox.png' />
      <S.Button>Explore more products<S.Arrow /></S.Button>
    </S.Wrapper>
  )
}