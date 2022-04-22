import * as S from './styles';

export const MenuItem = ({ item, number, selected=false }) => {
  return (
    <S.MenuItem selected ={selected}>
      {item}
      {number && (
        <span>{number}</span>
      )}
    </S.MenuItem>
  )
}