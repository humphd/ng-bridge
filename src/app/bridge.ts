/**
 * Example of Bridge data:
 *
 * Without a width:
 *
 * {
 *  "id":"bridge-32-141-C",
 *  "name":"STONEY CREEK CULVERT #2 HWY 35",
 *  "lat":44.2813604,
 *  "lng":-78.7022456,
 *  "year":1902,
 *  "length":21,
 *  "width":null
 * }
 *
 * With a width:
 *
 * {
 *  "id":"bridge-49-2-",
 *  "name":"CPR SWING BRIDGE",
 *  "lat":45.980136,
 *  "lng":-81.914003,
 *  "year":1913,
 *  "length":174,
 *  "width":5
 * }
 */

// Only the bridge's meta info
export interface BridgeId {
  id: string;
  name: string;
}

// A complete bridge, with meta info + all data
export interface Bridge extends BridgeId {
  lat: number;
  lng: number;
  year: number;
  // We may have a length, or may have `null`
  length: number | null;
  // Same with width, maybe a `number`, maybe `null`
  width: number | null;
}
