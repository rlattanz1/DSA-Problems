var hasCycle = function(head) {
    let visited  = new Set();
    while (head) {
        visited.add(head);
        head = head.next;
        if (visited.has(head)) {
            return true;
        }
    }
    return false;
};
