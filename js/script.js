document.addEventListener("DOMContentLoaded", () => {
  // Add variables
  const ul = document.querySelector(".student-list");
  const lis = ul.children;
  const pagediv = document.querySelector(".page");
  const names = document.querySelectorAll("h3");
  // Create a function to hide all of the items in the list excpet for the ten to show
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
    const pagesNeeded = Math.floor(list.length / 10);
    const div = document.createElement("div");
    div.className = "pagination";
    pagediv.appendChild(div);
    const ul = document.createElement("ul");
    div.appendChild(ul);
    // looping through the pagination links
    for (let i = 0; i <= pagesNeeded; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      const a = document.createElement("A");
      a.href = "#";
      let j = i;
      a.textContent = j + 1;
      li.appendChild(a);
      if (a.textContent === "1")
        //make a default setting for the first link to be active
        a.className = "active";
      div.addEventListener("click", e => {
        // Adding functionality for the pagination links
        if (e.target.textContent == i + 1) {
          // by adding the event listener to the div directly and checking if the pagination's link text is equal to 'i +1'
          showStudents(list, i); // displaying the students according to which page is being clicked
          e.target.className = "active";
        } else {
          a.className = "inactive";
        }
      });
    }
  };
  appendPages(lis);
  //Search box
  const divSearch = document.createElement("div");
  showStudents(lis, 0);
  divSearch.className = "student-search";
  document.querySelector(".page-header").appendChild(divSearch);
  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Search for students...";
  divSearch.appendChild(search);
  const button = document.createElement("button");
  button.textContent = "Search";
  divSearch.appendChild(button);

  //Searching filtering function
  function searchFunc() {
    for (let i = 0; i < lis.length; i++) {
      let li = lis[i];
      if (li) {
        if (names[i].innerHTML.indexOf(search.value) > -1) {
          li.style.display = "";
          searchResults = [li];
          appendPages(searchResults);
        } else {
          li.style.display = "none";
          searchResults = [li];
          appendPages(searchResults);
        }
      }
      // if (names[i].innerHTML.indexOf(search.value) == -1) {
      //   const h2 = document.createElement("h2");
      //   h2.textContent = "Sorry, no one was found!";
      //   document.querySelector(".page-header").appendChild(h2);
    }
  }
  button.addEventListener("click", searchFunc);
});
