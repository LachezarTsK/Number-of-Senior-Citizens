
public class Solution {

    private static final int MAX_NON_SENIOR_AGE = 60;
    private static final int[] INDICES_AGE = {11, 12};

    public int countSeniors(String[] details) {
        int countSeniors = 0;
        for (String info : details) {
            if (getAge(info.charAt(INDICES_AGE[0]), info.charAt(INDICES_AGE[1])) > MAX_NON_SENIOR_AGE) {
                ++countSeniors;
            }
        }
        return countSeniors;
    }

    private int getAge(char firstDigit, char secondDigit) {
        return 10 * (firstDigit - '0') + (secondDigit - '0');
    }
}
