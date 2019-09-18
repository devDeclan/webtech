const { Event, Organiser } = require('./models');

const addOrganiser = (req, res)=>{
    const newOrganiser = Organiser(req.body);
    newOrganiser.save((err, organiser)=>{
        if(err){
            return res.send('error occured')
        }
        res.status(200).send('organiser added')
    })
}  

const addEvent = (req, res)=>{
    const newEvent = Event(req.body);
    newEvent.save((err, event)=>{
        if(err){
            return res.send('error occured')
        }
        res.status(200).send('event added')
    })
}  

const editOrganiser = (req, res)=>{
    const id = req.params.id;
    const newData = req.body;
    console.log(newData)
    Organiser.findOneAndUpdate({id: id},newData,(err, organiser)=>{
        if(err){
            return res.status(203).send('error occured')
        }
        res.status(200).json(organiser)
    })
}  

const editEvent = (req, res)=>{
    const id = req.params.id;
    const newData = req.body;
    Event.findOneAndUpdate({id: id},newData,(err, event)=>{
        if(err){
            return res.status(203).send('error occured')
        }
        res.status(200).json(event)
    })
}

const deleteOrganiser = (req, res)=>{
    const id = req.params.id;
    Organiser.findOneAndDelete({id},(err, organiser)=>{
        if(err){
            return res.status(203).send('error occured')
        }
        res.status(200).json(organiser)
    })
}

const deleteEvent = (req, res)=>{
    const id = req.params.id;
    Event.findOneAndDelete({id},(err, event)=>{
        if(err){
            return res.status(203).send('error occured')
        }
        res.status(200).json(event)
    })
}

const getOrganisers = (req, res)=>{
    Organiser.find({},(err, organisers)=>{
        if(err){
            return res.status(203).send('error occured')
        }
        res.status(200).json(organisers)
    })
}

const getEvents = (req, res)=>{
    Event.find({},(err, events)=>{
        if(err){
            return res.status(203).send('error occured')
        }
        res.status(200).json(events)
    })
}

const getOrganiserDetail = (req, res)=>{
    const id = req.params.id;
    Organiser.findOne({id}, (err, organiser)=>{
        if(err){
            return res.status(204).send('no content')
        }
        res.status(200).json(organiser)
    })
}

const getEventDetail = (req, res)=>{
    const id = req.params.id;
    Event.findOne({id}, (err, event)=>{
        if(err){
            return res.status(204).send('no content')
        }
        res.status(200).json(event)
    })
}  

module.exports = {
    addEvent,
    addOrganiser,

    editEvent,
    editOrganiser,

    deleteEvent,
    deleteOrganiser,

    getEvents,
    getOrganisers,

    getEventDetail,
    getOrganiserDetail
}