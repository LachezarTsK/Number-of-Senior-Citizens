
using System;

public class Solution
{
    private static readonly int MAX_NON_SENIOR_AGE = 60;
    private static readonly int[] INDICES_AGE = { 11, 12 };

    public int CountSeniors(string[] details)
    {
        int countSeniors = 0;
        foreach (String info in details)
        {
            if (GetAge(info[INDICES_AGE[0]], info[INDICES_AGE[1]]) > MAX_NON_SENIOR_AGE)
            {
                ++countSeniors;
            }
        }
        return countSeniors;
    }

    private int GetAge(char firstDigit, char secondDigit)
    {
        return 10 * (firstDigit - '0') + (secondDigit - '0');
    }
}
