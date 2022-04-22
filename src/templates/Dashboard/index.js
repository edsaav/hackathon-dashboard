import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LeftNav } from '../../components/LeftNav';
import { Home } from '../../pages/Home';
import { Account } from '../../pages/Account';
import { HealthProfile } from '../../pages/HealthProfile';
import { Memberships } from '../../pages/Memberships';
import { Orders } from '../../pages/Orders';
import { Results } from '../../pages/Results';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <BrowserRouter>
      <S.DashboardContainer>
        <S.LeftColumn>
          <LeftNav />
        </S.LeftColumn>
        <S.RightColumn>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health-profile" element={<HealthProfile />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/results" element={<Results />} />
            <Route path="/settings" element={<Account />} />
            <Route path="/profile" element={<Results />} />
            <Route path="/billing-subscriptions" element={<Results />} />
            <Route path="/data-privacy" element={<Results />} />
          </Routes>
        </S.RightColumn>
      </S.DashboardContainer>
    </BrowserRouter>
  );
};
