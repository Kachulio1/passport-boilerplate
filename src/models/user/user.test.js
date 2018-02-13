const mongoose = require("mongoose");
const expect = require("chai").expect;
const config = require("../../../config");

const User = require("./index");

describe("Models", () => {
  before(done => {
    mongoose.connect(config.mongoUrl);
    done();
  });
  describe("User Model", () => {
    it("New user saved to test database", done => {
      var user = User({
        email: "joseph@gmail.com",
        password: "kenya"
      });

      user.save(done);
    });
    it("Dont save incorrect format to database", done => {
      var wrongSave = User({
        notValidEmailField: "thisIs@goodEmail.com"
      });
      wrongSave.save(err => {
        if (err) {
          return done();
        }
        throw new Error("Should generate error!");
      });
    });
    it("Should retrieve data from test database", done => {
      User.find({ email: "joseph@gmail.com" }, (err, user) => {
        if (err) {
          throw err;
        }
        if (user.length === 0) {
          throw new Error("No data!");
        }
        done();
      });
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
