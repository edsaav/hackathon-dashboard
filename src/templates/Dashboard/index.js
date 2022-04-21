import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <S.Sidebar />
        <S.DashboardContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Account />} />
            <Route path="/health-profile" element={<HealthProfile />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </S.DashboardContentContainer>
      </S.DashboardContainer>
    </BrowserRouter>
  )
}