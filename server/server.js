const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const moment = require('moment');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '../index.html');
    const stylePath = path.join(__dirname, '../index.css');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    app.use(logger('dev'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/dist', publicPath);

    /*app.get('/api/note/:noteId', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      low(adapter)
        .then(db => {
          const note = db.get('notes')
            .find({ id: req.params.noteId })
            .value()

          res.json(note);
        });
    });*/

    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/index.css', function (_, res) { res.sendFile(stylePath) });

    return app;
  }
}
