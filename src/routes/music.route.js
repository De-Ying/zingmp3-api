const express = require('express');
const router = express.Router();

const musicController = require('../controllers/music.controller');

router.get('/song', musicController.getSong);
router.get('/detailplaylist', musicController.getDetailPlaylist);
router.get('/home', musicController.getHome);
router.get('/top100', musicController.getTop100);
router.get("/charthome", musicController.getChartHome)
router.get("/newreleasechart", musicController.getNewReleaseChart)
router.get("/infosong", musicController.getInfo)
router.get("/artist", musicController.getArtist)
router.get("/artistsong", musicController.getArtistSong)
router.get("/lyric", musicController.getLyric)
router.get("/search", musicController.search)
router.get("/listmv", musicController.getListMV)
router.get("/categorymv", musicController.getCategoryMV)
router.get("/video", musicController.getVideo)

module.exports = router;