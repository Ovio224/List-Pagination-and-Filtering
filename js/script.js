document.addEventListener("DOMContentLoaded", () => {
  // Add variables that store DOM elements you will need to reference and/or manipulate
  const ul = document.querySelector(".student-list");
  const lis = ul.children;
  showStudents(lis, 0);
  // Create a function to hide all of the items in the list excpet for the ten you want to show
  // Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
  function showStudents(list, page) {
    let pageFirstIndex = 10 * page;
    let pageLastIndex = 10 * (page + 1) - 1;
    for (let i = 0; i < list.length; i++) {
      let listIndex = Array.prototype.indexOf.call(ul.children, list[i]);

      if (listIndex >= pageFirstIndex && listIndex <= pageLastIndex) {
        list[i].style.display = "";
      } else {
        list[i].style.display = "none";
      }
    }
  }

  // Create and append the pagination links
  const appendPages = list => {
    let pagesNeeded = Math.floor(lis.length / 10);
    const div = document.createElement("div");
    div.className = "pagination";
    const pagediv = document.querySelector(".page");
    pagediv.appendChild(div);
    const ul = document.createElement("ul");
    div.appendChild(ul);

    for (let i = 0; i <= pagesNeeded; i++) { 
      const li = document.createElement("li");
      ul.appendChild(li);
      const a = document.createElement("A");
      a.href = "#";
      let j = i;
      a.textContent = j + 1;
      li.appendChild(a);
      div.addEventListener("click", e => { // Adding functionality for the pagination buttons
        if (e.target.textContent == i + 1) { // by adding the event listener to the div directly and checking if the pagination's link text is equal to 'i +1'
          showStudents(lis, i); // displaying the students according to which page is being clicked so it's dynamic
          e.target.className = "active";
        } else {
          a.className = "";
        }
      });
    }
  };
  appendPages(lis);

  // Add functionality to the pagination buttons so that they show and hide the correct items
  // Tip: If you created a function above to show/hide list items, it could be helpful here
});
