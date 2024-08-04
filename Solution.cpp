
#include <array>
#include <vector>
using namespace std;

class Solution {

    const static int MAX_NON_SENIOR_AGE = 60;
    array<int, 2> INDICES_AGE = { 11, 12 };

public:
    int countSeniors(const vector<string>& details) const {
        int countSeniors = 0;
        for (const auto& info : details) {
            if (getAge(info[INDICES_AGE[0]], info[INDICES_AGE[1]]) > MAX_NON_SENIOR_AGE) {
                ++countSeniors;
            }
        }
        return countSeniors;
    }

private:
    int getAge(char firstDigit, char secondDigit) const {
        return 10 * (firstDigit - '0') + (secondDigit - '0');
    }
};
