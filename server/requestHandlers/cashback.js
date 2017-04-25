var cb = require('./../../database/cashback');
var calculateBestCard = require('./../creditcardCategories');

exports.getCashbackCategories = (req, res) => {
  var catid = req.params.catid;

  cb.getCashbackCategories(catid, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      var categories = [];

      for (var i = 0; i < results.length; i++) {
        categories.push({
          name: results[i].categoryname,
          catid: results[i].id,
          percent: results[i].value
        });
      }

      res.status(200).json(categories);
    }
  });
};

exports.getAllUserCategories = (req, res) => {
  var userid;
  if (req.session.passport) {
    userid = req.session.passport.user.id;    
  } else {
    userid = "facebook|10211056100732598";
    console.log('YOU ARE NOT LOGGED IN');
  }

  cb.getAllUserCategories(userid, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

exports.calculate = (req, res) => {
  var userCats = req.body.userCats;
  var bizCats = req.body.bizCats;      
  var best = calculateBestCard(userCats, bizCats);
  res.json(best);

};

exports.changeCashbackPercent = (req, res) => {
  var catid = req.body.catid;
  var percent = req.body.percent;
  var action = req.body.action;

  cb.changeCashbackCategories(catid, percent, action, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};
    
exports.createCashbackCategory = (req, res) => {
  var ccid = req.body.ccid;
  var name = req.body.name;
  var percent = req.body.percent;

  cb.createCashbackCategory(ccid, name, percent, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('results.insertId at reqHandler', results.insertId);
      res.status(200).json(results.insertId);
    }
  });
};

exports.deleteCashbackCategory = (req, res) => {
  var catid = req.params.catid;
  cb.deleteCashbackCategory(catid, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};