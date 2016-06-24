/**
 * Created by raymund on 6/24/16.
 */

// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by livehelperchat.js.
import { name as packageName } from "meteor/rcdelfin:livehelperchat";

// Write your tests here!
// Here is an example.
Tinytest.add('livehelperchat - example', function (test) {
  test.equal(packageName, "livehelperchat");
});
