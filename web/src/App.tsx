import { BrowserRouter, Route, Routes } from 'react-router';

import { Landing, OrphanageDetails, OrphanageForm, OrphanagesMap } from './pages';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<OrphanagesMap />} />
        <Route path="/orphanages/new" element={<OrphanageForm />} />
        <Route path="/orphanages/:id" element={<OrphanageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
