import { H4 } from '@everlywell/leaves';
// import { Order } from '../Order';
import { Upcoming } from '../Upcoming';
import * as S from './styles';

export const Container = ({name, imgSrc, price }) => {
  return (
    <S.Wrapper>
      <H4>You have 3 unclaimed credits</H4>
      <S.Content>
        {/* <S.Orders>
          <Order name='Thyroid Test' imgSrc='images/thyroidBox.png' price='52.46' />
          <Order name='Food Sensitivity Comprehensive Test' imgSrc='images/fsBox.png' price='52.46' />
          <Order name='Women’s Health Test' imgSrc='images/whBox.png' price='156.46' />
        </S.Orders> */}
        <Upcoming />
      </S.Content>
    </S.Wrapper>
  )
}