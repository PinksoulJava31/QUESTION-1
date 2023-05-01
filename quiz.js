function CalculateScore() {
    let score = 0;
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;
    
    if (q1=== "b"){
        score++;
    }

    if (q2=== "b"){
        score++;
    }

    if (q3=== "d"){
        score++;
    }

    alert(`you scored${score}out of 3
    the correct answer for q1 is (b)
    the correct answefor q2 is (b)
    the correct answer for q3 is (d)`);
}

