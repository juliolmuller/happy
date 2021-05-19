import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageForm from './pages/OrphanageForm'
import OrphanageDetails from './pages/OrphanageDetails'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/new" component={OrphanageForm} />
        <Route path="/orphanages/:id" component={OrphanageDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
