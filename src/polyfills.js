/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
// IE11 stuff
import 'core-js/features/array/find';
import 'core-js/features/array/find-index';
import 'core-js/features/array/includes';
import 'core-js/features/string/includes';
import 'core-js/features/string/starts-with';

/* Solve issues with chrome that replaces dom elements when using google translate
 * see a long thread of discussions here and a way to solve it:
 * https://github.com/facebook/react/issues/11538#issuecomment-417504600
 *
 * see chrome bug report here:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=872770
 *
 * This solution slows down the app but it's not even visible to the naked eye.
 */
if (typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {
    if (child.parentNode !== this) {
      if (console) {
        console.error('Cannot remove a child from a different parent', child, this);
      }
      return child;
    }
    return originalRemoveChild.apply(this, arguments);
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console) {
        console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
      }
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments);
  };
}
