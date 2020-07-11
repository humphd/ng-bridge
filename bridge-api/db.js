const bridges = require('./bridges.json');

module.exports = {
  // Return a reduced set of bridge info: id and name only
  all: () => bridges.map(bridge => ({
    id: bridge.id,
    name: bridge.name
  })),

  // Return a full object record for the bridge with id
  byId: (id) => bridges.find(bridge => bridge.id === id)
};
