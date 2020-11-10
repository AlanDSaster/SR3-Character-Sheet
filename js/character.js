var character;
var download;
var upload;

$(document).ready(
	function() {



		//import/export links
		download = document.getElementById('exportlink');
		upload = document.getElementById('importlink');

		upload.addEventListener('change', function() {
				var files = upload.files;
				if(files.length == 0) return;

				const file = files[0];

				let reader = new FileReader();

				reader.onload = function() {
					console.log('before load: \n' + JSON.stringify(character));
					character = JSON.parse(reader.result);
					console.log('after load: \n' + JSON.stringify(character));
					UpdateForm();
				}
				reader.readAsText(file);
			}
		);


		//set up character object
		character = {

			bio : {
				name : '',
				race : '',
				ghoul : false
			},

			attributes : {
				body 					: 0,
				quickness 		: 0,
				strength 			: 0,
				intelligence	: 0,
				willpower 		: 0,
				charisma 			: 0,

				magic : 0,
				reaction : 0,
				essence : 0
			},

			condition : {
				stun : 0,
				physical : 0,
				overflow : 0
			},

			dicepools : {
				karma : {
					current : 0,
					maximum : 0
				},
				combat : {
					current : 0,
					maximum : 0
				},
				control : {
					current : 0,
					maximum : 0
				},
				hacking : {
					current : 0,
					maximum : 0
				},
				spell : {
					current : 0,
					maximum : 0
				},
				astral : {
					current : 0,
					maximum : 0
				}
			},

			skills : [
				{
					name : '',
					value : 0,
					tn : 4
				}
			]

		}; //end of character

		UpdateForm();
	}	//end of $(document).ready
);	//end of $(document).ready


function UpdateForm() {

	var x;

	//update character bio
	document.getElementById('character.bio.name').value = character.bio.name ;
	document.getElementById('character.bio.race').value = character.bio.race ;
	document.getElementById('character.bio.ghoul').checked = character.bio.ghoul ;

	//update attributes
	document.getElementById('character.attributes.body').value = character.attributes.body ;
	document.getElementById('character.attributes.quickness').value = character.attributes.quickness ;
	document.getElementById('character.attributes.strength').value = character.attributes.strength ;
	document.getElementById('character.attributes.intelligence').value = character.attributes.intelligence ;
	document.getElementById('character.attributes.willpower').value = character.attributes.willpower ;
	document.getElementById('character.attributes.charisma').value = character.attributes.charisma ;

	document.getElementById('character.attributes.magic').value = character.attributes.magic ;
	document.getElementById('character.attributes.reaction').value = character.attributes.reaction ;
	document.getElementById('character.attributes.essence').value = character.attributes.essence ;

	//update condition
	document.getElementById('character.condition.stun').value = character.condition.stun ;
	document.getElementById('character.condition.physical').value = character.condition.physical ;
	document.getElementById('character.condition.overflow').value = character.condition.overflow ;
	document.getElementById('character.condition.penalties').value = character.condition.penalties ;


	updateConditionMonitor();

	//update dice pools
	UpdateDicePools();

	//update skills
	UpdateSkillsForm();
}

function UpdateCharacter() {

	//transfer form elements to character
	character.bio.name = document.getElementById('character.bio.name').value;
	character.bio.race = document.getElementById('character.bio.race').value;
	character.bio.ghoul = document.getElementById('character.bio.ghoul').checked;

	//calculate character attributes
	x = parseInt(character.attributes.quickness) + parseInt(character.attributes.intelligence);
	x = x / 2;
	character.attributes.reaction = Math.floor(x);

	var race = document.getElementById('character.bio.race').value;
	var racialkarmarate = 20;
	if(race = 'human') racialkarmarate=20;
	var karmapool_max = karma_earned / racialkarmarate;

	//transfer calculated character attributes to form elements

}

function UpdateDicePools() {
	document.getElementById('character.dicepools.karma.current').value = character.dicepools.karma.current ;
	document.getElementById('character.dicepools.combat.current').value = character.dicepools.combat.current ;
	document.getElementById('character.dicepools.control.current').value = character.dicepools.control.current ;
	document.getElementById('character.dicepools.hacking.current').value = character.dicepools.hacking.current ;
	document.getElementById('character.dicepools.spell.current').value = character.dicepools.spell.current ;
	document.getElementById('character.dicepools.astral.current').value = character.dicepools.astral.current ;

	document.getElementById('character.dicepools.karma.maximum').value = character.dicepools.karma.maximum ;
	document.getElementById('character.dicepools.combat.maximum').value = character.dicepools.combat.maximum ;
	document.getElementById('character.dicepools.control.maximum').value = character.dicepools.control.maximum ;
	document.getElementById('character.dicepools.hacking.maximum').value = character.dicepools.hacking.maximum ;
	document.getElementById('character.dicepools.spell.maximum').value = character.dicepools.spell.maximum ;
	document.getElementById('character.dicepools.astral.maximum').value = character.dicepools.astral.maximum ;
}

