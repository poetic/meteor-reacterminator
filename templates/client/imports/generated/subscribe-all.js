import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import _ from 'lodash';

// this funciton return a reactive var
function subscribeAll (subscriptions) {
  if (_.size(subscriptions) === 0) {
    return new ReactiveVar(true);
  }

  const ready = new ReactiveVar(false);

  Tracker.autorun(() => {
    if (Meteor.user()) {
      if (ready.get()) {
        return;
      }

      Tracker.nonreactive(() => {
        subscribeAllWithCallback(subscriptions, () => {
          ready.set(true);
        });
      })
    } else {
      ready.set(false);
    }
  });

  return ready;
}

function subscribeAllWithCallback(ids, callback) {
  const readyFlags = _.map(ids, _.constant(false));
  _.each(ids, (id, index) => {
    Meteor.subscribe(id, function () {
      readyFlags[index] = true;
      if (_.every(readyFlags)) {
        callback();
      }
    });
  })
}

export default subscribeAll;
