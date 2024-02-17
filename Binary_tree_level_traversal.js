var levelOrder = function(root) {
    if (root === null) return [];
    let res = [];
    let level = 0;
    let queue = [[root, level]];
    while (queue.length > 0) {
        let [node, level] = queue.shift();
        if (node.left !== null) {
            queue.push([node.left, level + 1]);
        }
        if (node.right !== null) {
            queue.push([node.right, level + 1]);
        }
        if (level < res.length) {
            res[level].push(node.val);
        } else {
            res.push([node.val]);
        }
    }
    return res;
};
