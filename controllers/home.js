var express = require('express');
var config = require('../config')


/* GET home page. */
exports.index = function(req, res, next) {
  res.render('index', { title: config.site.title });
}
