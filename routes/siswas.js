const express = require('express');
const Siswa = require('../models/siswasModel');
const {
    siswaGet,
    siswaGetById,
    siswaCreate,
    siswaUpdate,
    siswaDelete,
} = require('../controllers/siswasController');

const router = express.Router();

router.get('/', siswaGet);
router.get('/:id', siswaGetById);
router.post('/', siswaCreate)
router.put('/:id', siswaUpdate);
router.delete('/:id', siswaDelete)

module.exports = router;