function UpdateAttribute(id, value) {
	var statement = id + '="' + value + '"';
	eval( statement );
	UpdateForm();
}

function LoadSkills() {

	var table = document.getElementById("skills_table");
	var tbody = table.tBodies[0];
	var rows = tbody.rows;

	while(rows.length < character.skills.length) {
		AddBlankSkillRow();
	}

	for(i = 0; i < character.skills.length; i++) {
		fieldName = document.getElementById('character.skills[' + i + ']');
		if(document.body.contains(fieldName) == false) {

		}
		fieldValue = document.getElementById('character.skills[' + i + ']');
		if(document.body.contains(fieldName) == false) {

		}

		document.getElementById('character.skills[' + i + '].name').value = character.skills[i].name;
		document.getElementById('character.skills[' + i + '].value').value = character.skills[i].value;

	}
}

function AddBlankSkillRow() {

	var table = document.getElementById('skills_table');
	var tbody = table.tBodies[0];
	var rows = tbody.rows;
	var row;

	//row = <input type=text><input type=number>
	row = document.createElement('tr');
	tbody.appendChild(row);

	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].name');
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].value');
	content.setAttribute('type', 'number');
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('button');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + ']');
	content.innerHTML = 'Open';
	content.style.height = '25px';
	content.style.width = '55px';
	content.setAttribute('onclick', 'RollOpen(this.id + ".name", this.id + ".value");');

	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('button');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + ']');
	content.innerHTML = 'VsTN';
	content.style.height = '25px';
	content.style.width = '55px';
	content.setAttribute('onclick', 'RollVsTN(this.id + ".name", this.id + ".value", this.id + ".tn");');

	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].TN');
	content.setAttribute('type', 'number');
	content.value = 4;
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

}

function UpdateSkillsForm() {
	var table = document.getElementById('skills_table');
	var tbody = table.tBodies[0];
	var rows = tbody.rows;
	var i;

	if(rows.length == 0) {
		if(character.skills.length > 0) {
			AddBlankSkillRow();
		} else {
			AddNewSkillRow();
		}
	}

	for(i = 0; i < character.skills.length; i++) {
		document.getElementById('character.skills[' + i + '].name').value = character.skills[i].name;
		document.getElementById('character.skills[' + i + '].value').value = character.skills[i].value;
		document.getElementById('character.skills[' + i + '].value').tn = character.skills[i].tn;
	}
}

function ResetDicePools() {
	character.dicepools.combat.current = character.dicepools.combat.maximum;
	character.dicepools.control.current = character.dicepools.control.maximum;
	character.dicepools.hacking.current = character.dicepools.hacking.maximum;
	character.dicepools.spell.current = character.dicepools.spell.maximum;
	character.dicepools.astral.current = character.dicepools.astral.maximum;
	UpdateForm();
}

function ResetKarmaPool() {
	character.dicepools.karma.current = character.dicepools.karma.maximum;
	UpdateForm();
}

function AddNewSkillRow(name, value) {
	character.skills.push( { name : '', value : 0 } );
	AddBlankSkillRow();
}

function importCharacter() {
	upload.click();
}

function exportCharacter() {
	var blob = new Blob([JSON.stringify(character)], { type: 'text/plain; charset=utf-8'});
	download.setAttribute('href', URL.createObjectURL(blob));
	download.setAttribute('download', 'character.txt');
	download.click();
}


//copy to clipboard
const CopyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
	SnackbarNotification('Copied text to clipboard');
};

function RollOpen(skill, dice) {
	console.log('rolling open');
	console.log('skill: ' + skill);
	console.log('dice: ' + dice);
	//&{template:default} {{name=Open Skill Test}} {{attack=[[5d6kh1!!]]}} {{Damage=[[6]]S}}
	var text = '&{template:default} {{name=Open Skill Test}} {{' + skill + '=[[' + dice + 'd6kh1!!]] }}';
	CopyToClipboard(text);
}

function RollVsTN(skill, dice, tn) {
	console.log('rolling vs TN');
	console.log('skill: ' + skill);
	console.log('dice: ' + dice);
	console.log('tn: ' + tn);
	//&{template:default} {{name=Pistols (Open)}} {{attack=[[5d6kh1!!]]}} {{Damage=[[6]]S}}
	var text = '&{template:default} {{name=Skill Test}} {{' + skill + '=[[' + dice + 'd6>' + tn + '!!]] }}';
	CopyToClipboard(text);
}
