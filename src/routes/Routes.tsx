import { RouteObject } from 'react-router';
import AppHome from '../layouts/AppHome';

/**
 * This file must be tsx to allow element to be a JSX element.
 *
 * The routing of the app should be configured here.
 */
const routes: RouteObject[] = [{ path: '/', element: <AppHome /> }];

export default routes;
