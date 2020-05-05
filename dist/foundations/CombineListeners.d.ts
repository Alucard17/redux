import Pubnub from 'pubnub';
/**
 * Combines multiple listener objects into one object that supports all of them.
 *
 * @param listeners Array of listener objects.
 * @returns The combined listener Object.
 */
export declare const combineListeners: (...listeners: Pubnub.ListenerParameters[]) => any;
