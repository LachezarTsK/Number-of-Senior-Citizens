
package main

import "fmt"

const MAX_NON_SENIOR_AGE = 60

var INDICES_AGE = [2]int{11, 12}

func countSeniors(details []string) int {
    countSeniors := 0
    for _, info := range details {
        if getAge(info[INDICES_AGE[0]], info[INDICES_AGE[1]]) > MAX_NON_SENIOR_AGE {
            countSeniors++
        }
    }
    return countSeniors
}

func getAge(firstDigit byte, secondDigit byte) int {
    return 10*(int)(firstDigit-'0') + int(secondDigit-'0')
}
