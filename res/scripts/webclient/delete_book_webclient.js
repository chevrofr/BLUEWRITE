var tools_universal = require("../universal/tools_universal")
var tools_webclient = require("../webclient/tools_webclient")
var prototypes_webclient = require("../webclient/prototypes_webclient")
var delete_book_universal = require("../universal/delete_book_universal")
var configs = require("../../configs/configs")
var lang = require('../universal/language_universal')
var markdown_webclient = require("../webclient/markdown_webclient")

exports.get = (req, res) => {
    return new Promise((resolveP, rejectP) => {
        tools_universal.checkUserToken(req.session.auth_token).then((responseCheck) => {
            delNotes = req.query.all
            if(delNotes != "true") {
                delNotes = "false"
            }

            delete_book_universal.deleteBook(responseCheck["uid"], req.params.bid, delNotes).then((responseDelete) => {
                if(responseDelete["status"] == "sucess") {
                    res.redirect("/notes")
                }
                else {
                    if(responseDelete["code"] == "0005") {
                        tools_webclient.sendErrors("0005", req, res)
                    }
                    else {
                        console.error(responseDelete["err"])
                        tools_webclient.sendErrors("0000", req, res)
                    }
                }
            }).catch((err) => {
                // Unknown Error
                console.error(err)
                tools_webclient.sendErrors("0000", req, res)
            })
        }).catch((err) => {
            // Invalid Token
            tools_webclient.sendErrors("0001", req, res)
        })
    })
}