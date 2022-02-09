/* exported defaults */

/*

first create a function that holds 2 parameters first is a target the second is source

function defaults(target, source) {
  create a for in loop to loop over the target object
  for( const targetKey in target) {
    create a condition that check if source is in target and target[key] is equal to undefined then we assign the source at key to target at key
      if(source && (target[key] === undefined)) {
        target[key] = source[key]
      }
      target = source
  }
}
*/

function defaults(target, source) {
  for (const targetKey in source) {
    if (source && (target[targetKey] === undefined)) {
      target[targetKey] = source[targetKey];
    }
  }
  return target;
}
