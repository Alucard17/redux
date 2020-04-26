function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// tag::RDX-enum-memberships-action[]
var MembershipActionType;

(function (MembershipActionType) {
  MembershipActionType["FETCH_MEMBERSHIP_COMMAND"] = "pubnub/FETCH_MEMBERSHIP_COMMAND";
  MembershipActionType["JOIN_SPACES_COMMAND"] = "pubnub/JOIN_SPACES_COMMAND";
  MembershipActionType["LEAVE_SPACES_COMMAND"] = "pubnub/LEAVE_SPACES_COMMAND";
  MembershipActionType["UPDATE_MEMBERSHIP_COMMAND"] = "pubnub/UPDATE_MEMBERSHIP_COMMAND";
  MembershipActionType["USER_ADDED_TO_SPACE_EVENT"] = "pubnub/USER_ADDED_TO_SPACE_EVENT";
  MembershipActionType["USER_REMOVED_FROM_SPACE_EVENT"] = "pubnub/USER_REMOVED_FROM_SPACE_EVENT";
  MembershipActionType["USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT"] = "pubnub/USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT";
  MembershipActionType["UPDATING_MEMBERSHIP"] = "pubnub/UPDATING_MEMBERSHIP";
  MembershipActionType["MEMBERSHIP_UPDATED"] = "pubnub/MEMBERSHIP_UPDATED";
  MembershipActionType["ERROR_UPDATING_MEMBERSHIP"] = "pubnub/ERROR_UPDATING_MEMBERSHIP";
  MembershipActionType["FETCHING_MEMBERSHIP"] = "pubnub/FETCHING_MEMBERSHIP";
  MembershipActionType["MEMBERSHIP_RETRIEVED"] = "pubnub/MEMBERSHIP_RETRIEVED";
  MembershipActionType["ERROR_FETCHING_MEMBERSHIP"] = "pubnub/ERROR_FETCHING_MEMBERSHIP";
  MembershipActionType["JOINING_SPACES"] = "pubnub/JOINING_SPACES";
  MembershipActionType["SPACES_JOINED"] = "pubnub/SPACES_JOINED";
  MembershipActionType["ERROR_JOINING_SPACES"] = "pubnub/ERROR_JOINING_SPACES";
  MembershipActionType["LEAVING_SPACES"] = "pubnub/LEAVING_SPACES";
  MembershipActionType["SPACES_LEFT"] = "pubnub/SPACES_LEFT";
  MembershipActionType["ERROR_LEAVING_SPACES"] = "pubnub/ERROR_LEAVING_SPACES";
})(MembershipActionType || (MembershipActionType = {})); // end::RDX-enum-memberships-action[]

