document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const q1 = document.getElementById('q1');
    const q2 = document.getElementById('q2');
    const q3 = document.getElementById('q3');
    
    let isValid = true;
    
    if (q1.value !== '10') {
        q1.classList.add('error');
        isValid = false;
    } else {
        q1.classList.remove('error');
    }
    
    if (q2.value !== 'azul') {
        q2.classList.add('error');
        isValid = false;
    } else {
        q2.classList.remove('error');
    }
    
    if (q3.value !== 'Sim') {
        q3.classList.add('error');
        isValid = false;
    } else {
        q3.classList.remove('error');
    }
    
    if (isValid) {
        this.submit();
    }
});
