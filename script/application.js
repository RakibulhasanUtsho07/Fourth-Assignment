
let totalInterviewersContainer = [];
let totalRejectionsContainer = [];
let currentStatus = "all"

const noJob ="No jobs available"
const noJobOpportunities ="Check back soon for new job opportunities"
const noInterviews ="No interview available"
const noInterviewOpportunities ="Check back soon for new interviews opportunities"
const noRejections ="No rejections available"
const noRejectionsOpportunities ="Check back soon for new rejections"

const secondCountName = document.getElementById("second-count-name");
 const totalParticipants = document.getElementById("total-participant");
 const totalApplicationsSecond = document.getElementById("total-applications-second");
 const totalInterviewers = document.getElementById("total-interviewers");
 const totalRejections = document.getElementById("total-rejection");
 const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const mainContainer = document.querySelector("main");
const interviewersContainer = document.getElementById("interviewers-container");
const rejectionsContainer = document.getElementById("rejections-container");
const noJobApplications = document.getElementById("no-job-applications");
const interviewers =document.querySelectorAll(".interview-btn");
const rejections = document.querySelectorAll(".reject-btn");


//rejection render
function renderRejections(){
    rejectionsContainer.innerHTML = "";

    for(const rejection of totalRejectionsContainer){
        let div = document.createElement('div');
        div.className ="job-application  p-6 bg-white rounded-lg mt-5"
        div.innerHTML = 
        `
        
                    
                        <div class="flex justify-between ">
                            <div>
                                <h3 class="company-name text-[18px] text-[#002C5C] leading-[26px] font-semibold mb-[4px]">${rejection.companyName}</h3>
                                <p class="position text-[16px] text-[#64748B] leading-[22px] mb-5">${rejection.position}</p>
                            </div>
                            <img src="./Trash.png" alt="" class="w-[12px] h-[13px]  border border-gray/50 rounded-full cursor-pointer card-delete">
                        </div>
                        <ul class="list-disc flex gap-10 mb-[20px] ">
                            <span class="location text-[#64748B] text-[14px] leading-[20px]">${rejection.location}</span>
                            <li class="working-time text-[#64748B] text-[14px] leading-[20px]">${rejection.workingTime}</li>
                            <li class="salary text-[#64748B] text-[14px] leading-[20px] ">${rejection.salary}</li>
                        </ul>
                        <p class="applied-or-not text-[14px] leading-[20px] text-[#002C5C] bg-[#F1F2F4] p-4       w-[120px] rounded-lg mb-[8px] text-center">${rejection.applierOrNot}</p>
                        <p class="work-information text-[14px] leading-[20px] text-[#323B49] mb-5">${rejection.workInformation}</p>
                        <div class="selection flex gap-5">
                            <button onclick="" class="interview-btn text-[14px] leading-[20px] p-4 px-6 rounded-lg border border-[#10B981] text-[#10B981] cursor-pointer ">interview</button>
                            <button class="reject-btn text-[14px] leading-[20px] p-4 px-6 rounded-lg border border-[#EF4444] text-[#EF4444] cursor-pointer" >Rejected</button>
                        </div>              
            
        `
        rejectionsContainer.appendChild(div);
    }
 }
 //interviewers render
  function renderInterviewers(){
    interviewersContainer.innerHTML = "";

    for(const interviewer of totalInterviewersContainer){
        let div = document.createElement('div');
        div.className ="job-application  p-6 bg-white rounded-lg mt-5"
        div.innerHTML = 
        `
        
                    <div class="flex justify-between ">
                            <div>
                                <h3 class="company-name text-[18px] text-[#002C5C] leading-[26px] font-semibold mb-[4px]">${interviewer.companyName}</h3>
                                <p class="position text-[16px] text-[#64748B] leading-[22px] mb-5">${interviewer.position}</p>
                            </div>
                            <img src="./Trash.png" alt="" class="w-[12px] h-[13px]  border border-gray/50 rounded-full cursor-pointer card-delete">
                        </div>
                        <ul class="list-disc flex gap-10 mb-[20px] ">
                            <span class="location text-[#64748B] text-[14px] leading-[20px]">${interviewer.location}</span>
                            <li class="working-time text-[#64748B] text-[14px] leading-[20px]">${interviewer.workingTime}</li>
                            <li class="salary text-[#64748B] text-[14px] leading-[20px] ">${interviewer.salary}</li>
                        </ul>
                        <p class="applied-or-not text-[14px] leading-[20px] text-[#002C5C] bg-[#F1F2F4] p-4       w-[120px] rounded-lg mb-[8px] text-center">${interviewer.applierOrNot}</p>
                        <p class="work-information text-[14px] leading-[20px] text-[#323B49] mb-5">${interviewer.workInformation}</p>
                        <div class="selection flex gap-5">
                            <button onclick="" class="interview-btn text-[14px] leading-[20px] p-4 px-6 rounded-lg border border-[#10B981] text-[#10B981] cursor-pointer ">interview</button>
                            <button class="reject-btn text-[14px] leading-[20px] p-4 px-6 rounded-lg border border-[#EF4444] text-[#EF4444] cursor-pointer" >Rejected</button>
                        </div>  
      
        `
        interviewersContainer.appendChild(div);
    }
 }
