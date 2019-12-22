const fileValidation = userInputJson => {

    if (userInputJson.title && userInputJson.content) {
        if (userInputJson.title.lengh === 0 || userInputJson.content.length === 0) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }

}

module.exports = fileValidation;