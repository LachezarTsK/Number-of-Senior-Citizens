
class Solution {

    private companion object {
        const val MAX_NON_SENIOR_AGE = 60
        val INDICES_AGE = intArrayOf(11, 12)
    }

    fun countSeniors(details: Array<String>): Int {
        var countSeniors = 0
        for (info in details) {
            if (getAge(info[INDICES_AGE[0]], info[INDICES_AGE[1]]) > MAX_NON_SENIOR_AGE) {
                ++countSeniors;
            }
        }
        return countSeniors;
    }

    private fun getAge(firstDigit: Char, secondDigit: Char): Int {
        return 10 * (firstDigit - '0') + (secondDigit - '0');
    }
}
