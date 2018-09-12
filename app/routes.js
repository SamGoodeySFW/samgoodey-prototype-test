const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
/*
router.post('/waste-submit', function (req, res) {
    var firstField = req.session.data['first-field']
    res.redirect('/waste-confirmation')
})
*/
router.get('/my-first-table', function(req, res) {
    res.render('/index');
})

router.post('/my-first-table', function(req, res) {
    var amount = req.body['reg-amount'];
    var data = req.session.data['reg-amount-table'];
    if(!data) {
        data = [];
    }
    data.push([{text: amount}]);
    req.session.data['reg-amount-table'] = data;
    res.render('index', {'myData': data});
})

module.exports = router