var joiningSpaces = function joiningSpaces(payload, meta) {
  return {
    type: MembershipActionType.JOINING_SPACES,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-spaces-join[]
// tag::RDX-function-spaces-join-success[]

var spacesJoined = function spacesJoined(payload, meta) {
  return {
    type: MembershipActionType.SPACES_JOINED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-spaces-join-success[]
// tag::RDX-function-spaces-join-error[]

var errorJoiningSpaces = function errorJoiningSpaces(payload, meta) {
  return {
    type: MembershipActionType.ERROR_JOINING_SPACES,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-spaces-join-error[]
// tag::RDX-command-spaces-join[]

var joinSpaces = function joinSpaces(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(joiningSpaces(request, meta));
      pubnub.api.joinSpaces(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorJoiningSpaces(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spacesJoined(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembershipActionType.JOIN_SPACES_COMMAND;
  return thunkFunction;
}; // end::RDX-command-spaces-join[]

var leavingSpaces = function leavingSpaces(payload, meta) {
  return {
    type: MembershipActionType.LEAVING_SPACES,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-spaces-leave[]
// tag::RDX-function-spaces-leave-success[]

var spacesLeft = function spacesLeft(payload, meta) {
  return {
    type: MembershipActionType.SPACES_LEFT,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-spaces-leave-success[]
// tag::RDX-function-spaces-leave-error[]

var errorLeavingSpaces = function errorLeavingSpaces(payload, meta) {
  return {
    type: MembershipActionType.ERROR_LEAVING_SPACES,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-spaces-leave-error[]
// tag::RDX-command-spaces-leave[]

var leaveSpaces = function leaveSpaces(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(leavingSpaces(request, meta));
      pubnub.api.leaveSpaces(_extends({}, request, {
        spaces: request.spaces.map(function (space) {
          return space.id;
        })
      }), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorLeavingSpaces(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spacesLeft(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembershipActionType.LEAVE_SPACES_COMMAND;
  return thunkFunction;
}; // end::RDX-command-spaces-leave[]

var fetchingMembership = function fetchingMembership(payload, meta) {
  return {
    type: MembershipActionType.FETCHING_MEMBERSHIP,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-memberships-fetch[]
// tag::RDX-function-memberships-fetch-success[]

var membershipRetrieved = function membershipRetrieved(payload, meta) {
  return {
    type: MembershipActionType.MEMBERSHIP_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-memberships-fetch-success[]
// tag::RDX-function-memberships-fetch-error[]

var errorFetchingMembership = function errorFetchingMembership(payload, meta) {
  return {
    type: MembershipActionType.ERROR_FETCHING_MEMBERSHIP,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-memberships-fetch-error[]
// tag::RDX-command-memberships-fetch[]

var fetchMemberships = function fetchMemberships(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingMembership(request, meta));
      pubnub.api.getMemberships(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingMembership(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(membershipRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembershipActionType.FETCH_MEMBERSHIP_COMMAND;
  return thunkFunction;
}; // end::RDX-command-memberships-fetch[]

var updatingMemberships = function updatingMemberships(payload, meta) {
  return {
    type: MembershipActionType.UPDATING_MEMBERSHIP,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-memberships-update[]
// tag::RDX-function-memberships-update-success[]

var membershipUpdated = function membershipUpdated(payload, meta) {
  return {
    type: MembershipActionType.MEMBERSHIP_UPDATED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-memberships-update-success[]
// tag::RDX-function-memberships-update-error[]

var errorUpdatingMembership = function errorUpdatingMembership(payload, meta) {
  return {
    type: MembershipActionType.ERROR_UPDATING_MEMBERSHIP,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-memberships-update-error[]
// tag::RDX-command-memberships-update[]

var updateMembership = function updateMembership(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(updatingMemberships(request, meta));
      pubnub.api.updateMemberships(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorUpdatingMembership(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(membershipUpdated(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembershipActionType.UPDATE_MEMBERSHIP_COMMAND;
  return thunkFunction;
}; // end::RDX-command-memberships-update[]

// tag::RDX-enum-memmber-action[]
var MembersActionType;

(function (MembersActionType) {
  MembersActionType["FETCH_MEMBERS_COMMAND"] = "pubnub/FETCH_MEMBERS_COMMAND";
  MembersActionType["UPDATE_MEMBERS_COMMAND"] = "pubnub/UPDATE_MEMBERS_COMMAND";
  MembersActionType["ADD_MEMBERS_COMMAND"] = "pubnub/ADD_MEMBERS_COMMAND";
  MembersActionType["REMOVE_MEMBERS_COMMAND"] = "pubnub/REMOVE_MEMBERS_COMMAND";
  MembersActionType["FETCHING_MEMBERS"] = "pubnub/FETCHING_MEMBERS";
  MembersActionType["MEMBERS_RETRIEVED"] = "pubnub/MEMBERS_RETRIEVED";
  MembersActionType["ERROR_FETCHING_MEMBERS"] = "pubnub/ERROR_FETCHING_MEMBERS";
  MembersActionType["UPDATING_MEMBERS"] = "pubnub/UPDATING_MEMBERS";
  MembersActionType["MEMBERS_UPDATED"] = "pubnub/MEMBERS_UPDATED";
  MembersActionType["ERROR_UPDATING_MEMBERS"] = "pubnub/ERROR_UPDATING_MEMBERS";
  MembersActionType["ADDING_MEMBERS"] = "pubnub/ADDING_MEMBERS";
  MembersActionType["MEMBERS_ADDED"] = "pubnub/MEMBERS_ADDED";
  MembersActionType["ERROR_ADDING_MEMBERS"] = "pubnub/ERROR_ADDING_MEMBERS";
  MembersActionType["REMOVING_MEMBERS"] = "pubnub/REMOVING_MEMBERS";
  MembersActionType["MEMBERS_REMOVED"] = "pubnub/MEMBERS_REMOVED";
  MembersActionType["ERROR_REMOVING_MEMBERS"] = "pubnub/ERROR_REMOVING_MEMBERS";
})(MembersActionType || (MembersActionType = {})); // end::RDX-enum-memmber-action[]

var fetchingMembers = function fetchingMembers(payload, meta) {
  return {
    type: MembersActionType.FETCHING_MEMBERS,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-member-fetch[]
// tag::RDX-function-member-fetch-success[]

var membersRetrieved = function membersRetrieved(payload, meta) {
  return {
    type: MembersActionType.MEMBERS_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-member-fetch-success[]
// tag::RDX-function-member-fetch-error[]

var errorFetchingMembers = function errorFetchingMembers(payload, meta) {
  return {
    type: MembersActionType.ERROR_FETCHING_MEMBERS,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-member-fetch-error[]
// tag::RDX-command-member-fetch[]

var fetchMembers = function fetchMembers(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingMembers(request, meta));
      pubnub.api.getMembers(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingMembers(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(membersRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembersActionType.FETCH_MEMBERS_COMMAND;
  return thunkFunction;
}; // end::RDX-command-member-fetch[]

var updatingMembers = function updatingMembers(payload, meta) {
  return {
    type: MembersActionType.UPDATING_MEMBERS,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-members-update[]
// tag::RDX-function-members-update-success[]

var membersUpdated = function membersUpdated(payload, meta) {
  return {
    type: MembersActionType.MEMBERS_UPDATED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-members-update-success[]
// tag::RDX-function-members-update-error[]

var errorUpdatingMembers = function errorUpdatingMembers(payload, meta) {
  return {
    type: MembersActionType.ERROR_UPDATING_MEMBERS,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-members-update-error[]
// tag::RDX-command-members-update[]

var updateMembers = function updateMembers(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(updatingMembers(request, meta));
      pubnub.api.updateMembers(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorUpdatingMembers(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(membersUpdated(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembersActionType.UPDATE_MEMBERS_COMMAND;
  return thunkFunction;
}; // end::RDX-command-members-update[]

var addingMembers = function addingMembers(payload, meta) {
  return {
    type: MembersActionType.ADDING_MEMBERS,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-member-add[]
// tag::RDX-function-member-add-success[]

var membersAdded = function membersAdded(payload, meta) {
  return {
    type: MembersActionType.MEMBERS_ADDED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-member-add-success[]
// tag::RDX-function-member-add-error[]

var errorAddingMembers = function errorAddingMembers(payload, meta) {
  return {
    type: MembersActionType.ERROR_ADDING_MEMBERS,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-member-add-error[]
// tag::RDX-command-member-add[]

var addMembers = function addMembers(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(addingMembers(request, meta));
      pubnub.api.addMembers(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorAddingMembers(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(membersAdded(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembersActionType.ADD_MEMBERS_COMMAND;
  return thunkFunction;
}; // end::RDX-command-member-add[]

var removingMembers = function removingMembers(payload, meta) {
  return {
    type: MembersActionType.REMOVING_MEMBERS,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-members-remove[]
// tag::RDX-function-members-remove-success[]

var membersRemoved = function membersRemoved(payload, meta) {
  return {
    type: MembersActionType.MEMBERS_REMOVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-members-remove-success[]
// tag::RDX-function-members-remove-error[]

var errorRemovingMembers = function errorRemovingMembers(payload, meta) {
  return {
    type: MembersActionType.ERROR_REMOVING_MEMBERS,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-members-remove-error[]
// tag::RDX-command-members-remove[]

var removeMembers = function removeMembers(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(removingMembers(request, meta));
      pubnub.api.removeMembers(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorRemovingMembers(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(membersRemoved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MembersActionType.REMOVE_MEMBERS_COMMAND;
  return thunkFunction;
}; // end::RDX-command-members-remove[]

// tag::RDX-enum-messages-action[]
var MessageActionType;

(function (MessageActionType) {
  MessageActionType["SEND_MESSAGE_COMMAND"] = "pubnub/SEND_MESSAGE_COMMAND";
  MessageActionType["FETCH_MESSAGE_HISTORY_COMMAND"] = "pubnub/FETCH_MESSAGE_HISTORY_COMMAND";
  MessageActionType["MESSAGE_RECEIVED"] = "pubnub/MESSAGE_RECEIVED";
  MessageActionType["SENDING_MESSAGE"] = "pubnub/SENDING_MESSAGE";
  MessageActionType["MESSAGE_SENT"] = "pubnub/MESSAGE_SENT";
  MessageActionType["ERROR_SENDING_MESSAGE"] = "pubnub/ERROR_SENDING_MESSAGE";
  MessageActionType["FETCHING_MESSAGE_HISTORY"] = "pubnub/FETCHING_MESSAGE_HISTORY";
  MessageActionType["MESSAGE_HISTORY_RETRIEVED"] = "pubnub/MESSAGE_HISTORY_RETRIEVED";
  MessageActionType["ERROR_FETCHING_MESSAGE_HISTORY"] = "pubnub/ERROR_FETCHING_MESSAGE_HISTORY";
})(MessageActionType || (MessageActionType = {})); // end::RDX-enum-messages-action[]

var sendingMessage = function sendingMessage(payload, meta) {
  return {
    type: MessageActionType.SENDING_MESSAGE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-messages-send[]
// tag::RDX-function-messages-send-success[]

var messageSent = function messageSent(payload, meta) {
  return {
    type: MessageActionType.MESSAGE_SENT,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-messages-send-success[]
// tag::RDX-function-messages-send-error[]

var errorSendingMessage = function errorSendingMessage(payload, meta) {
  return {
    type: MessageActionType.ERROR_SENDING_MESSAGE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-messages-send-error[]
// tag::RDX-command-messages-send[]

var sendMessage = function sendMessage(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(sendingMessage(request, meta));
      pubnub.api.publish(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorSendingMessage(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(messageSent(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MessageActionType.SEND_MESSAGE_COMMAND;
  return thunkFunction;
}; // end::RDX-command-messages-send[]

// tag::RDX-enum-signals-action[]
var SignalActionType;

(function (SignalActionType) {
  SignalActionType["SEND_SIGNAL_COMMAND"] = "pubnub/SEND_SIGNAL_COMMAND";
  SignalActionType["SIGNAL_RECEIVED"] = "pubnub/SIGNAL_RECEIVED";
  SignalActionType["SENDING_SIGNAL"] = "pubnub/SENDING_SIGNAL";
  SignalActionType["SIGNAL_SENT"] = "pubnub/SIGNAL_SENT";
  SignalActionType["ERROR_SENDING_SIGNAL"] = "pubnub/ERROR_SENDING_SIGNAL";
})(SignalActionType || (SignalActionType = {})); // end::RDX-enum-signals-action[]

var sendingSignal = function sendingSignal(payload, meta) {
  return {
    type: SignalActionType.SENDING_SIGNAL,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-signals-send[]
// tag::RDX-function-signals-send-success[]

var signalSent = function signalSent(payload, meta) {
  return {
    type: SignalActionType.SIGNAL_SENT,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-signals-send-success[]
// tag::RDX-function-signals-send-error[]

var errorSendingSignal = function errorSendingSignal(payload, meta) {
  return {
    type: SignalActionType.ERROR_SENDING_SIGNAL,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-signals-send-error[]
// tag::RDX-command-signals-send[]

var sendSignal = function sendSignal(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(sendingSignal(request, meta));
      pubnub.api.signal(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorSendingSignal(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(signalSent(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = SignalActionType.SEND_SIGNAL_COMMAND;
  return thunkFunction;
}; // end::RDX-command-signals-send[]

var fetchingMessageHistory = function fetchingMessageHistory(payload, meta) {
  return {
    type: MessageActionType.FETCHING_MESSAGE_HISTORY,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-messagehistory[]
// tag::RDX-function-presence-messagehistory-success[]

var messageHistoryRetrieved = function messageHistoryRetrieved(payload, meta) {
  return {
    type: MessageActionType.MESSAGE_HISTORY_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-messagehistory-success[]
// tag::RDX-function-presence-messagehistory-error[]

var errorFetchingMessageHistory = function errorFetchingMessageHistory(payload, meta) {
  return {
    type: MessageActionType.ERROR_FETCHING_MESSAGE_HISTORY,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-messagehistory-error[]
// tag::RDX-command-presence-messagehistory[]

var fetchMessageHistory = function fetchMessageHistory(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingMessageHistory(request, meta));
      pubnub.api.history(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingMessageHistory(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(messageHistoryRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = MessageActionType.FETCH_MESSAGE_HISTORY_COMMAND;
  return thunkFunction;
}; // end::RDX-command-presence-messagehistory[]

// tag::RDX-enum-space-action[]
var SpaceActionType;

(function (SpaceActionType) {
  SpaceActionType["FETCH_SPACES_COMMAND"] = "pubnub/FETCH_SPACES_COMMAND";
  SpaceActionType["FETCH_SPACE_BY_ID_COMMAND"] = "pubnub/FETCH_SPACE_BY_ID_COMMAND";
  SpaceActionType["CREATE_SPACE_COMMAND"] = "pubnub/CREATE_SPACE_COMMAND";
  SpaceActionType["UPDATE_SPACE_COMMAND"] = "pubnub/UPDATE_SPACE_COMMAND";
  SpaceActionType["DELETE_SPACE_COMMAND"] = "pubnub/DELETE_SPACE_COMMAND";
  SpaceActionType["UPDATING_SPACE"] = "pubnub/UPDATING_SPACE";
  SpaceActionType["SPACE_UPDATED"] = "pubnub/SPACE_UPDATED";
  SpaceActionType["ERROR_UPDATING_SPACE"] = "pubnub/ERROR_UPDATING_SPACE";
  SpaceActionType["DELETING_SPACE"] = "pubnub/DELETING_SPACE";
  SpaceActionType["SPACE_DELETED"] = "pubnub/SPACE_DELETED";
  SpaceActionType["ERROR_DELETING_SPACE"] = "pubnub/ERROR_DELETING_SPACE";
  SpaceActionType["CREATING_SPACE"] = "pubnub/CREATING_SPACE";
  SpaceActionType["SPACE_CREATED"] = "pubnub/SPACE_CREATED";
  SpaceActionType["ERROR_CREATING_SPACE"] = "pubnub/ERROR_CREATING_SPACE";
  SpaceActionType["FETCHING_SPACES"] = "pubnub/FETCHING_SPACES";
  SpaceActionType["SPACES_RETRIEVED"] = "pubnub/SPACES_RETRIEVED";
  SpaceActionType["ERROR_FETCHING_SPACES"] = "pubnub/ERROR_FETCHING_SPACES";
  SpaceActionType["FETCHING_SPACE_BY_ID"] = "pubnub/FETCHING_SPACE_BY_ID";
  SpaceActionType["SPACE_RETRIEVED"] = "pubnub/SPACE_RETRIEVED";
  SpaceActionType["ERROR_FETCHING_SPACE_BY_ID"] = "pubnub/ERROR_FETCHING_SPACE_BY_ID";
  SpaceActionType["SPACE_UPDATED_EVENT"] = "pubnub/SPACE_UPDATED_EVENT";
  SpaceActionType["SPACE_DELETED_EVENT"] = "pubnub/SPACE_DELETED_EVENT";
})(SpaceActionType || (SpaceActionType = {})); // end::RDX-enum-space-action[]

var creatingSpace = function creatingSpace(payload, meta) {
  return {
    type: SpaceActionType.CREATING_SPACE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-create[]
// tag::RDX-function-space-create-success[]

var spaceCreated = function spaceCreated(payload, meta) {
  return {
    type: SpaceActionType.SPACE_CREATED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-create-success[]
// tag::RDX-function-space-create-error[]

var errorCreatingSpace = function errorCreatingSpace(payload, meta) {
  return {
    type: SpaceActionType.ERROR_CREATING_SPACE,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-space-create-error[]
// tag::RDX-command-space-create[]

var createSpace = function createSpace(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(creatingSpace(request, meta));
      pubnub.api.createSpace(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorCreatingSpace(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spaceCreated(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = SpaceActionType.CREATE_SPACE_COMMAND;
  return thunkFunction;
}; // end::RDX-command-space-create[]

var deletingSpace = function deletingSpace(payload, meta) {
  return {
    type: SpaceActionType.DELETING_SPACE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-delete[]
// tag::RDX-function-space-delete-success[]

var spaceDeleted = function spaceDeleted(payload, meta) {
  return {
    type: SpaceActionType.SPACE_DELETED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-delete-success[]
// tag::RDX-function-space-delete-error[]

var errorDeletingSpace = function errorDeletingSpace(payload, meta) {
  return {
    type: SpaceActionType.ERROR_DELETING_SPACE,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-space-delete-error[]
// tag::RDX-command-space-delete[]

var deleteSpace = function deleteSpace(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(deletingSpace(request, meta));
      pubnub.api.deleteSpace(request.spaceId, function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorDeletingSpace(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spaceDeleted(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = SpaceActionType.DELETE_SPACE_COMMAND;
  return thunkFunction;
}; // end::RDX-command-space-delete[]

var fetchingSpaceById = function fetchingSpaceById(payload, meta) {
  return {
    type: SpaceActionType.FETCHING_SPACE_BY_ID,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-fetchbyid[]
// tag::RDX-function-space-fetchbyid-success[]

var spaceRetrieved = function spaceRetrieved(payload, meta) {
  return {
    type: SpaceActionType.SPACE_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-fetchbyid-success[]
// tag::RDX-function-space-fetchbyid-error[]

var errorFetchingSpaceById = function errorFetchingSpaceById(payload, meta) {
  return {
    type: SpaceActionType.ERROR_FETCHING_SPACE_BY_ID,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-space-fetchbyid-error[]
// tag::RDX-command-space-fetchbyid[]

var fetchSpaceById = function fetchSpaceById(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingSpaceById(_extends({}, request), meta));
      pubnub.api.getSpace(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingSpaceById(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spaceRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = SpaceActionType.FETCH_SPACE_BY_ID_COMMAND;
  return thunkFunction;
}; // end::RDX-command-space-fetchbyid[]

var fetchingSpaces = function fetchingSpaces(payload, meta) {
  return {
    type: SpaceActionType.FETCHING_SPACES,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-fetch[]
// tag::RDX-function-space-fetch-success[]

var spacesRetrieved = function spacesRetrieved(payload, meta) {
  return {
    type: SpaceActionType.SPACES_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-fetch-success[]
// tag::RDX-function-space-fetch-error[]

var errorFetchingSpaces = function errorFetchingSpaces(payload, meta) {
  return {
    type: SpaceActionType.ERROR_FETCHING_SPACES,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-space-fetch-error[]
// tag::RDX-command-space-fetch[]

var fetchSpaces = function fetchSpaces(request, meta) {
  if (request === void 0) {
    request = {};
  }

  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingSpaces(request, meta));
      pubnub.api.getSpaces(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingSpaces(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spacesRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = SpaceActionType.FETCH_SPACES_COMMAND;
  return thunkFunction;
}; // end::RDX-command-space-fetch[]

var updatingSpace = function updatingSpace(payload, meta) {
  return {
    type: SpaceActionType.UPDATING_SPACE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-update[]
// tag::RDX-function-space-update-success[]

var spaceUpdated = function spaceUpdated(payload, meta) {
  return {
    type: SpaceActionType.SPACE_UPDATED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-space-update-success[]
// tag::RDX-function-space-update-error[]

var errorUpdatingSpace = function errorUpdatingSpace(payload, meta) {
  return {
    type: SpaceActionType.ERROR_UPDATING_SPACE,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-space-update-error[]
// tag::RDX-command-space-update[]

var updateSpace = function updateSpace(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(updatingSpace(request, meta));
      pubnub.api.updateSpace(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorUpdatingSpace(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(spaceUpdated(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = SpaceActionType.UPDATE_SPACE_COMMAND;
  return thunkFunction;
}; // end::RDX-command-space-update[]

// tag::RDX-enum-user-action[]
var UserActionType;

(function (UserActionType) {
  UserActionType["FETCH_USERS_COMMAND"] = "pubnub/FETCH_USERS_COMMAND";
  UserActionType["FETCH_USER_BY_ID_COMMAND"] = "pubnub/FETCH_USER_BY_ID_COMMAND";
  UserActionType["CREATE_USER_COMMAND"] = "pubnub/CREATE_USER_COMMAND";
  UserActionType["UPDATE_USER_COMMAND"] = "pubnub/UPDATE_USER_COMMAND";
  UserActionType["DELETE_USER_COMMAND"] = "pubnub/DELETE_USER_COMMAND";
  UserActionType["UPDATING_USER"] = "pubnub/UPDATING_USER";
  UserActionType["USER_UPDATED"] = "pubnub/USER_UPDATED";
  UserActionType["ERROR_UPDATING_USER"] = "pubnub/ERROR_UPDATING_USER";
  UserActionType["DELETING_USER"] = "pubnub/DELETING_USER";
  UserActionType["USER_DELETED"] = "pubnub/USER_DELETED";
  UserActionType["ERROR_DELETING_USER"] = "pubnub/ERROR_DELETING_USER";
  UserActionType["CREATING_USER"] = "pubnub/CREATING_USER";
  UserActionType["USER_CREATED"] = "pubnub/USER_CREATED";
  UserActionType["ERROR_CREATING_USER"] = "pubnub/ERROR_CREATING_USER";
  UserActionType["FETCHING_USERS"] = "pubnub/FETCHING_USERS";
  UserActionType["USERS_RETRIEVED"] = "pubnub/USERS_RETRIEVED";
  UserActionType["ERROR_FETCHING_USERS"] = "pubnub/ERROR_FETCHING_USERS";
  UserActionType["FETCHING_USER_BY_ID"] = "pubnub/FETCHING_USER_BY_ID";
  UserActionType["USER_RETRIEVED"] = "pubnub/USER_RETRIEVED";
  UserActionType["ERROR_FETCHING_USER_BY_ID"] = "pubnub/ERROR_FETCHING_USER_BY_ID";
  UserActionType["USER_UPDATED_EVENT"] = "pubnub/USER_UPDATED_EVENT";
  UserActionType["USER_DELETED_EVENT"] = "pubnub/USER_DELETED_EVENT";
})(UserActionType || (UserActionType = {})); // end::RDX-enum-user-action[]

var creatingUser = function creatingUser(payload, meta) {
  return {
    type: UserActionType.CREATING_USER,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-create[]
// tag::RDX-function-user-create-success[]

var userCreated = function userCreated(payload, meta) {
  return {
    type: UserActionType.USER_CREATED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-create-success[]
// tag::RDX-function-user-create-error[]

var errorCreatingUser = function errorCreatingUser(payload, meta) {
  return {
    type: UserActionType.ERROR_CREATING_USER,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-user-create-error[]
// tag::RDX-command-user-create[]

var createUser = function createUser(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(creatingUser(request, meta));
      pubnub.api.createUser(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorCreatingUser(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(userCreated(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = UserActionType.CREATE_USER_COMMAND;
  return thunkFunction;
}; // end::RDX-command-user-create[]

var deletingUser = function deletingUser(payload, meta) {
  return {
    type: UserActionType.DELETING_USER,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-delete[]
// tag::RDX-function-user-delete-success[]

var userDeleted = function userDeleted(payload, meta) {
  return {
    type: UserActionType.USER_DELETED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-delete-success[]
// tag::RDX-function-user-delete-error[]

var errorDeletingUser = function errorDeletingUser(payload, meta) {
  return {
    type: UserActionType.ERROR_DELETING_USER,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-user-delete-error[]
// tag::RDX-command-user-delete[]

var deleteUser = function deleteUser(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(deletingUser(request, meta));
      pubnub.api.deleteUser(request.userId, function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorDeletingUser(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(userDeleted(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = UserActionType.DELETE_USER_COMMAND;
  return thunkFunction;
}; // end::RDX-command-user-delete[]

var fetchingUserById = function fetchingUserById(payload, meta) {
  return {
    type: UserActionType.FETCHING_USER_BY_ID,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-fetchbyid[]
// tag::RDX-function-user-fetchbyid-success[]

var userRetrieved = function userRetrieved(payload, meta) {
  return {
    type: UserActionType.USER_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-fetchbyid-success[]
// tag::RDX-function-user-fetchbyid-error[]

var errorFetchingUserById = function errorFetchingUserById(payload, meta) {
  return {
    type: UserActionType.ERROR_FETCHING_USER_BY_ID,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-user-fetchbyid-error[]
// tag::RDX-command-user-fetchbyid[]

var fetchUserById = function fetchUserById(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingUserById(_extends({}, request), meta));
      pubnub.api.getUser(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingUserById(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(userRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = UserActionType.FETCH_USER_BY_ID_COMMAND;
  return thunkFunction;
}; // end::RDX-command-user-fetchbyid[]

var fetchingUsers = function fetchingUsers(payload, meta) {
  return {
    type: UserActionType.FETCHING_USERS,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-fetch[]
// tag::RDX-function-user-fetch-success[]

var usersRetrieved = function usersRetrieved(payload, meta) {
  return {
    type: UserActionType.USERS_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-fetch-success[]
// tag::RDX-function-user-fetch-error[]

var errorFetchingUsers = function errorFetchingUsers(payload, meta) {
  return {
    type: UserActionType.ERROR_FETCHING_USERS,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-user-fetch-error[]
// tag::RDX-command-user-fetch[]

var fetchUsers = function fetchUsers(request, meta) {
  if (request === void 0) {
    request = {};
  }

  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingUsers(request, meta));
      pubnub.api.getUsers(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingUsers(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(usersRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = UserActionType.FETCH_USERS_COMMAND;
  return thunkFunction;
}; // end::RDX-command-user-fetch[]

var updatingUser = function updatingUser(payload, meta) {
  return {
    type: UserActionType.UPDATING_USER,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-update[]
// tag::RDX-function-user-update-success[]

var userUpdated = function userUpdated(payload, meta) {
  return {
    type: UserActionType.USER_UPDATED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-user-update-success[]
// tag::RDX-function-user-update-error[]

var errorUpdatingUser = function errorUpdatingUser(payload, meta) {
  return {
    type: UserActionType.ERROR_UPDATING_USER,
    payload: payload,
    meta: meta,
    error: true
  };
}; // end::RDX-function-user-update-error[]
// tag::RDX-command-user-update[]

var updateUser = function updateUser(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(updatingUser(request, meta));
      pubnub.api.updateUser(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorUpdatingUser(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(userUpdated(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = UserActionType.UPDATE_USER_COMMAND;
  return thunkFunction;
}; // end::RDX-command-user-update[]

// tag::RDX-enum-presence-action[]
var PresenceActionType;

(function (PresenceActionType) {
  PresenceActionType["HERE_NOW_COMMAND"] = "pubnub/HERE_NOW_COMMAND";
  PresenceActionType["PRESENCE_STATE_COMMAND"] = "pubnub/PRESENCE_STATE_COMMAND";
  PresenceActionType["FETCHING_HERE_NOW"] = "pubnub/FETCHING_HERE_NOW";
  PresenceActionType["HERE_NOW_RETRIEVED"] = "pubnub/HERE_NOW_RETRIEVED";
  PresenceActionType["ERROR_FETCHING_HERE_NOW"] = "pubnub/ERROR_FETCHING_HERE_NOW";
  PresenceActionType["FETCHING_PRESENCE_STATE"] = "pubnub/FETCHING_PRESENCE_STATE";
  PresenceActionType["PRESENCE_STATE_RETRIEVED"] = "pubnub/PRESENCE_STATE_RETRIEVED";
  PresenceActionType["ERROR_FETCHING_PRESENCE_STATE"] = "pubnub/ERROR_FETCHING_PRESENCE_STATE";
  PresenceActionType["JOIN_EVENT"] = "pubnub/JOIN_EVENT";
  PresenceActionType["LEAVE_EVENT"] = "pubnub/LEAVE_EVENT";
  PresenceActionType["TIMEOUT_EVENT"] = "pubnub/TIMEOUT_EVENT";
  PresenceActionType["STATE_CHANGE_EVENT"] = "pubnub/STATE_CHANGE_EVENT";
})(PresenceActionType || (PresenceActionType = {})); // end::RDX-enum-presence-action[]

var fetchingHereNow = function fetchingHereNow(payload, meta) {
  return {
    type: PresenceActionType.FETCHING_HERE_NOW,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-herenow[]
// tag::RDX-function-presence-herenow-success[]

var hereNowRetrieved = function hereNowRetrieved(payload, meta) {
  return {
    type: PresenceActionType.HERE_NOW_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-herenow-success[]
// tag::RDX-function-presence-herenow-error[]

var errorFetchingHereNow = function errorFetchingHereNow(payload, meta) {
  return {
    type: PresenceActionType.ERROR_FETCHING_HERE_NOW,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-herenow-error[]
// tag::RDX-command-presence-herenow[]

var fetchHereNow = function fetchHereNow(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingHereNow(request, meta));
      pubnub.api.hereNow(_extends({}, request, {
        includeUUIDs: true,
        includeState: false
      }), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingHereNow(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(hereNowRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = PresenceActionType.HERE_NOW_COMMAND;
  return thunkFunction;
}; // end::RDX-command-presence-herenow[]

var fetchingPresenceState = function fetchingPresenceState(payload, meta) {
  return {
    type: PresenceActionType.FETCHING_PRESENCE_STATE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-fetch[]
// tag::RDX-function-presence-fetch-success[]

var presenceStateRetrieved = function presenceStateRetrieved(payload, meta) {
  return {
    type: PresenceActionType.PRESENCE_STATE_RETRIEVED,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-fetch-success[]
// tag::RDX-function-presence-fetch-error[]

var errorFetchingPresenceState = function errorFetchingPresenceState(payload, meta) {
  return {
    type: PresenceActionType.ERROR_FETCHING_PRESENCE_STATE,
    payload: payload,
    meta: meta
  };
}; // end::RDX-function-presence-fetch-error[]
// tag::RDX-command-presence-fetch[]

var fetchPresenceState = function fetchPresenceState(request, meta) {
  var thunkFunction = function thunkFunction(dispatch, _getState, _ref) {
    var pubnub = _ref.pubnub;
    return new Promise(function (resolve, reject) {
      dispatch(fetchingPresenceState(request, meta));
      pubnub.api.getState(_extends({}, request), function (status, response) {
        if (status.error) {
          var payload = {
            request: request,
            status: status
          };
          dispatch(errorFetchingPresenceState(payload, meta));
          reject(payload);
        } else {
          var _payload = {
            request: request,
            response: response,
            status: status
          };
          dispatch(presenceStateRetrieved(_payload, meta));
          resolve();
        }
      });
    });
  };

  thunkFunction.type = PresenceActionType.PRESENCE_STATE_COMMAND;
  return thunkFunction;
}; // end::RDX-command-presence-fetch[]

var userUpdated$1 = function userUpdated(payload) {
  return {
    type: UserActionType.USER_UPDATED_EVENT,
    payload: payload
  };
}; // end::RDX-event-user-updated[]
// tag::RDX-event-user-deleted[]

var userDeleted$1 = function userDeleted(payload) {
  return {
    type: UserActionType.USER_DELETED_EVENT,
    payload: payload
  };
}; // end::RDX-event-user-deleted[]
// tag::RDX-method-listener-user[]

var createUserListener = function createUserListener(dispatch) {
  return {
    user: function user(payload) {
      switch (payload.message.event) {
        case 'update':
          dispatch(userUpdated$1(payload.message));
          break;

        case 'delete':
          dispatch(userDeleted$1(payload.message));
          break;
      }
    }
  };
}; // end::RDX-method-listener-user[]

var spaceUpdated$1 = function spaceUpdated(payload) {
  return {
    type: SpaceActionType.SPACE_UPDATED_EVENT,
    payload: payload
  };
}; // end::RDX-type-event-space-updated[]
// tag::RDX-type-event-space-deleted[]

var spaceDeleted$1 = function spaceDeleted(payload) {
  return {
    type: SpaceActionType.SPACE_DELETED_EVENT,
    payload: payload
  };
}; // end::RDX-type-event-space-deleted[]
// tag::RDX-method-listener-space[]

var createSpaceListener = function createSpaceListener(dispatch) {
  return {
    space: function space(payload) {
      switch (payload.message.event) {
        case 'update':
          dispatch(spaceUpdated$1(payload.message));
          break;

        case 'delete':
          dispatch(spaceDeleted$1(payload.message));
          break;
      }
    }
  };
}; // end::RDX-method-listener-space[]

var userMembershipUpdatedOnSpace = function userMembershipUpdatedOnSpace(payload) {
  return {
    type: MembershipActionType.USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT,
    payload: payload
  };
};

var userAddedToSpace = function userAddedToSpace(payload) {
  return {
    type: MembershipActionType.USER_ADDED_TO_SPACE_EVENT,
    payload: payload
  };
};

var userRemovedFromSpace = function userRemovedFromSpace(payload) {
  return {
    type: MembershipActionType.USER_REMOVED_FROM_SPACE_EVENT,
    payload: payload
  };
}; // tag::RDX-method-listener-membership[]


var createMembershipListener = function createMembershipListener(dispatch) {
  return {
    membership: function membership(payload) {
      switch (payload.message.event) {
        case 'create':
          dispatch(userAddedToSpace(payload.message));
          break;

        case 'update':
          dispatch(userMembershipUpdatedOnSpace(payload.message));
          break;

        case 'delete':
          dispatch(userRemovedFromSpace(payload.message));
          break;
      }
    }
  };
}; // end::RDX-method-listener-membership[]

var messageReceived = function messageReceived(payload) {
  return {
    type: MessageActionType.MESSAGE_RECEIVED,
    payload: payload
  };
}; // end::RDX-type-messages[]
// tag::RDX-method-listener-messages[]

var createMessageListener = function createMessageListener(dispatch) {
  return {
    message: function message(payload) {
      return dispatch(messageReceived(payload));
    }
  };
}; // end::RDX-method-listener-messages[]

// tag::RDX-enum-presence-category[]
var PresenceCategory;

(function (PresenceCategory) {
  PresenceCategory["JOIN"] = "join";
  PresenceCategory["STATE_CHANGE"] = "state-change";
  PresenceCategory["LEAVE"] = "leave";
  PresenceCategory["TIMEOUT"] = "timeout";
})(PresenceCategory || (PresenceCategory = {})); // end::RDX-enum-presence-category[]

var userJoin = function userJoin(payload) {
  return {
    type: PresenceActionType.JOIN_EVENT,
    payload: payload
  };
}; // end::RDX-type-presence-user-join[]
// tag::RDX-type-presence-user-leave[]

var userLeave = function userLeave(payload) {
  return {
    type: PresenceActionType.LEAVE_EVENT,
    payload: payload
  };
}; // end::RDX-type-presence-user-leave[]
// tag::RDX-type-presence-user-timeout[]

var userTimeout = function userTimeout(payload) {
  return {
    type: PresenceActionType.TIMEOUT_EVENT,
    payload: payload
  };
}; // end::RDX-type-presence-user-timeout[]
// tag::RDX-type-presence-user-change[]

var userStateChange = function userStateChange(payload) {
  return {
    type: PresenceActionType.STATE_CHANGE_EVENT,
    payload: payload
  };
}; // end::RDX-type-presence-listener-action[]
// tag::RDX-method-listener-presence[]

var createPresenceListener = function createPresenceListener(dispatch) {
  return {
    presence: function presence(payload) {
      switch (payload.action) {
        case PresenceCategory.JOIN:
          dispatch(userJoin(payload));
          break;

        case PresenceCategory.LEAVE:
          dispatch(userLeave(payload));
          break;

        case PresenceCategory.TIMEOUT:
          dispatch(userTimeout(payload));
          break;

        case PresenceCategory.STATE_CHANGE:
          dispatch(userStateChange(payload));
          break;
      }
    }
  };
}; // end::RDX-method-listener-presence[]

var signalReceived = function signalReceived(payload) {
  return {
    type: SignalActionType.SIGNAL_RECEIVED,
    payload: payload
  };
}; // end::RDX-type-signals[]
// tag::RDX-method-listener-signals[]

var createSignalListener = function createSignalListener(dispatch) {
  return {
    signal: function signal(payload) {
      return dispatch(signalReceived(payload));
    }
  };
}; // end::RDX-method-listener-signals[]

// tag::RDX-enum-error-category[]
var ErrorStatusCategory;

(function (ErrorStatusCategory) {
  ErrorStatusCategory["PN_NETWORK_ISSUES_CATEGORY"] = "PNNetworkIssuesCategory";
  ErrorStatusCategory["PN_ACCES_DENIED_CATEGORY"] = "PNAccessDeniedCategory";
  ErrorStatusCategory["PN_MALFORMED_RESPONSE_CATEGORY"] = "PNMalformedResponseCategory";
  ErrorStatusCategory["PN_BAD_REQUEST_CATEGORY"] = "PNBadRequestCategory";
  ErrorStatusCategory["PN_DECRYPTION_ERROR_CATEGORY"] = "PNDecryptionErrorCategory";
  ErrorStatusCategory["PN_REQUEST_MESSAGE_COUNT_EXCEEDED_CATEGORY"] = "PNRequestMessageCountExceedCategory";
  ErrorStatusCategory["PN_UNKNOWN_CATEGORY"] = "PNUnknownCategory";
})(ErrorStatusCategory || (ErrorStatusCategory = {})); // end::RDX-enum-error-category[]

// tag::RDX-enum-error-action[]
var ErrorStatusActionType;

(function (ErrorStatusActionType) {
  ErrorStatusActionType["NETWORK_ISSUES_EVENT"] = "pubnub/NETWORK_ISSUES_EVENT";
  ErrorStatusActionType["ACCESS_DENIED_EVENT"] = "pubnub/ACCESS_DENIED_EVENT";
  ErrorStatusActionType["MALFORMED_RESPONSE_EVENT"] = "pubnub/MALFORMED_RESPONSE_EVENT";
  ErrorStatusActionType["BAD_REQUEST_EVENT"] = "pubnub/BAD_REQUEST_EVENT";
  ErrorStatusActionType["DECRYPTION_ERROR_EVENT"] = "pubnub/DECRYPTION_ERROR_EVENT";
  ErrorStatusActionType["TIMEOUT_CONNECTION_EVENT"] = "pubnub/TIMEOUT_CONNECTION_EVENT";
  ErrorStatusActionType["REQUEST_MESSAGE_COUNT_EXCEED_EVENT"] = "pubnub/REQUEST_MESSAGE_COUNT_EXCEED_EVENT";
  ErrorStatusActionType["UNKNOWN_EVENT"] = "pubnub/UNKNOWN_EVENT";
})(ErrorStatusActionType || (ErrorStatusActionType = {})); // end::RDX-enum-error-action[]

var networkIssues = function networkIssues(payload) {
  return {
    type: ErrorStatusActionType.NETWORK_ISSUES_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-network[]
// tag::RDX-event-error-accessdenied[]

var accessDenied = function accessDenied(payload) {
  return {
    type: ErrorStatusActionType.ACCESS_DENIED_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-accessdenied[]
// tag::RDX-event-error-malformed[]

var malformedResponse = function malformedResponse(payload) {
  return {
    type: ErrorStatusActionType.MALFORMED_RESPONSE_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-malformed[]
// tag::RDX-event-error-badrequest[]

var badRequest = function badRequest(payload) {
  return {
    type: ErrorStatusActionType.BAD_REQUEST_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-badrequest[]
// tag::RDX-event-error-decrypt[]

var decryptionError = function decryptionError(payload) {
  return {
    type: ErrorStatusActionType.DECRYPTION_ERROR_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-decrypt[]
// tag::RDX-event-error-timeout[]

var timeoutConnection = function timeoutConnection(payload) {
  return {
    type: ErrorStatusActionType.TIMEOUT_CONNECTION_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-timeout[]
// tag::RDX-event-error-requestcount[]

var requestMessageCountExceeded = function requestMessageCountExceeded(payload) {
  return {
    type: ErrorStatusActionType.REQUEST_MESSAGE_COUNT_EXCEED_EVENT,
    payload: payload
  };
}; // end::RDX-event-error-requestcount[]
// tag::RDX-event-error-unknown[]

var unknown = function unknown(payload) {
  return {
    type: ErrorStatusActionType.UNKNOWN_EVENT,
    payload: payload
  };
}; // tag::RDX-listener-error[]

var createErrorStatusListener = function createErrorStatusListener(dispatch) {
  return {
    status: function status(payload) {
      switch (payload.category) {
        case ErrorStatusCategory.PN_ACCES_DENIED_CATEGORY:
          dispatch(accessDenied(payload));
          break;

        case ErrorStatusCategory.PN_MALFORMED_RESPONSE_CATEGORY:
          dispatch(malformedResponse(payload));
          break;

        case ErrorStatusCategory.PN_BAD_REQUEST_CATEGORY:
          dispatch(badRequest(payload));
          break;

        case ErrorStatusCategory.PN_DECRYPTION_ERROR_CATEGORY:
          dispatch(decryptionError(payload));
          break;

        case ErrorStatusCategory.PN_REQUEST_MESSAGE_COUNT_EXCEEDED_CATEGORY:
          dispatch(requestMessageCountExceeded(payload));
          break;

        case ErrorStatusCategory.PN_UNKNOWN_CATEGORY:
          dispatch(unknown(payload));
          break;
      }
    }
  };
}; // end::RDX-listener-error[]

// tag::RDX-enum-networkstatus-action[]
var NetworkStatusActionType;

(function (NetworkStatusActionType) {
  NetworkStatusActionType["NETWORK_UP_EVENT"] = "pubnub/NETWORK_UP_EVENT";
  NetworkStatusActionType["NETWORK_DOWN_EVENT"] = "pubnub/NETWORK_DOWN_EVENT";
})(NetworkStatusActionType || (NetworkStatusActionType = {})); // end::RDX-enum-networkstatus-action[]

// tag::RDX-enum-networkstatus-category[]
var NetworkStatusCategory;

(function (NetworkStatusCategory) {
  NetworkStatusCategory["PN_NETWORK_UP_CATEGORY"] = "PNNetworkUpCategory";
  NetworkStatusCategory["PN_NETWORK_DOWN_CATEGORY"] = "PNNetworkDownCategory";
  NetworkStatusCategory["PN_RECONNECTED_CATEGORY"] = "PNReconnectedCategory";
  NetworkStatusCategory["PN_CONNECTED_CATEGORY"] = "PNConnectedCategory";
  NetworkStatusCategory["PN_TIMEOUT_CATEGORY"] = "PNTimeoutCategory";
})(NetworkStatusCategory || (NetworkStatusCategory = {})); // end::RDX-enum-networkstatus-category[]

var networkUp = function networkUp() {
  return {
    type: NetworkStatusActionType.NETWORK_UP_EVENT
  };
}; // end::RDX-type-networkup[]
// tag::RDX-type-networkdown[]

var networkDown = function networkDown() {
  return {
    type: NetworkStatusActionType.NETWORK_DOWN_EVENT
  };
}; // end::RDX-type-networkstatus[]
// tag::RDX-method-listener-networkstatus[]

var createNetworkStatusListener = function createNetworkStatusListener(dispatch) {
  return {
    status: function status(payload) {
      switch (payload.category) {
        case NetworkStatusCategory.PN_NETWORK_UP_CATEGORY:
          dispatch(networkUp());
          break;

        case NetworkStatusCategory.PN_NETWORK_DOWN_CATEGORY:
          dispatch(networkDown());
          break;

        case NetworkStatusCategory.PN_RECONNECTED_CATEGORY:
          dispatch(networkUp());
          break;

        case NetworkStatusCategory.PN_CONNECTED_CATEGORY:
          dispatch(networkUp());
          break;

        case NetworkStatusCategory.PN_TIMEOUT_CATEGORY:
          dispatch(networkDown());
          break;
      }
    }
  };
}; // end::RDX-method-listener-networkstatus[]

// tag::RDX-enum-subscription-action[]
var SubscriptionStatusActionType;

(function (SubscriptionStatusActionType) {
  SubscriptionStatusActionType["RECONNECTED_EVENT"] = "pubnub/RECONNECTED_EVENT";
  SubscriptionStatusActionType["CONNECTED_EVENT"] = "pubnub/CONNECTED_EVENT";
})(SubscriptionStatusActionType || (SubscriptionStatusActionType = {})); // end::RDX-enum-subscription-action[]

// tag::RDX-enum-subscription-category[]
var SubscriptionStatusCategory;

(function (SubscriptionStatusCategory) {
  SubscriptionStatusCategory["PN_CONNECTED_CATEGORY"] = "PNConnectedCategory";
  SubscriptionStatusCategory["PN_RECONNECTED_CATEGORY"] = "PNReconnectedCategory";
})(SubscriptionStatusCategory || (SubscriptionStatusCategory = {})); // end::RDX-enum-subscription-category[]

var reconnected = function reconnected(payload) {
  return {
    type: SubscriptionStatusActionType.RECONNECTED_EVENT,
    payload: payload
  };
}; // end::RDX-event-subscription-reconnect[]
// tag::RDX-event-subscription-connect[]

var connected = function connected(payload) {
  return {
    type: SubscriptionStatusActionType.CONNECTED_EVENT,
    payload: payload
  };
}; // end::RDX-event-subscription-status[]
// tag::RDX-method-listener-subscription[]

var createSubscriptionStatusListener = function createSubscriptionStatusListener(dispatch) {
  return {
    status: function status(payload) {
      switch (payload.category) {
        case SubscriptionStatusCategory.PN_CONNECTED_CATEGORY:
          dispatch(connected(payload));
          break;

        case SubscriptionStatusCategory.PN_RECONNECTED_CATEGORY:
          dispatch(reconnected(payload));
          break;
      }
    }
  };
}; // end::RDX-method-listener-subscription[]

/**
 * Combines multiple listener objects into one object that supports all of them.
 *
 * @param listeners Array of listener objects.
 * @returns The combined listener Object.
 */
var combineListeners = function combineListeners() {
  for (var _len = arguments.length, listeners = new Array(_len), _key = 0; _key < _len; _key++) {
    listeners[_key] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}].concat(mergeListenersByType(listeners)));
};
/**
 * Take a list of listeners and combine listeners of the same type together.
 *
 * @param listeners Array of listener objects.
 * @returns Array of listener objects with like types combined to single listener object.
 */

var mergeListenersByType = function mergeListenersByType(listeners) {
  var result = [];
  var incomingListeners = {}; // group the listeners by type so we can combine them

  listeners.forEach(function (listener) {
    if (listener.message !== undefined) {
      if (incomingListeners.message === undefined) {
        incomingListeners['message'] = [];
      }

      incomingListeners['message'].push(listener);
    }

    if (listener.presence !== undefined) {
      if (incomingListeners.presence === undefined) {
        incomingListeners['presence'] = [];
      }

      incomingListeners['presence'].push(listener);
    }

    if (listener.signal !== undefined) {
      if (incomingListeners.signal === undefined) {
        incomingListeners['signal'] = [];
      }

      incomingListeners['signal'].push(listener);
    }

    if (listener.user !== undefined) {
      if (incomingListeners.user === undefined) {
        incomingListeners['user'] = [];
      }

      incomingListeners['user'].push(listener);
    }

    if (listener.space !== undefined) {
      if (incomingListeners.space === undefined) {
        incomingListeners['space'] = [];
      }

      incomingListeners['space'].push(listener);
    }

    if (listener.membership !== undefined) {
      if (incomingListeners.membership === undefined) {
        incomingListeners['membership'] = [];
      }

      incomingListeners['membership'].push(listener);
    }

    if (listener.status !== undefined) {
      if (incomingListeners.status === undefined) {
        incomingListeners['status'] = [];
      }

      incomingListeners['status'].push(listener);
    }
  }); // merge the grouped listeners and add to the result list

  Object.entries(incomingListeners).forEach(function (_ref) {
    var listenerType = _ref[0],
        listenersOfType = _ref[1];

    if (listenersOfType && listenersOfType.length === 1) {
      // only one listener for this type so add directly to the result list
      result.push(listenersOfType[0]);
    } else if (listenersOfType && listenersOfType.length > 1) {
      // multiple listeners for this type so combine them and add to the result list
      result.push(createCombinedListener(listenerType, listenersOfType));
    }
  });
  return result;
};
/**
 * Take a list of listeners of the same type and combine to single listener object.
 * For example an array of status listener objects combined to a single status listener object.
 *
 * @param listenerType The listener type.
 * @param listeners The Array of listeners of the same type.
 */


var createCombinedListener = function createCombinedListener(listenerType, listeners) {
  var _ref2;

  // returns a single listener which invokes each of the incomming listeners
  return _ref2 = {}, _ref2[listenerType] = function (payload) {
    listeners.forEach(function (listener) {
      var currentListener = listener[listenerType];

      if (currentListener !== undefined) {
        currentListener(payload);
      }
    });
  }, _ref2;
};

var createPubNubListener = function createPubNubListener(dispatch) {
  return combineListeners(createMessageListener(dispatch), createPresenceListener(dispatch), createSignalListener(dispatch), createErrorStatusListener(dispatch), createErrorStatusListener(dispatch), createNetworkStatusListener(dispatch), createSubscriptionStatusListener(dispatch), createUserListener(dispatch), createSpaceListener(dispatch), createMembershipListener(dispatch));
}; // end::RDX-listener-pubnub[]

var createInitialState = function createInitialState() {
  return {
    byId: {}
  };
};

var messageReceived$1 = function messageReceived(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };

  if (newState.byId[payload.channel] === undefined) {
    newState.byId[payload.channel] = [];
  }

  newState.byId[payload.channel] = [].concat(newState.byId[payload.channel], [payload]);
  return newState;
};

var messageHistoryRetrieved$1 = function messageHistoryRetrieved(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };

  if (newState.byId[payload.request.channel] === undefined) {
    newState.byId[payload.request.channel] = [];
  }

  var results = payload.response.messages.map(function (m) {
    return {
      channel: payload.request.channel,
      message: m.entry,
      timetoken: m.timetoken
    };
  });
  newState.byId[payload.request.channel] = [].concat(newState.byId[payload.request.channel], results);
  return newState;
}; // tag::RDX-reducer-messages[]


var createMessageReducer = function createMessageReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState();
    }

    switch (action.type) {
      case MessageActionType.MESSAGE_RECEIVED:
        return messageReceived$1(state, action.payload);

      case MessageActionType.MESSAGE_HISTORY_RETRIEVED:
        return messageHistoryRetrieved$1(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-reducer-messages[]

var createInitialState$1 = function createInitialState() {
  return {
    byId: {}
  };
};

var signalReceived$1 = function signalReceived(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };

  if (newState.byId[payload.channel] === undefined) {
    newState.byId[payload.channel] = [];
  }

  newState.byId[payload.channel] = [].concat(newState.byId[payload.channel], [payload]);
  return newState;
}; // tag::RDX-reducer-signals[]


var createSignalReducer = function createSignalReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$1();
    }

    switch (action.type) {
      case SignalActionType.SIGNAL_RECEIVED:
        return signalReceived$1(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-reducer-signals[]

var createInitialState$2 = function createInitialState() {
  return {
    byId: {},
    totalOccupancy: 0
  };
};

var hereNow = function hereNow(state, payload) {
  var newState = {
    byId: _extends({}, state.byId, {}, payload.response.channels),
    totalOccupancy: payload.response.totalOccupancy
  };
  return newState;
};

var getState = function getState(state, payload) {
  var newState = {
    byId: _extends({}, state.byId),
    totalOccupancy: state.totalOccupancy
  };
  Object.keys(payload.channels).forEach(function (channel) {
    // update occupant state if exists
    if (newState.byId[channel]) {
      newState.byId[channel] = payload.channels[channel];
    }
  });
  return newState;
};

var userJoined = function userJoined(state, payload) {
  var newState = {
    byId: _extends({}, state.byId),
    totalOccupancy: state.totalOccupancy
  };
  var occupants = []; // remove occupant if exists

  if (newState.byId[payload.channel]) {
    occupants = newState.byId[payload.channel].occupants;
    newState.byId[payload.channel].occupants = occupants.filter(function (occupant) {
      return occupant.uuid !== payload.uuid;
    });
    newState.byId[payload.channel].occupancy = newState.byId[payload.channel].occupants.length;

    if (occupants.length === newState.byId[payload.channel].occupants.length) {
      newState.totalOccupancy++;
    }
  } else {
    newState.totalOccupancy++;
  } // add occupant and update occupancy


  newState.byId[payload.channel] = {
    name: payload.channel,
    occupants: [].concat(occupants, [{
      uuid: payload.uuid,
      state: payload.state
    }]),
    occupancy: payload.occupancy
  };
  return newState;
};

var userLeft = function userLeft(state, payload) {
  var newState = {
    byId: _extends({}, state.byId),
    totalOccupancy: state.totalOccupancy
  }; // remove occupant if exists

  if (newState.byId[payload.channel]) {
    var occupants = newState.byId[payload.channel].occupants;
    newState.byId[payload.channel].occupants = occupants.filter(function (occupant) {
      return occupant.uuid !== payload.uuid;
    });

    if (occupants.length > newState.byId[payload.channel].occupants.length) {
      newState.byId[payload.channel].occupancy--;
      newState.totalOccupancy--;
    }
  }

  return newState;
};

var userStateChange$1 = function userStateChange(state, payload) {
  var newState = {
    byId: _extends({}, state.byId),
    totalOccupancy: state.totalOccupancy
  }; // update occupant state if exists

  if (newState.byId[payload.channel]) {
    var occupants = newState.byId[payload.channel].occupants;
    occupants.forEach(function (occupant) {
      if (occupant.uuid === payload.uuid) {
        occupant.state = payload.state;
      }
    });
  }

  return newState;
}; // end::RDX-type-presence[]
// tag::RDX-method-reducer-presence[]


var createPresenceReducer = function createPresenceReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$2();
    }

    switch (action.type) {
      case PresenceActionType.HERE_NOW_RETRIEVED:
        return hereNow(state, action.payload);

      case PresenceActionType.PRESENCE_STATE_RETRIEVED:
        return getState(state, action.payload);

      case PresenceActionType.JOIN_EVENT:
        return userJoined(state, action.payload);

      case PresenceActionType.LEAVE_EVENT:
      case PresenceActionType.TIMEOUT_EVENT:
        return userLeft(state, action.payload);

      case PresenceActionType.STATE_CHANGE_EVENT:
        return userStateChange$1(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-presence[]

var createNetworkStatusReducer = function createNetworkStatusReducer(initializer) {
  var initialState;

  if (typeof initializer === 'boolean') {
    initialState = {
      isConnected: initializer
    };
  } else if (typeof initializer === 'function') {
    initialState = {
      isConnected: initializer()
    };

    if (typeof initialState.isConnected !== 'boolean') {
      throw new Error('The initializer function must return a boolean value (true or false)');
    }
  } else {
    throw new Error('The initializer parameter must be a boolean value (true or false) or function');
  }

  return function networkStatusReducer(state, action) {
    if (state === void 0) {
      state = initialState;
    }

    switch (action.type) {
      case NetworkStatusActionType.NETWORK_UP_EVENT:
        return {
          isConnected: true
        };

      case NetworkStatusActionType.NETWORK_DOWN_EVENT:
        return {
          isConnected: false
        };

      default:
        return state;
    }
  };
}; // end::RDX-reducer-networkstatus[]

var createInitialState$3 = function createInitialState() {
  return {
    byId: {}
  };
};

var userCreated$1 = function userCreated(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.response.data.id] = payload.response.data;
  return newState;
};

var userUpdated$2 = function userUpdated(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.response.data.id] = payload.response.data;
  return newState;
};

var userDeleted$2 = function userDeleted(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  delete newState.byId[payload.request.userId];
  return newState;
};

var usersRetrieved$1 = function usersRetrieved(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  payload.response.data.forEach(function (item) {
    newState.byId[item.id] = item;
  });
  return newState;
};

var userRetrieved$1 = function userRetrieved(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.response.data.id] = payload.response.data;
  return newState;
};

var userUpdatedEventReceived = function userUpdatedEventReceived(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.data.id] = payload.data;
  return newState;
};

var userDeletedEventReceived = function userDeletedEventReceived(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  delete newState.byId[payload.data.id];
  return newState;
};

var membersRetrieved$1 = function membersRetrieved(state, payload) {
  var newState = state;

  if (payload.response.data.length > 0) {
    newState = {
      byId: _extends({}, state.byId)
    };

    for (var i = 0; i < payload.response.data.length; i++) {
      var currentMember = payload.response.data[i];

      if (currentMember.user) {
        newState.byId[currentMember.id] = currentMember.user;
      }
    }
  }

  return newState;
}; // end::RDX-type-user[]
// tag::RDX-method-reducer-user[]


var createUserReducer = function createUserReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$3();
    }

    switch (action.type) {
      case UserActionType.USER_CREATED:
        return userCreated$1(state, action.payload);

      case UserActionType.USER_UPDATED:
        return userUpdated$2(state, action.payload);

      case UserActionType.USER_DELETED:
        return userDeleted$2(state, action.payload);

      case UserActionType.USERS_RETRIEVED:
        return usersRetrieved$1(state, action.payload);

      case UserActionType.USER_RETRIEVED:
        return userRetrieved$1(state, action.payload);

      case UserActionType.USER_UPDATED_EVENT:
        return userUpdatedEventReceived(state, action.payload);

      case UserActionType.USER_DELETED_EVENT:
        return userDeletedEventReceived(state, action.payload);

      case MembersActionType.MEMBERS_RETRIEVED:
        return membersRetrieved$1(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-user[]

var createInitialState$4 = function createInitialState() {
  return {
    userIds: []
  };
};

var usersRetrieved$2 = function usersRetrieved(payload) {
  return {
    userIds: payload.response.data.map(function (user) {
      return user.id;
    })
  };
}; // tag::RDX-method-reducer-userlist[]


var createUserListReducer = function createUserListReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$4();
    }

    switch (action.type) {
      case UserActionType.USERS_RETRIEVED:
        return usersRetrieved$2(action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-userlist[]

var createInitialState$5 = function createInitialState() {
  return {
    byId: {}
  };
};

var spaceCreated$1 = function spaceCreated(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.response.data.id] = payload.response.data;
  return newState;
};

var spaceUpdated$2 = function spaceUpdated(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.response.data.id] = payload.response.data;
  return newState;
};

var spaceDeleted$2 = function spaceDeleted(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  delete newState.byId[payload.request.spaceId];
  return newState;
};

var spacesRetrieved$1 = function spacesRetrieved(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  payload.response.data.forEach(function (item) {
    newState.byId[item.id] = item;
  });
  return newState;
};

var spaceRetrieved$1 = function spaceRetrieved(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.response.data.id] = payload.response.data;
  return newState;
};

var spaceUpdatedEventReceived = function spaceUpdatedEventReceived(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.data.id] = payload.data;
  return newState;
};

var spaceDeletedEventReceived = function spaceDeletedEventReceived(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  delete newState.byId[payload.data.id];
  return newState;
};

var membershipRetrieved$1 = function membershipRetrieved(state, payload) {
  var newState = state;

  if (payload.response.data.length > 0) {
    newState = {
      byId: _extends({}, state.byId)
    };

    for (var i = 0; i < payload.response.data.length; i++) {
      var currentMembership = payload.response.data[i];

      if (currentMembership.space) {
        newState.byId[currentMembership.id] = currentMembership.space;
      }
    }
  }

  return newState;
}; // end::RDX-type-space[]
// tag::RDX-method-reducer-space[]


var createSpaceReducer = function createSpaceReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$5();
    }

    switch (action.type) {
      case SpaceActionType.SPACE_CREATED:
        return spaceCreated$1(state, action.payload);

      case SpaceActionType.SPACE_UPDATED:
        return spaceUpdated$2(state, action.payload);

      case SpaceActionType.SPACE_DELETED:
        return spaceDeleted$2(state, action.payload);

      case SpaceActionType.SPACES_RETRIEVED:
        return spacesRetrieved$1(state, action.payload);

      case SpaceActionType.SPACE_RETRIEVED:
        return spaceRetrieved$1(state, action.payload);

      case SpaceActionType.SPACE_UPDATED_EVENT:
        return spaceUpdatedEventReceived(state, action.payload);

      case SpaceActionType.SPACE_DELETED_EVENT:
        return spaceDeletedEventReceived(state, action.payload);

      case MembershipActionType.MEMBERSHIP_RETRIEVED:
        return membershipRetrieved$1(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-space[]

var createInitialState$6 = function createInitialState() {
  return {
    spaceIds: []
  };
};

var spacesRetrieved$2 = function spacesRetrieved(payload) {
  return {
    spaceIds: payload.response.data.map(function (space) {
      return space.id;
    })
  };
}; // tag::RDX-method-reducer-spacelist[]


var createSpaceListReducer = function createSpaceListReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$6();
    }

    switch (action.type) {
      case SpaceActionType.SPACES_RETRIEVED:
        return spacesRetrieved$2(action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-spacelist[]

var createInitialState$7 = function createInitialState() {
  return {
    byId: {}
  };
};

var userAddedToSpace$1 = function userAddedToSpace(state, payload) {
  if (state.byId[payload.data.userId] && state.byId[payload.data.userId].filter(function (membership) {
    return membership.id === payload.data.spaceId;
  }).length === 0) {
    var newState = {
      byId: _extends({}, state.byId)
    };
    newState.byId[payload.data.userId] = [].concat(newState.byId[payload.data.userId], [{
      id: payload.data.spaceId,
      custom: payload.data.custom
    }]);
    return newState;
  }

  return state;
};

var userRemovedFromSpace$1 = function userRemovedFromSpace(state, payload) {
  if (state.byId[payload.data.userId] && state.byId[payload.data.userId].filter(function (membership) {
    return membership.id === payload.data.spaceId;
  }).length > 0) {
    var newState = {
      byId: _extends({}, state.byId)
    };
    newState.byId[payload.data.userId] = newState.byId[payload.data.userId].filter(function (membership) {
      return membership.id !== payload.data.spaceId;
    });
    return newState;
  }

  return state;
};

var userMembershipUpdatedOnSpace$1 = function userMembershipUpdatedOnSpace(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  var clonedUser = newState.byId[payload.data.userId];

  if (clonedUser !== undefined) {
    clonedUser = clonedUser.map(function (space) {
      if (space.id === payload.data.spaceId) {
        return _extends({}, space, {
          custom: payload.data.custom
        });
      } else {
        return space;
      }
    });
  }

  newState.byId[payload.data.userId] = clonedUser;
  return newState;
};

var membershipResult = function membershipResult(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.request.userId] = payload.response.data;
  return newState;
}; // end::RDX-type-membership[]
// tag::RDX-method-reducer-membership[]


var createMembershipReducer = function createMembershipReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$7();
    }

    switch (action.type) {
      case MembershipActionType.MEMBERSHIP_RETRIEVED:
      case MembershipActionType.MEMBERSHIP_UPDATED:
      case MembershipActionType.SPACES_JOINED:
      case MembershipActionType.SPACES_LEFT:
        return membershipResult(state, action.payload);

      case MembershipActionType.USER_ADDED_TO_SPACE_EVENT:
        return userAddedToSpace$1(state, action.payload);

      case MembershipActionType.USER_REMOVED_FROM_SPACE_EVENT:
        return userRemovedFromSpace$1(state, action.payload);

      case MembershipActionType.USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT:
        return userMembershipUpdatedOnSpace$1(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-membership[]

var createInitialState$8 = function createInitialState() {
  return {
    byId: {}
  };
};

var userAddedToSpace$2 = function userAddedToSpace(state, payload) {
  if (state.byId[payload.data.spaceId] && state.byId[payload.data.spaceId].filter(function (membership) {
    return membership.id === payload.data.userId;
  }).length === 0) {
    var newState = {
      byId: _extends({}, state.byId)
    };
    newState.byId[payload.data.spaceId] = [].concat(newState.byId[payload.data.spaceId], [{
      id: payload.data.userId,
      custom: payload.data.custom
    }]);
    return newState;
  }

  return state;
};

var userRemovedFromSpace$2 = function userRemovedFromSpace(state, payload) {
  if (state.byId[payload.data.spaceId] && state.byId[payload.data.spaceId].filter(function (membership) {
    return membership.id === payload.data.userId;
  }).length > 0) {
    var newState = {
      byId: _extends({}, state.byId)
    };
    newState.byId[payload.data.spaceId] = newState.byId[payload.data.spaceId].filter(function (membership) {
      return membership.id !== payload.data.userId;
    });
    return newState;
  }

  return state;
};

var userMembershipUpdatedOnSpace$2 = function userMembershipUpdatedOnSpace(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  var clonedSpace = newState.byId[payload.data.spaceId];

  if (clonedSpace !== undefined) {
    clonedSpace = clonedSpace.map(function (user) {
      if (user.id === payload.data.userId) {
        return _extends({}, user, {
          custom: payload.data.custom
        });
      } else {
        return user;
      }
    });
  }

  newState.byId[payload.data.spaceId] = clonedSpace;
  return newState;
};

var membersResult = function membersResult(state, payload) {
  var newState = {
    byId: _extends({}, state.byId)
  };
  newState.byId[payload.request.spaceId] = payload.response.data;
  return newState;
}; // end::RDX-type-member[]
// tag::RDX-method-reducer-member[]


var createMembersReducer = function createMembersReducer() {
  return function (state, action) {
    if (state === void 0) {
      state = createInitialState$8();
    }

    switch (action.type) {
      case MembersActionType.MEMBERS_RETRIEVED:
      case MembersActionType.MEMBERS_UPDATED:
      case MembersActionType.MEMBERS_ADDED:
      case MembersActionType.MEMBERS_REMOVED:
        return membersResult(state, action.payload);

      case MembershipActionType.USER_ADDED_TO_SPACE_EVENT:
        return userAddedToSpace$2(state, action.payload);

      case MembershipActionType.USER_REMOVED_FROM_SPACE_EVENT:
        return userRemovedFromSpace$2(state, action.payload);

      case MembershipActionType.USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT:
        return userMembershipUpdatedOnSpace$2(state, action.payload);

      default:
        return state;
    }
  };
}; // end::RDX-method-reducer-member[]

export { ErrorStatusActionType, MembersActionType, MembershipActionType, MessageActionType, NetworkStatusActionType, PresenceActionType, PresenceCategory, SignalActionType, SpaceActionType, SubscriptionStatusActionType, UserActionType, accessDenied, addMembers, addingMembers, badRequest, combineListeners, connected, createErrorStatusListener, createMembersReducer, createMembershipListener, createMembershipReducer, createMessageListener, createMessageReducer, createNetworkStatusListener, createNetworkStatusReducer, createPresenceListener, createPresenceReducer, createPubNubListener, createSignalListener, createSignalReducer, createSpace, createSpaceListReducer, createSpaceListener, createSpaceReducer, createSubscriptionStatusListener, createUser, createUserListReducer, createUserListener, createUserReducer, creatingSpace, creatingUser, decryptionError, deleteSpace, deleteUser, deletingSpace, deletingUser, errorAddingMembers, errorCreatingSpace, errorCreatingUser, errorDeletingSpace, errorDeletingUser, errorFetchingHereNow, errorFetchingMembers, errorFetchingMembership, errorFetchingMessageHistory, errorFetchingPresenceState, errorFetchingSpaceById, errorFetchingSpaces, errorFetchingUserById, errorFetchingUsers, errorJoiningSpaces, errorLeavingSpaces, errorRemovingMembers, errorSendingMessage, errorSendingSignal, errorUpdatingMembers, errorUpdatingMembership, errorUpdatingSpace, errorUpdatingUser, fetchHereNow, fetchMembers, fetchMemberships, fetchMessageHistory, fetchPresenceState, fetchSpaceById, fetchSpaces, fetchUserById, fetchUsers, fetchingHereNow, fetchingMembers, fetchingMembership, fetchingMessageHistory, fetchingPresenceState, fetchingSpaceById, fetchingSpaces, fetchingUserById, fetchingUsers, hereNowRetrieved, joinSpaces, joiningSpaces, leaveSpaces, leavingSpaces, malformedResponse, membersAdded, membersRemoved, membersRetrieved, membersUpdated, membershipRetrieved, membershipUpdated, messageHistoryRetrieved, messageSent, networkDown, networkIssues, networkUp, presenceStateRetrieved, reconnected, removeMembers, removingMembers, requestMessageCountExceeded, sendMessage, sendSignal, sendingMessage, sendingSignal, signalSent, spaceCreated, spaceDeleted, spaceRetrieved, spaceUpdated, spacesJoined, spacesLeft, spacesRetrieved, timeoutConnection, unknown, updateMembers, updateMembership, updateSpace, updateUser, updatingMembers, updatingMemberships, updatingSpace, updatingUser, userCreated, userDeleted, userRetrieved, userUpdated, usersRetrieved };
//# sourceMappingURL=pubnub-redux.esm.js.map
