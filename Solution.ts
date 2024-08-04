
function countSeniors(details: string[]): number {
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

function getAge(codePointFirstDigit: number, codePointsSecondDigit: number): number {
    return 10 * (codePointFirstDigit - this.ASCII_ZERO) + (codePointsSecondDigit - this.ASCII_ZERO);
}
