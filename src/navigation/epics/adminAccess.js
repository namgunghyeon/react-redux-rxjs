import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import * as ActionTypes from '../ActionTypes';
import { accessDenied } from '../actions';

export default function adminAccess(action$) {
  return action$.ofType(ActionTypes.CHECKED_ADMIN_ACCESS)
    .delay(2000)
    .mergeMap(() => Observable.merge(
      Observable.of(accessDenied()),
      Observable.timer(2000)
        .map(() => push('/'))
    ));
}
