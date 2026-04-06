let currentTab = "all";
const tabActive = ["bg-slate-900", "border-slate-900", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200","text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");

function switchTab(tab){
    const tabs = ["all", "interview", "rejected"];
    for (const t of tabs){
        const tabName = document.getElementById("tab-" + t);
        if(t === tab){
            tabName.classList.remove( ... tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove( ... tabActive)
            tabName.classList.add( ... tabInactive);
        }
       
    }
    const pages = [allContainer, interviewContainer, rejectContainer];

    for (const section of pages){
        section.classList.add("hidden");
    }

    if(tab === 'all'){
        allContainer.classList.remove("hidden");
    } else if( tab === 'interview'){
        interviewContainer.classList.remove("hidden");
    } else {
        rejectContainer.classList.remove ("hidden");
    }

}

// stat update
const statTotal = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statReject = document.getElementById("stat-reject");

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest (".card");
     const parent = card.parentNode;
    const state = card.querySelector (".state");
   

    if (clickedElement.classList.contains("interview")){
        state.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        updateStat();
    }
    if (clickedElement.classList.contains("rejected")){
        state.innerText = "Rejected";
        rejectContainer.appendChild(card);
        updateStat();
    }
    if (clickedElement.classList.contains("delete")){
        parent.removeChild(card);
        updateStat();
    }
})

function updateStat(){
    statTotal.innerText = allContainer.children.length;
    statInterview.innerText = interviewContainer.children.length;
    statReject.innerText = rejectContainer.children.length;
}

updateStat();