import { H4 } from '@everlywell/leaves';
import { Banner } from '../Banner';
import { Order } from '../Order';
// import { Order } from '../Order';
import { Upcoming } from '../Upcoming';
import * as S from './styles';

export const Container = ({name, imgSrc, price }) => {
  return (
    <S.Wrapper>
      <S.Col>
        <Banner />
        {/* <H4>You have 3 unclaimed credits</H4> */}
        <S.Content>
          <S.Subheader>Upcoming tests</S.Subheader>
          <S.Tests>
            <S.Upcoming>
              <Order name='HbA1c Test' imgSrc='images/hBox.png' upcoming={true} details='Measure 3 hormones that affect your weight and energy.' />
              <Order name='Metabolism Test' imgSrc='images/hBox.png' upcoming={true} details='Measure blood sugar levels to better understand your body’s glycemic control.' />
            </S.Upcoming>
          </S.Tests>
          <S.Subheader>Claimed tests</S.Subheader>
          <S.Tests>
            <S.Upcoming>
              <Order name='HbA1c Test' imgSrc='images/hBox.png' upcoming={false} warning='Your HbA1c level (8.5%) released on 04/04/2022 is higher than the recommeneded range between 5.7% and 6.5%. ' details='We suggest retesting your HbA1c in 3 months to monitor your levels over time.' />
            </S.Upcoming>
          </S.Tests>
        </S.Content>
      </S.Col>
      <Upcoming />
    </S.Wrapper>
  )
}