const allApplications = document.getElementById('job-applications-container');

 // create a function to count dynamically   how many application, interviewers, rejections
 function calculateCount(){
    totalParticipants.innerText = allApplications.children.length;
    totalApplicationsSecond.innerText = allApplications.children.length
    
    totalInterviewers.innerText = totalInterviewersContainer.length;
    totalRejections.innerText = totalRejectionsContainer.length;
}
calculateCount();
 

const totalApplicationsLength = allApplications.children.length;
const interviewApplicationLength = interviewersContainer.children.length;
const  rejectionsApplicationLength = rejectionsContainer.children.length;
   
 

    const countTotalParticipants = totalParticipants.innerText;
    let countTotalInterviewers = totalInterviewers.innerText;
    const countTotalRejections = totalRejections.innerText;
    
 
 


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-white', 'text-black/50');
    interviewFilterBtn.classList.add('bg-white', 'text-black/50');
    rejectedFilterBtn.classList.add('bg-white', 'text-black/50');



    const open = document.getElementById(id);
    currentStatus = id;
     

    open.classList.remove('bg-white', 'text-black/50');
    open.classList.add('bg-blue-500', 'text-white');
   


    
    if(id === "all-filter-btn"){
        
        if(allApplications.children.length <= 0){
            allApplications.classList.add("hidden");
            noJobApplications.classList.remove("hidden");
        }
        else{
            interviewersContainer.classList.add("hidden");
            rejectionsContainer.classList.add("hidden");
            allApplications.classList.remove("hidden");
            noJobApplications.classList.add("hidden");
        }
        
        
    }
    else if(id === "interview-filter-btn"){
        
        renderInterviewers()
        if(interviewersContainer.children.length <= 0){
            allApplications.classList.add("hidden");
            interviewersContainer.classList.add("hidden")
            noJobApplications.classList.remove("hidden");
        }
        else{
            allApplications.classList.add("hidden");
            rejectionsContainer.classList.add("hidden")
            interviewersContainer.classList.remove("hidden")
            noJobApplications.classList.add("hidden");
            
        }
}
        
    else if(id === "rejected-filter-btn"){
        
        renderInterviewers()
        calculateCount();
        if(rejectionsContainer.children.length <= 0){
            allApplications.classList.add("hidden");
            rejectionsContainer.classList.remove("hidden");
            noJobApplications.classList.remove("hidden");
        }
        else{
            allApplications.classList.add("hidden");
            interviewersContainer.classList.add("hidden");
            rejectionsContainer.classList.remove("hidden");
            noJobApplications.classList.add("hidden");
            
        }   
    } 
    if(id === "all-filter-btn"){
        noJobApplications.innerHTML =`
                <img src="./jobs.png" alt="" class="mx-auto">
                <h3 class="text-[20px] font-semibold text-[#111827]">${noJob}</h3>
                <p class="text-[14px] leading-[20px] text-[#323B49]">${noJobOpportunities}</p>
        `
    }
    if(id === "interview-filter-btn"){
        noJobApplications.innerHTML =`
                <img src="./jobs.png" alt="" class="mx-auto">
                <h3 class="text-[20px] font-semibold text-[#111827]">${noInterviews}</h3>
                <p class="text-[14px] leading-[20px] text-[#323B49]">${noInterviewOpportunities}</p>
        `
    }
    if(id === "rejected-filter-btn"){
        noJobApplications.innerHTML =`
                <img src="./jobs.png" alt="" class="mx-auto">
                <h3 class="text-[20px] font-semibold text-[#111827]">${noRejections}</h3>
                <p class="text-[14px] leading-[20px] text-[#323B49]">${noRejectionsOpportunities}</p>
        `
    }
    if(id === "all-filter-btn"){
        secondCountName.innerText = "Jobs"
        totalApplicationsSecond.innerText = allApplications.children.length;
    }
    else if(id ==="interview-filter-btn"){
        secondCountName.innerText ="Interviewers"
        totalApplicationsSecond.innerText = totalInterviewersContainer.length;
    }
    else if(id === "rejected-filter-btn"){
        secondCountName.innerText ="Rejections"
        totalApplicationsSecond.innerText = totalRejectionsContainer.length;
    }
    
 }  

