function isPalindrome(str) {



    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    function checkPalindrome(left, right) {
        if (left >= right) {
            return true;
        }
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        return checkPalindrome(left + 1, right - 1);
    }

    return checkPalindrome(0, cleanedStr.length - 1);
}

