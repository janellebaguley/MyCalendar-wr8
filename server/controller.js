module.exports = {
    getCalEvents:  async (req, res) => {
        const db = req.app.get('db')

        await db.get_events()
        .then(event => res.status(200).send(event))
        .catch(err => res.status(500).send(err))
    },
    addEvents: async (req, res) => {
        const db = req.app.get('db')
        const {title, extendedProps, start, time} = req.body
        // const {user_id} = req.session.user

        await db.add_events({
            title2: title, 
            extendedprops2: extendedProps, 
            date2: start,
            time2: time})
        .then(() => res.sendstatus(200))
        .catch(err => res.status(500).send(err))
    },
    // searchEvent: async (req, res)=> {
    //     const db = req.app.get('db')
    //     const {id} =req.params

    //     let searchEvent = await db.search_events({id})
    //     .then(() => res.sendstatus(200))
    //     .catch(err => res.status(500).send(err))
    // },
    deleteEvent: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.delete_event([id])
        .then(() => res.sendstatus(200))
        .catch(err => res.status(500).send(err))
    },
    getSessionUser: (req, res) => {
        const {user} =req.session
        if(user){
            res.send(user)
        } else {
            res.send('')
        }
    }
}