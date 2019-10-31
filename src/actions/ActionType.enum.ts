export enum ActionType {
  MESSAGE_RECEIVED = 'pubnub/MESSAGE_RECEIVED',
  SENDING_MESSAGE = 'pubnub/SENDING_MESSAGE',
  MESSAGE_SENT = 'pubnub/MESSAGE_SENT',
  ERROR_SENDING_MESSAGE = 'pubnub/ERROR_SENDING_MESSAGE',
  SIGNAL = 'pubnub/SIGNAL',
  JOIN = 'pubnub/JOIN',
  LEAVE = 'pubnub/LEAVE',
  TIMEOUT = 'pubnub/TIMEOUT',
  STATE_CHANGE = 'pubnub/STATE_CHANGE',
  NETWORK_UP = 'pubnub/NETWORK_UP',
  NETWORK_DOWN = 'pubnub/NETWORK_DOWN',
  NETWORK_ISSUES = 'pubnub/NETWORK_ISSUES',
  RECONNECTED = 'pubnub/RECONNECTED',
  CONNECTED = 'pubnub/CONNECTED',
  ACCESS_DENIED = 'pubnub/ACCESS_DENIED',
  MALFORMED_RESPONSE = 'pubnub/MALFORMED_RESPONSE',
  BAD_REQUEST = 'pubnub/BAD_REQUEST',
  DECRYPTION_ERROR = 'pubnub/DECRYPTION_ERROR',
  TIMEOUT_CONNECTION = 'pubnub/TIMEOUT_CONNECTION',
  REQUEST_MESSAGE_COUNT_EXCEED = 'pubnub/REQUEST_MESSAGE_COUNT_EXCEED',
  UNKNOWN = 'pubnub/UNKNOWN',
  UPDATING_USER = 'pubnub/UPDATING_USER',
  USER_UPDATED = 'pubnub/USER_UPDATED',
  ERROR_UPDATING_USER = 'pubnub/ERROR_UPDATING_USER',
  DELETING_USER = 'pubnub/DELETING_USER',
  USER_DELETED = 'pubnub/USER_DELETED',
  ERROR_DELETING_USER = 'pubnub/ERROR_DELETING_USER',
  CREATING_USER = 'pubnub/CREATING_USER',
  USER_CREATED = 'pubnub/USER_CREATED',
  ERROR_CREATING_USER = 'pubnub/ERROR_CREATING_USER',
  FETCHING_USERS = 'pubnub/FETCHING_USERS',
  USERS_RETRIEVED = 'pubnub/USERS_RETRIEVED',
  ERROR_FETCHING_USERS = 'pubnub/ERROR_FETCHING_USERS',
  FETCHING_USER_BY_ID = 'pubnub/FETCHING_USER_BY_ID',
  USER_RETRIEVED = 'pubnub/USER_RETRIEVED',
  ERROR_FETCHING_USER_BY_ID = 'pubnub/ERROR_FETCHING_USER_BY_ID',
  CREATING_SPACE = 'pubnub/CREATING_SPACE',
  SPACE_CREATED = 'pubnub/SPACE_CREATED',
  ERROR_CREATING_SPACE = 'pubnub/ERROR_CREATING_SPACE',
  UPDATING_SPACE = 'pubnub/UPDATING_SPACE',
  SPACE_UPDATED = 'pubnub/SPACE_UPDATED',
  ERROR_UPDATING_SPACE = 'pubnub/ERROR_UPDATING_SPACE',
  DELETING_SPACE = 'pubnub/DELETING_SPACE',
  SPACE_DELETED = 'pubnub/SPACE_DELETED',
  ERROR_DELETING_SPACE = 'pubnub/ERROR_DELETING_SPACE',
  FETCHING_SPACES = 'pubnub/FETCHING_SPACES',
  SPACES_RETRIEVED = 'pubnub/SPACES_RETRIEVED',
  ERROR_FETCHING_SPACES = 'pubnub/ERROR_FETCHING_SPACES',
  FETCHING_SPACE_BY_ID = 'pubnub/FETCHING_SPACE_BY_ID',
  SPACE_RETRIEVED = 'pubnub/SPACE_RETRIEVED',
  ERROR_FETCHING_SPACE_BY_ID = 'pubnub/ERROR_FETCHING_SPACE_BY_ID',
  USER_ADDED_TO_SPACE = 'pubnub/USER_ADDED_TO_SPACE',
  USER_REMOVED_FROM_SPACE = 'pubnub/USER_REMOVED_FROM_SPACE',
  USER_MEMBERSHIP_UPDATED_ON_SPACE = 'pubnub/USER_MEMBERSHIP_UPDATED_ON_SPACE',
  FETCHING_MEMBERSHIPS = 'pubnub/FETCHING_MEMBERSHIPS',
  MEMBERSHIPS_RETRIEVED = 'pubnub/MEMBERSHIPS_RETRIEVED',
  ERROR_FETCHING_MEMBERSHIPS = 'pubnub/ERROR_FETCHING_MEMBERSHIPS',
  FETCHING_MEMBERS = 'pubnub/FETCHING_MEMBERS',
  MEMBERS_RETRIEVED = 'pubnub/MEMBERS_RETRIEVED',
  ERROR_FETCHING_MEMBERS = 'pubnub/ERROR_FETCHING_MEMBERS',
  UPDATING_MEMBERSHIP = 'pubnub/UPDATING_MEMBERSHIP',
  MEMBERSHIP_UPDATED = 'pubnub/MEMBERSHIP_UPDATED',
  ERROR_UPDATING_MEMBERSHIP = 'pubnub/ERROR_UPDATING_MEMBERSHIP',
  UPDATING_MEMBERS = 'pubnub/UPDATING_MEMBERS',
  MEMBERS_UPDATED = 'pubnub/MEMBERS_UPDATED',
  ERROR_UPDATING_MEMBERS = 'pubnub/ERROR_UPDATING_MEMBERS',
  ADDING_MEMBERS = 'pubnub/ADDING_MEMBERS',
  MEMBERS_ADDED = 'pubnub/MEMBERS_ADDED',
  ERROR_ADDING_MEMBERS = 'pubnub/ERROR_ADDING_MEMBERS',
  REMOVING_MEMBERS = 'pubnub/REMOVING_MEMBERS',
  MEMBERS_REMOVED = 'pubnub/MEMBERS_REMOVED',
  ERROR_REMOVING_MEMBERS = 'pubnub/ERROR_REMOVING_MEMBERS',
  JOINING_SPACES = 'pubnub/JOINING_SPACES',
  SPACES_JOINED = 'pubnub/SPACES_JOINED',
  ERROR_JOINING_SPACES = 'pubnub/ERROR_JOINING_SPACES',
  LEAVING_SPACES = 'pubnub/LEAVING_SPACES',
  SPACES_LEFT = 'pubnub/SPACES_LEFT',
  ERROR_LEAVING_SPACES = 'pubnub/ERROR_LEAVING_SPACES',
  COMMAND = 'pubnub/COMMAND',
}