mainContainer.addEventListener("click", function(trash){
    
    if(trash.target.classList.contains("card-delete")){
        const  cardDelete = trash.target.closest(".job-application")
        
            if(cardDelete){
                const companyName = cardDelete.querySelector(".company-name").innerText
                cardDelete.remove();
                totalInterviewersContainer = totalInterviewersContainer.filter(item => item.companyName !== companyName);
                totalRejectionsContainer = totalRejectionsContainer.filter(item => item.companyName !== companyName);
                
                calculateCount();
            
                if(currentStatus ==="interview-filter-btn" && totalInterviewersContainer.length === 0){
                    interviewersContainer.classList.add("hidden");
                    noJobApplications.classList.remove("hidden");
                }
                else if(currentStatus==="rejected-filter-btn" &&totalRejectionsContainer.length === 0){
                    rejectionsContainer.classList.add("hidden")
                    noJobApplications.classList.remove("hidden");
                }
                if(currentStatus === "all-filter-btn"){
                     secondCountName.innerText = "Jobs"
                     totalApplicationsSecond.innerText = allApplications.children.length;
                    }
                else if(currentStatus ==="interview-filter-btn"){
                    secondCountName.innerText ="Interviewers"
                    totalApplicationsSecond.innerText = totalInterviewersContainer.length;
                    }
                else if(currentStatus === "rejected-filter-btn"){
                    secondCountName.innerText ="Rejections"
                    totalApplicationsSecond.innerText = totalRejectionsContainer.length;
                    }
            }
            

        }
        
})

mainContainer.addEventListener("click",function (event){
    
    if(event.target.classList.contains("interview-btn")){
        const applicationInformation = event.target.parentNode.parentNode;
        const companyName = applicationInformation.querySelector('.company-name').innerText;
        const position = applicationInformation.querySelector('.position').innerText;
        const location = applicationInformation.querySelector('.location').innerText;
        const workingTime = applicationInformation.querySelector('.working-time').innerText;
        const salary = applicationInformation.querySelector('.salary').innerText;
        const applierOrNot = applicationInformation.querySelector('.applied-or-not').innerText;
        const workInformation = applicationInformation.querySelector('.work-information').innerText;
        applicationInformation.querySelector('.applied-or-not').innerText = "APPLIED";

       const applicantInfo = {
            companyName,
             position,
             location,
             workingTime,
            salary,
            applierOrNot :'APPLIED',
            workInformation
    }
    
   
    const nameExist= totalInterviewersContainer.find(item=> item.companyName == applicantInfo.companyName)
    if(!nameExist){
        totalInterviewersContainer.push(applicantInfo);
        
    }
    totalRejectionsContainer = totalRejectionsContainer.filter(item => item.companyName != applicantInfo.companyName);
     
    if(currentStatus =="interview-filter-btn"){
        renderInterviewers();
    }

    renderInterviewers();
    renderRejections();
    calculateCount();
     
    }  
      else if(event.target.classList.contains("reject-btn")){
        const applicationInformation = event.target.parentNode.parentNode;
        const companyName = applicationInformation.querySelector('.company-name').innerText;
        const position = applicationInformation.querySelector('.position').innerText;
        const location = applicationInformation.querySelector('.location').innerText;
        const workingTime = applicationInformation.querySelector('.working-time').innerText;
        const salary = applicationInformation.querySelector('.salary').innerText;
        const applierOrNot = applicationInformation.querySelector('.applied-or-not').innerText;
        const workInformation = applicationInformation.querySelector('.work-information').innerText;
        applicationInformation.querySelector('.applied-or-not').innerText = "REJECTED";

        const applicantInfo = {
            companyName,
            position,
            location,
            workingTime,
            salary,
            applierOrNot : 'REJECTED',
            workInformation
        }
    
   
    const nameExist= totalRejectionsContainer.find(item=> item.companyName == applicantInfo.companyName)
    if(!nameExist){
        totalRejectionsContainer.push(applicantInfo);
         
    }
    totalInterviewersContainer = totalInterviewersContainer.filter(item => item.companyName != applicantInfo.companyName);
     
    if(currentStatus == "rejected-filter-btn"){
        renderRejections();
    }
    renderInterviewers();
    renderRejections();
    calculateCount();      
         
}  
})
    
