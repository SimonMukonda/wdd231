
const courses = [
{code:'WDD130',name:'Web Fundamentals',credits:2,subject:'WDD',completed:true},
{code:'WDD131',name:'Dynamic Web Fundamentals',credits:2,subject:'WDD',completed:true},
{code:'WDD231',name:'Web Frontend Development',credits:2,subject:'WDD',completed:false},
{code:'CSE110',name:'Programming Building Blocks',credits:2,subject:'CSE',completed:true},
{code:'CSE111',name:'Programming with Functions',credits:2,subject:'CSE',completed:false}
];

const container = document.querySelector("#course-container");
const creditsDisplay = document.querySelector("#credits");

function displayCourses(list){
container.innerHTML = "";

list.forEach(course=>{
const div=document.createElement("div");
div.className="course";

if(course.completed){
div.classList.add("completed");
}

div.textContent=`${course.code} - ${course.name}`;

div.addEventListener("click", () => {
    displayCourseDetails(course);
});


container.appendChild(div);
});


const credits=list.reduce((sum,c)=>sum+c.credits,0);
creditsDisplay.textContent="Total Credits: "+credits;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click",()=>{
displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click",()=>{
displayCourses(courses.filter(c=>c.subject==="WDD"));
});

document.querySelector("#cse").addEventListener("click",()=>{
displayCourses(courses.filter(c=>c.subject==="CSE"));
});
