const result = document.getElementById('result');

let approval = 'Not approved!';

function getApproval() {
  return new Promise((resolve, reject) => {
    resolve('Approved!')
  }, 500);
}

getApproval().then( (resolvedApproval) => {
 result.textContent = resolvedApproval; 
});



