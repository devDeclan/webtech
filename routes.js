const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res)=>{
    res.status(200).send('All green!!!')
})

router.post('/event', controller.addEvent);
router.post('/organiser', controller.addOrganiser);

router.get('/events', controller.getEvents);
router.get('/organisers', controller.getOrganisers);

router.put('/event/:id', controller.editEvent);
router.put('/organiser/:id', controller.editOrganiser);

router.delete('/event/:id', controller.deleteEvent);
router.delete('/organiser/:id', controller.deleteOrganiser);

router.get('/event/:id', controller.getEventDetail);
router.get('/organiser/:id', controller.getOrganiserDetail);

module.exports = router;