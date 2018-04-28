let searches = []

const axios = require('axios')

module.exports = {
    read: ( req, res ) => {
        res.status(200).send( searches );
            },

    create : ( req, res ) => {

        searches.unshift(req.body.params.city)

        if(searches.length === 4){
            searches.pop()
        }
        
        res.status(200).send( searches )
    }
    }
