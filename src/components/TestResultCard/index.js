import * as S from './styles';

export const TestResultCard = () => {
  return (
    <S.Container>
      <S.CholesterolLipidsTest
        src="images/cholesterolLipidsTest.png"
        alt="cholesterol-lipids-test"
      />
      <S.ResultsReleased
        src="images/resultsReleased.png"
        alt="results-released"
      />
      <div>
        <S.LiveWebinar
          src="images/liveWebinarAndQA.png"
          alt="live-webinar-qa"
        />
        <S.ScheduleAConsult
          src="images/scheduleAConsult.png"
          alt="schedule-a-consult"
        />
      </div>
      <S.HideYourNextSteps
        src="images/hideYourNextSteps.png"
        alt="hide-your-next-steps"
      />
    </S.Container>
  );
};
