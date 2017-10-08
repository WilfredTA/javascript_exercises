/* Given a number 'm', find 'n'
  such that n^3 ... (n-1)^3 ... 1^3 equals m.
  If n does not exist, return -1
  */


function findNb(m) {
    var n = 1;
    var sumNCubed = 0;

    for (var i = 1; sumNCubed <= m; i += 1) {
      n = i;
      sumNCubed += Math.pow(n, 3);
      if (sumNCubed === m) {
        return n;
      }
    }

    return (-1);
}