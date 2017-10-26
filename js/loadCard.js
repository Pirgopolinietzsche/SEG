function loadCards(){
	document.getElementById("leftColumn").innerHTML = '<div class="card" id="PRJ" style="width: 20rem;"><div class="card-header"><h5 class="card-title">6CCS3PRJ Individual Project</h5><!-- Rolestablist role acts as a composite user interface widgethttps://www.w3.org/TR/wai-aria/roles#tablist--><div class="collapse prjCollapse"><ul class="nav nav-tabs card-header-tabs" id="home-tab" role="tablist"><li class="nav-item"><a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">Summary</a></li><li class="nav-item"><a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">More info</a></li></ul></div></div><div class="tab-content collapse prjCollapse" id="PRJTabContent"><div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div class="card-body"><p class="card-text">The project provides you with an opportunity to engage in a self-managed and detailed investigation of an aspect of computer science. A substantial piece of written work will be produced and a significant piece of software.</p><p class="card-text">In addition to extending their knowledge of computer science, you will develop a number of additional, transferable skills in relation to: literature searching, retrieval and analysis, report writing, the oral presentation of material, project planning and management.</p></div></div><div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><div class="card-body"> <p class="card-text"><strong>Credit value:</strong> 30</p><p class="card-text"><strong>Coordinator:</strong> Dr Natalia Criado-Pacheco (office hours)</p><p class="card-text"><strong>Semester:</strong> 1 and 2</p><p class="card-text"><strong>Assessment:</strong> 100% final report. Attendance at an oral presentation is compulsory for passing the module (Marking Model 1 - Blind Double Marking)</p><p class="card-text"><strong>Formative assessment:</strong> Four project reports and one project background and specification report</p><p class="card-text"><strong>Supervision:</strong> There are no weekly scheduled lectures for the module; a member of the academic staff supervises your project work. Project titles are released at the beginning of the academic year.</p><p class="card-text"><strong>MSci students:</strong> If you started the MSci Computer Science programme in September 2014 or earlier you can take 6CCS3PRJ as a replacement module for two of your optional taught modules. Choosing 6CCS3PRJ will allow you the possibility of transferring to BSc Computer Science programme during Year 3, should you wish (transfer to be undertaken by the end of the May examinations).<br/> For students starting MSci Computer Science from September 2015 onwards, 6CCS3PRJ is compulsory.</p></div></div></div><div class="card-footer"><button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".prjCollapse" aria-expanded="false" aria-controls="collapseExample">Expand</button><div onclick="move(\'PRJ\', \'selectPRJ\')" class="btn btn-primary ml-2" id="selectPRJ">Select Module</div></div></div>';

}

var isSelected = false;

function moveRight(module, btn) {
		document.getElementById('rightColumn').appendChild(document.getElementById(module));
		document.getElementById(btn).innerHTML = "Remove Module";
		isSelected = true;
}

function moveLeft(module, btn) {
		document.getElementById('leftColumn').appendChild(document.getElementById(module));
		document.getElementById(btn).innerHTML = "Select Module";
		isSelected = false;
}

function move(module, btn) {
		if (isSelected){
			moveLeft(module, btn);
		} else {
			moveRight(module, btn);
		}
}