import { H4 } from '@everlywell/leaves';
import { Order } from '../Order';
import * as S from './styles';

export const Container = ({name, imgSrc, price }) => {
  return (
    <S.Wrapper>
      <H4>Order Summary</H4>
      <S.Orders>
        <Order name='Thyroid Test' imgSrc='images/thyroidBox.png' price='52.46' />
        <Order name='Food Sensitivity Comprehensive Test' imgSrc='images/fsBox.png' price='52.46' />
        <Order name='Women’s Health Test' imgSrc='images/whBox.png' price='156.46' />
      </S.Orders>
    </S.Wrapper>
  )
}