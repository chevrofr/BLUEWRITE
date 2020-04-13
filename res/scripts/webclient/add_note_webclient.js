var tools_universal = require("../universal/tools_universal")
var tools_webclient = require("../webclient/tools_webclient")
var prototypes_webclient = require("../webclient/prototypes_webclient")
var add_note_universal = require("../universal/add_note_universal")
var configs = require("../../configs/configs")
var lang = require('../universal/language_universal')
var markdown_webclient = require("../webclient/markdown_webclient")

exports.get = (req, res) => {
    return new Promise((resolveP, rejectP) => {
        tools_universal.checkUserToken(req.session.auth_token).then((responseCheck) => {
            if(responseCheck["status"] == "error") {
                if(responseCheck["code"] == "0001") {
                    // Invalid Token
                    tools_webclient.sendErrors("0001", req, res)
                }
                else {
                    // Unknown Error
                    console.error(responseCheck["err"])
                    tools_webclient.sendErrors("0000", req, res)
                }
            }
            else {
                tools_webclient.getBooksDatalist(null, req.session).then((htmlBooks) => {
                    res.render("edit.ejs", {
                        postForm: "add/note",
                        pageTitle : lang.get("add_note", req.session.lang), 
                        description: "",
                        noteId: "", 
                        title: "", 
                        booksInputLabel: lang.get("choose_a_book", req.session.lang),
                        books: htmlBooks, 
                        text: "", 
                        titleHolder: lang.get("nameless", req.session.lang), 
                        textHolder: lang.get("start_writing_something_incredible", req.session.lang), 
                        error: "",
                        caractNum : lang.get("characters", req.session.lang),
                        token: req.session.auth_token, 
                        apiHost: configs.get("domain")
                    })
                }).catch((err) => {
                    // Unknown Error
                    console.error(err)
                    tools_webclient.sendErrors("0000", req, res)
                })
            }
        }).catch((err) => {
            // Unknown Error
            console.error(err)
            tools_webclient.sendErrors("0000", req, res)
        })
    })
}

exports.post = (req, res) => {
    return new Promise((resolveP, rejectP) => {
        tools_universal.checkUserToken(req.session.auth_token).then((responseCheck) => {
            if(responseCheck["status"] == "error") {
                if(responseCheck["code"] == "0001") {
                    // Invalid Token
                    tools_webclient.sendErrors("0001", req, res)
                }
                else {
                    // Unknown Error
                    console.error(responseCheck["err"])
                    tools_webclient.sendErrors("0000", req, res)
                }
            }
            else {
                add_note_universal.addNote(responseCheck["uid"], req.body.title, req.body.text, req.body.books).then((responseAdd) => {
                    if(responseAdd["status"] == "sucess") {
                        res.redirect("/note/" + responseAdd['nid'])
                    }
                    else {
                        if(responseAdd["code"] == "0002") {
                            tools_webclient.sendErrors("0002", req, res)
                        }
                        else if(responseAdd["code"] == "0006") {
                            res.redirect("/notes")
                        }
                        else {
                            // Unknown Error
                            console.error(responseAdd["err"])
                            tools_webclient.sendErrors("0000", req, res)
                        }
                    }
                }).catch((err) => {
                    // Unknown Error
                    console.error(err)
                    tools_webclient.sendErrors("0000", req, res)
                })
            }
        }).catch((err) => {
            // Unknown Error
            console.error(err)
            tools_webclient.sendErrors("0000", req, res)
        })
    })
}