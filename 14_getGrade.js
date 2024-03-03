function getGrade(s1, s2, s3) {
    let result = (s1 + s2 + s3) / 3;
    let grade = '';

    // 90 <= score <= 100
    if (result >= 90 && result <= 100) {
        grade += 'A';
    } else if (result >= 80 && result < 90) {
        grade += 'B';
    } else if (result >= 70 && result < 80) {
        grade += 'C';
    } else if (result >= 60 && result < 70) {
        grade += 'D';
    } else if (result < 60) {
        grade += 'F';
    }

    return grade;
}

console.log(getGrade(92,93,94));
