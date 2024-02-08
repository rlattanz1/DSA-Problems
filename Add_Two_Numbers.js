function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest; // ternary shorthand operations also works when expanded to full ternary
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));;
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};

// console.log(addTwoNumbers([2,4,3], [5,6,4]));
// console.log(addTwoNumbers([0], [0]));
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
