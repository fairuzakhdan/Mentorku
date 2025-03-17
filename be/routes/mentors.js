const express = require('express');
const router = express.Router()

const mentors = require('../controllers/mentors');

router.route('/').get(mentors.getAllMentors)

module.exports = router