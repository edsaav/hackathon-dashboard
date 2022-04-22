import { Menu } from '../components/Profile/Menu';
import { Answers } from '../components/Profile/Answers';
import { Questions } from '../components/Profile/Questions';
import { Congrats } from '../components/Profile/Congrats';

export const HealthProfile = () => {
  return (
    <>
      <Menu />
      <Answers />
      <Questions />
      <Congrats />
    </>
  );
};
