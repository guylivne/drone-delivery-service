'use strict';
const dataLoader = require('./csv-loader');
const scheduler = require('./scheduler');
const view = require('./console-view');
const filename = __dirname + '/../data/data.csv';

dataLoader.loadFromFile(filename, (err, drones, locations) => {
  if (err) { throw err; }
  view.render(
    scheduler.generate(drones, locations)
  );
});
