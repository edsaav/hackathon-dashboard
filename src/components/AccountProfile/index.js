import { H4, ShippingInformation } from '@everlywell/leaves';
import * as S from './styles';

export const DTC_STATES = [
  [0, '', ''],
  [3524, 'Alaska', 'AK'],
  [3525, 'Alabama', 'AL'],
  [3526, 'Arkansas', 'AR'],
  [3528, 'Arizona', 'AZ'],
  [3529, 'California', 'CA'],
  [3530, 'Colorado', 'CO'],
  [3531, 'Connecticut', 'CT'],
  [3532, 'District of Columbia', 'DC'],
  [3533, 'Delaware', 'DE'],
  [3534, 'Florida', 'FL'],
  [3535, 'Georgia', 'GA'],
  [3537, 'Hawaii', 'HI'],
  [3538, 'Iowa', 'IA'],
  [3539, 'Idaho', 'ID'],
  [3540, 'Illinois', 'IL'],
  [3541, 'Indiana', 'IN'],
  [3542, 'Kansas', 'KS'],
  [3543, 'Kentucky', 'KY'],
  [3544, 'Louisiana', 'LA'],
  [3545, 'Massachusetts', 'MA'],
  [3546, 'Maryland', 'MD'],
  [3547, 'Maine', 'ME'],
  [3548, 'Michigan', 'MI'],
  [3549, 'Minnesota', 'MN'],
  [3550, 'Missouri', 'MO'],
  [3552, 'Mississippi', 'MS'],
  [3553, 'Montana', 'MT'],
  [3554, 'North Carolina', 'NC'],
  [3555, 'North Dakota', 'ND'],
  [3556, 'Nebraska', 'NE'],
  [3557, 'New Hampshire', 'NH'],
  [3558, 'New Jersey', 'NJ'],
  [3559, 'New Mexico', 'NM'],
  [3560, 'Nevada', 'NV'],
  [3561, 'New York', 'NY'],
  [3562, 'Ohio', 'OH'],
  [3563, 'Oklahoma', 'OK'],
  [3564, 'Oregon', 'OR'],
  [3565, 'Pennsylvania', 'PA'],
  [3567, 'Rhode Island', 'RI'],
  [3568, 'South Carolina', 'SC'],
  [3569, 'South Dakota', 'SD'],
  [3570, 'Tennessee', 'TN'],
  [3571, 'Texas', 'TX'],
  [3573, 'Utah', 'UT'],
  [3574, 'Virginia', 'VA'],
  [3576, 'Vermont', 'VT'],
  [3577, 'Washington', 'WA'],
  [3578, 'Wisconsin', 'WI'],
  [3579, 'West Virginia', 'WV'],
  [3580, 'Wyoming', 'WY'],
];

export const shippableStates = DTC_STATES.map(([, value, id]) => ({
  id,
  value,
}));

export const AccountProfile = () => {
  return (
    <>
      <H4>Profile</H4>
      <S.ShippingInfoContainer>
        <ShippingInformation
          showHeader={false}
          errors={[]}
          register={() => console.log('register')}
          setValue={() => console.log('set value')}
          inputPrefix={''}
          shippableStates={shippableStates}
        />
      </S.ShippingInfoContainer>
      <div>
        <S.StyledButton appearance="secondary" disabled={true}>
          Save
        </S.StyledButton>
        <S.StyledButton appearance="secondary">Cancel</S.StyledButton>
      </div>
    </>
  );
};
