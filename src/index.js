module.exports = function check(inputString, bracketsConfig) {

    if (inputString.length % 2 > 0) {
        return false;
    }

    let inputStringArray = Array.from(inputString);

    while (true) {

        let isMatch = false;
        for (let i = 0; i < inputStringArray.length; i++) {
            for (let config of bracketsConfig) {
                if (inputStringArray[i] === config[0] && inputStringArray[i + 1] === config[1]) {
                    inputStringArray.splice(i, 2);
                    isMatch = true;
                    break;
                }
            }
            if (isMatch) {
                break;
            }
        }
        if (inputStringArray.length === 0) {
            return true;
        }
        if (!isMatch) {
            return false;
        }
    }
}
