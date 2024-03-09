var isPalindrome = function(head) {
    // Slow as fuck solution
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.join('') == arr.reverse().join('')
}
