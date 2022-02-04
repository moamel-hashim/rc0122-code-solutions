/* exported setValue */

/* assign the value to the object at key
return object at key
*/

function setValue(object, key, value) {
  object[key] = value;
  return object[key];
}
