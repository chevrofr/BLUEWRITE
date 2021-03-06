exports.get = (id, lang) => {
    if(lang == "fr") {
        return getFr(id)
    }
    else {
        return getFr(id)
    }
}

getFr = (id) => {
    switch(id) {
        case "will_be_redirected_to_chevrofr_for_log_in":
            return "Veuillez vous connecter avec votre compte CHEVRO."
        case "no_note":
            return "Vous n'avez aucune note..."
        case "no_book":
            return "Vous n'avez aucun carnet..."
        case "api_inaccessible":
            return "L'api est inaccessible..."
        case "note_does_not_exist_or_not_authorized":
            return "Cette note n'existe pas ou vous n'êtes pas autorisé à y accéder."
        case "book_does_not_exist_or_not_authorized":
            return "Ce carnet n'existe pas ou vous n'êtes pas autorisé à y accéder."
        case "nameless":
            return "Sans nom"
        case "start_writing_something_incredible":
            return "Commencez à écrire quelque chose d'incroyable !"
        case "settings":
            return "Paramètres"
        case "sign_out":
            return "Se déconnecter"
        case "no_contributors":
            return "Aucun contributeurs"
        case "note_off":
            return "note de"
        case "deleted":
            return "Supprimé(e)"
        case "add_note":
            return "Ajouter une note"
        case "log_in":
            return "Connexion"
        case "my_notes":
            return "Mes notes"
        case "other":
            return "Autres"
        case "characters":
            return "caractères"
        case "choose_a_book":
            return "Choisir un carnet de notes"
        case "no_one":
            return "Aucun"
        case "my_books":
            return "Mes carnets"
        case "no_notes_for_this_book":
            return "Aucune notes pour ce carnet"
        case "delete":
            return "Supprimer"
        case "delete_only_book":
            return "Seulement ce carnet"
        case "delete_book_and_notes":
            return "Ce carnet et ses notes"
        case "please_wait_while_saving_your_note":
            return "Veuillez patienter pendant la sauvegarde de votre note"
        case "cant_autosave_note":
            return "Impossible d'effectuer une sauvegarde de votre note. Vérifiez que vous êtes connecté à internet."
        case "pros":
            return "Avantages"
        case "synchronized_notes_application":
            return "Application de notes synchronisées"
        case "your_notes_on_all_your_devices":
            return "Retrouvez vos notes sur tous vos appareils"
        case "wysiwg_markdown_editor":
            return "Éditeur WYSIWYG markdown"
        case "share_notes_with_friends":
            return "Partagez vos notes et laissez vos amis les éditer"
        case "support_for_latex_mathematical_formulas":
            return "Support des formules mathématique LATEX"
        case "public_or_private_notes":
            return "Notes publiques ou privées"
        case "about":
            return "À propos"
        case "about_text":
            return "BLUEWRITE est un logiciel OpenSource, fourni sous la licence GPLv3. Vous pouvez (et nous vous y encourageons) auto-héberger BLUEWRITE. Vous trouverez les informations sur notre repos !"
        case "books":
            return "carnets"
        case "results":
            return "RÉSULTATS"
        case "chars":
            return "carac"
        case "words":
            return "mots"
    }
}