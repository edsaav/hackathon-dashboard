import { MenuItem } from './MenuItem';
import * as S from './styles';

export const Menu = () => {
  return (
    <S.Menu>
      <MenuItem item='Personal details' number='1' selected={true} />
      <MenuItem item='Health history' />
      <MenuItem item='Lifestyle habits' />
      <MenuItem item='Goals' />
    </S.Menu>
  )
}