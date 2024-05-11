
const monthlyActivities = [
    { id: 1, activity: "Electromagnetism", subject: "physics" },
    { id: 2, activity: "Chemical Reactions", subject: "chemistry" },
    { id: 3, activity: "Algebra", subject: "maths" },

];


function displayMonthlyActivities(givensubject) {
    const activitiesContainer = document.getElementById("second");
    activitiesContainer.innerHTML = "";


    const filteredActivities = monthlyActivities.filter((item) => {
        console.log(item.subject);
        return item.subject === givensubject;
    }
    );
    filteredActivities.forEach(activity => {
        activitiesHTML = `<p>${activity.activity}</p>`;
    });
    activitiesContainer.innerHTML = activitiesHTML;


}


document.getElementById("subject").addEventListener("change", function () {
    const selectedSubject = this.value;
    console.log(selectedSubject);
    if (selectedSubject) {
        displayMonthlyActivities(selectedSubject);
    }
});


