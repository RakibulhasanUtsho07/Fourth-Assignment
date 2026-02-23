let totalParticipantsContainer = [];
let totalInterviewersContainer = [];
let totalRejectionsContainer = [];

 const totalParticipants = document.getElementById("total-participant");
 const totalInterviewers = document.getElementById("total-interviewers");
 const totalRejections = document.getElementById("total-rejection");

const allCardDiv = document.getElementById("job-applications-container");
const mainContainer = document.querySelector("main");



const allApplications = document.getElementById('job-applications-container');
console.log(allApplications.children.length);

// function calculateCount(){
//     totalParticipants.innerText = allApplications.children.length;
//     totalInterviewers.innerText = totalInterviewersContainer.children.length;
//     totalRejections.innerText = totalRejectionsContainer.children.length;
// }
// calculateCount();

 const countTotalParticipants = totalParticipants.innerText;
 let countTotalInterviewers = totalInterviewers.innerText;
const countTotalRejections = totalRejections.innerText;
 const interviewers =document.querySelectorAll(".interview-btn");
 const rejections = document.querySelectorAll(".reject-btn");
 
 

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-black/50');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-black/50');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-black/50');

    allFilterBtn.classList.add('bg-white', 'text-black/50');
    interviewFilterBtn.classList.add('bg-white', 'text-black/50');
    rejectedFilterBtn.classList.add('bg-white', 'text-black/50');



    const open = document.getElementById(id);
     

    open.classList.remove('bg-white', 'text-black/50');
    open.classList.add('bg-blue-500', 'text-white')

    
}
mainContainer.addEventListener("click",function(event){
    console.log(event.target.parentNode.parentNode);
    const skillName = event.target.parentNode.parentNode;
    console.log(skillName.innerText);
})