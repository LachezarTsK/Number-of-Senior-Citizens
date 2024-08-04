
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    this.ASCII_ZERO = 48;
    const MAX_NON_SENIOR_AGE = 60;
    const INDICES_AGE = [11, 12];

    let countSeniors = 0;
    for (let info of details) {
        if (getAge(info.codePointAt(INDICES_AGE[0]), info.codePointAt(INDICES_AGE[1])) > MAX_NON_SENIOR_AGE) {
            ++countSeniors;
        }
    }
    return countSeniors;
};

/**
 * @param {number} codePointFirstDigit
 * @param {number} codePointsSecondDigit
 * @return {number}
 */
function getAge(codePointFirstDigit, codePointsSecondDigit) {
    return 10 * (codePointFirstDigit - this.ASCII_ZERO) + (codePointsSecondDigit - this.ASCII_ZERO);
}
