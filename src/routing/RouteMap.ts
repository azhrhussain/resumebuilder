import { NewCVRoute, ROOT } from "../configs/routeNames";

interface RouteMapItem {
  path: string,
  exact?: boolean,
  component: string,
}

const RouteMap:Array<RouteMapItem> = [
  { 
    path: ROOT, 
    exact: true, 
    component: 'Dashboard' 
  },
  { 
    path: NewCVRoute, 
    exact: true, 
    component: 'CreateNewCV' 
  },
  { path:'',
    component: 'NotFound' 
  },
];

export default RouteMap;