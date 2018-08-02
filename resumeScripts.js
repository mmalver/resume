var selectedSection; // selected section for the menul

// event listeners
function menuEventListener() {
		
	// hide the currently visible section.
	var hideSectionName = selectedSection + "_panel";
	var hideSection = document.getElementById(hideSectionName);
	hideSection.style.display = "none";
	document.getElementById(selectedSection).removeAttribute("aria-selected");
	document.getElementById(selectedSection).className = document.getElementById(selectedSection).className.replace("active","");
	// display the new section.
	document.getElementById(this.id).setAttribute("aria-selected","true"); // screen reader users see button as selected.
	this.className += " active";
	var displaySectionName = this.id  + "_panel";
var 	displaySection = document.getElementById(displaySectionName);
displaySection.style.display = "block";
	// Store the currently selected section so we can deselect it when a new section is selected.
selectedSection = this.id;
}

//accordion event llistener
function accordionEventListener() 
{
	if (this.className.indexOf("accordion_active") >=0) // the section is active
	{
		this.className = this.className.replace("accordion_active","");
		this.setAttribute("aria-expanded","false");
		var panelName = this.id + "_panel";
		document.getElementById(panelName).style.display = "none";
		
	}
	else {
		this.className += " accordion_active";
		panelName = this.id + "_panel";
		this.setAttribute("aria-expanded","true");
		
		document.getElementById(panelName).style.display = "block";
	}		
}	


// set up the menu for first time use.
function setupMenu() {
	// define the section that gets displayed by default.
	if (selectedSection == null)
		selectedSection = "general";
	document.getElementById(selectedSection).className += " active";
	document.getElementById(selectedSection).setAttribute("aria-selected","true");
	var selectedSectionName = selectedSection + "_panel";
	document.getElementById(selectedSectionName).style.display="block";
	// set up  event listeners, define buttons as tab for screen readers, and remove active status from the tab selection buttons.
	
 var listenerList = document.getElementById("menuNavigation").getElementsByTagName("button");
 for (x = 0;x < listenerList.length;++x) {
	 listenerList[x].addEventListener("click",menuEventListener); // add the event listener.
	 listenerList[x].setAttribute("role","tab"); // set the button to role of tab so screen reader users hear tab.
	  listenerList[x].className= listenerList[x].className.replace(" active", ""); // remove the actie class from buttons.
 }
}

// set up the accordion for first time use.
function setupAccordion() {
	// set up  event listeners, define buttons as tab for screen readers, and remove active status from the tab selection buttons.
	
 var listenerList = document.getElementById("careers_panel").getElementsByTagName("button");
 for (x = 0;x < listenerList.length;++x) {
	 listenerList[x].addEventListener("click",accordionEventListener); // add the event listener.
	 listenerList[x].setAttribute("role","tab"); // set the button to role of tab so screen reader users hear tab.
	 listenerList[x].setAttribute("aria-expanded","false"); // set the tab   so screen reader users hear "colapsed" initially.
listenerList[x].setAttribute("aria-controls",listenerList[x].id + "_panel"); // let screen reader know what contol the tab effects.	 
listenerList[x].className = listenerList[x].className.replace(" active", ""); // remove the actie class from buttons.
 }
 

}



function setupResume() 
{
	setupMenu();
	setupAccordion();
	
}
