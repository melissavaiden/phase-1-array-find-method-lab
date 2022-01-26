const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record) {
    const found = record.find(record => record.result === 'W');
    if (found) {
        return found.year
    } else {
        return undefined;
    }

}