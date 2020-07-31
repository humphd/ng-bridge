const loki = require('lokijs');
const bcrypt = require('bcrypt');

// Setup a simple in-memory db
let users;
const db = new loki('data.db', {
  autoload: true,
  autoloadCallback: () => {
    users = db.getCollection('users') ||
            db.addCollection('users', {
              unique: ['username']
            });
  },
  autosave: true,
  autosaveInterval: 5 * 1000
});

module.exports = {
  register: async (username, fullname, password) => {
    // Check if this username already exists
    if(users.findOne({ username })) {
      throw new Error('username already registered');
    }

    // Create a new user, hash their password, store in the db
    const saltRounds = +process.env.SALT_ROUNDS || 10;
    const hash = await bcrypt.hash(password, saltRounds);
    users.insert({ username, fullname, hash });
  },

  // Check this username/password pair, and return a Promise
  check: (username, password) => {
    // Check if this user is in the db
    const user = users.findOne({ username });
    if (!user) {
      return Promise.reject(new Error(`unknown user: ${username}`));
    }

    // Calculate a new hash and compare to the db version
    return bcrypt.compare(password, user.hash);
  },

  // Get a full user object for the given username
  byUsername: username => users.findOne({ username })
};
