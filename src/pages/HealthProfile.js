import { Menu } from "../components/profile/Menu"
import { Answers } from "../components/profile/Answers"
import { Questions } from "../components/profile/Questions"
import { Congrats } from "../components/profile/Congrats"

export const HealthProfile = () => {
  return (
    <>
      <Menu />
      <Answers />
      <Questions />
      <Congrats />
    </>
  )
}
