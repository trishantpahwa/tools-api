const express = require('express');



const router = express.Router();

router.post('/base64-encode', function(req, res) {
    const string = req.params.string;
    res.json({result: Buffer.from(string, 'utf-8').toString('base64')});
});

router.post('/base64-decode', function(req, res) {
    const string = req.params.string;
    res.json({result: Buffer.from(string, 'base64').toString('utf-8')});
});

router.post('/string-to-hex', function(req, res) {
    const string = req.params.string;
    res.json({result: Buffer.from(string, 'utf-8').toString('hex')});
});

router.post('/hex-to-string', function(req, res) {
    const string = req.params.string;
    res.json({result: Buffer.from(string, 'hex').toString('utf-8')});
});

router.post('/string-to-binary', function(req, res) {
    const string = req.params.string;
    res.json({result: Buffer.from(string, 'utf-8').toString('binary')});
});

router.post('/binary-to-string', function(req, res) {
    const string = req.params.string;
    res.json({result: Buffer.from(string, 'binary').toString('utf-8')});
});



module.exports = router;