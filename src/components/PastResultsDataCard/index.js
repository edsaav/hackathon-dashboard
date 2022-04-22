import * as S from './styles';

export const PastResultsDataCard = () => {
  return (
    <S.Container>
      <S.CholesterolOverTime
        src="images/cholesterolOverTime.png"
        alt="cholesterol-over-time-graph"
      />
      <S.PastCholesterolAndLipidsTest
        src="images/pastCholesterolAndLipidsTest.png"
        alt="past-cholesterol-and-lipids-test-data"
      />
    </S.Container>
  );
};
