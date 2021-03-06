// 라우팅 설정

const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

// controller에 있는 index 컨트롤러 binding
router.get('/', ctrl.index);

router.get('/:id', ctrl.show);

router.delete('/:id', ctrl.destroy);

router.post('/', ctrl.create);

router.put('/:id', ctrl.update);

module.exports = router;