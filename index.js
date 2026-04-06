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
switchTab(currentTab);