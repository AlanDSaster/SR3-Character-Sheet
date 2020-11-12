var character;
var download;
var upload;
var deletebuttondisplay;

$(document).ready(
	function() {

		SnackbarNotification('Designed for use in Mozilla Firefox');

		deletebuttondisplay = 'none'

		//import/export links
		download = document.getElementById('exportlink');
		upload = document.getElementById('importlink');

		upload.addEventListener('change', function() {
				var files = upload.files;
				if(files.length == 0) return;

				const file = files[0];

				let reader = new FileReader();

				reader.onload = function() {
					character = JSON.parse(reader.result);
					UpdateForm();
				}
				reader.readAsText(file);
			}
		);

		InitializeConditionMonitor();

		//set up character object
		character = {

			bio : {
				name : '',
				race : '',
				ghoul : false
			},

			attributes : {
				body 					: 1,
				quickness 		: 1,
				strength 			: 1,
				intelligence	: 1,
				willpower 		: 1,
				charisma 			: 1,

				magic : 0,
				reaction : 0,
				essence : 0
			},

			condition : {
				stun : 0,
				physical : 0,
				overflow : 0,
				maxoverflow : 1,
				penalties : 0
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
					tn : 4,
					tn_modifier : 0,
					dicepool : 0,
					dicepool_touse : 0,
					complementarydice_touse : 0,
					bonusdice_touse : 0
				}
			],

			edges_and_flaws : {

				skill_aptitutde : {
					name : 'Aptitude',
					skill : '',
					level : 0,
					maximum : 1
				},

				will_to_live : {
					name : 'will_to_live',
					level : 0,
					maximum : 3
				}
			}

		}; //end of character

		UpdateForm();
	}	//end of $(document).ready
);	//end of $(document).ready

function CalculateCharacterStats() {
	console.log('CalculateCharacterStats() under construction')
}

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
	document.getElementById('character.condition.maxoverflow').value = character.condition.maxoverflow ;
	document.getElementById('character.condition.penalties').value = character.condition.penalties ;


	UpdateConditionMonitor();

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

function DeathAnimation() {
	var div = document.getElementById('deathdiv');
	unfade(div);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
		element.style.visibility = 'visible';
    var timer = setInterval(function () {
        if (op >= 0.8){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.025;
    }, 10);
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
	table.removeChild(tbody);
	tbody = document.createElement('tbody');
	table.appendChild(tbody);
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

	//skill name text input
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].name');
	content.setAttribute('type', 'text');
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//skill value number input
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].value');
	content.setAttribute('type', 'number');
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//open roll button
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('button');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + ']');
	content.innerHTML = 'Open';
	content.style.height = '25px';
	content.style.width = '55px';
	content.setAttribute('onclick', 'RollOpen(character.skills[' + parseInt(rows.length - 1) + '].name, character.skills[' + parseInt(rows.length - 1) + '].value);');

	//tn roll button
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('button');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + ']');
	content.innerHTML = 'VsTN';
	content.style.height = '25px';
	content.style.width = '55px';
	content.setAttribute('onclick', 'RollVsTN(character.skills[' + parseInt(rows.length - 1) + '].name, character.skills[' + parseInt(rows.length - 1) + '].value, character.skills[' + parseInt(rows.length - 1) + '].tn);');

	//target number input
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].tn');
	content.setAttribute('type', 'number');
	content.value = 4;
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//TN modifier number input
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].tn_modifier');
	content.setAttribute('type', 'number');
	content.value = 0;
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//dice pool dropdown selector
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].dicepool');
	content.value = 'none';
	content.setAttribute('type', 'text');
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//number of dice to use from selected dice pool
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].dicepool_touse');
	content.setAttribute('type', 'number');
	content.value = 4;
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//number of complementary dice to roll
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].complementarydice_touse');
	content.setAttribute('type', 'number');
	content.value = 4;
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');

	//number of complementary dice to roll
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('input');
	td.appendChild(content);
	content.setAttribute('id', 'character.skills[' + parseInt(rows.length-1) + '].bonusdice_touse');
	content.setAttribute('type', 'number');
	content.value = 4;
	content.setAttribute('onchange', 'UpdateAttribute(this.id, this.value);');





	//debug buttons
	//delete skill button (hidden)
	td = document.createElement('td');
	row.appendChild(td);
	content = document.createElement('button');
	td.appendChild(content);
	content.setAttribute('id', 'DeleteSkill(' + parseInt(rows.length-1) + ')');
	content.innerHTML = 'X';
	content.style.textAlign = 'center';
	content.classList.add('DeleteButton');
	content.style.display = deletebuttondisplay;
	content.style.height = '25px';
	content.style.width = '35px';
	content.setAttribute('onclick', 'DeleteSkill(' + parseInt(rows.length - 1) + ');');



	//update the div size to contain contents
	UpdateDivSizeToContents('skills_div');
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
		document.getElementById('character.skills[' + i + '].value').tn_modifier = character.skills[i].tn_modifier;
		document.getElementById('character.skills[' + i + '].value').dicepool = character.skills[i].dicepool;
		document.getElementById('character.skills[' + i + '].value').dicepool_touse = character.skills[i].dicepool_touse;
		document.getElementById('character.skills[' + i + '].value').complementarydice_touse = character.skills[i].complementarydice_touse;
		document.getElementById('character.skills[' + i + '].value').bonusdice_touse = character.skills[i].bonusdice_touse;
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

function RollOpen(skill, skilldice, pool, pooldice, complementarydice, bonusdice) {
	console.log('rolling open');
	console.log('skill: ' + skill);
	console.log('dice: ' + skilldice);
	console.log('pool: ' + pool);
	console.log('pooldice: ' + pooldice);
	console.log('complementarydice: ' + complementarydice);
	console.log('bonusdice: ' + bonusdice);

	//&{template:default} {{name=Open Skill Test}} {{attack=[[5d6kh1!!]]}} {{Damage=[[6]]S}}
	var text =  '&{template:default}'
						+ '{{name=Open Skill Test}}'
						+ '{{' + skill + '=[[' + skilldice + 'd6kh1!!]] }}'
						+ '{{' + pool + '=[[' + pooldice + ']]}}'
						+ '{{' + 'complementary' + '=[[' + complementarydice + ']]}}'
						+ '{{' + 'bonus' + '=[[' + bonusdice + ']]}}';
	CopyToClipboard(text);
}

function RollVsTN(skill, skilldice, tn, pool, pooldice, complementarydice, bonusdice) {
	console.log('rolling vs TN');
	console.log('dice: ' + skilldice);
	console.log('tn: ' + tn);
	console.log('pool: ' + pool);
	console.log('pooldice: ' + pooldice);
	console.log('complementarydice: ' + complementarydice);
	console.log('bonusdice: ' + bonusdice);

	//&{template:default} {{name=Pistols (Open)}} {{attack=[[5d6kh1!!]]}} {{Damage=[[6]]S}}
	var text =  '&{template:default}'
						+ '{{name=TN Skill Test}}'
						+ '{{' + 'TN' + '=[[' + tn + ']]}}'
						+ '{{' + skill + '=[[' + skilldice + 'd6kh1!!]] }}'
						+ '{{' + pool + '=[[' + pooldice + ']]}}'
						+ '{{' + 'complementary' + '=[[' + complementarydice + ']]}}'
						+ '{{' + 'bonus' + '=[[' + bonusdice + ']]}}';
	CopyToClipboard(text);
}

function DeleteSkill(row_index) {
	if(PromptYesNo()) {
		//document.getElementById('skills_table').tBodies[0].deleteRow(row_index);
		character.skills.splice(row_index, 1);
		LoadSkills();
	}
}

function PromptYesNo() {
	if(confirm('Please confirm action')) {
	  return true;
	} else {
	  return false;
	}
}

function ToggleDeleteButtonVisibility() {
	var buttons = document.getElementsByClassName('DeleteButton');
	var button;
	var i;

	if(deletebuttondisplay == 'none') {
		deletebuttondisplay = 'block';
	} else {
		deletebuttondisplay = 'none';
	}

	for(i = 0; i < buttons.length; i++) {

		button = buttons[i];

		button.style.display = deletebuttondisplay;

	}
}


function DamageTrackClicked(amount, type) {

	var track;
	var current;
	var total = 0;
	console.log(type);
	switch(type) {
		case 'stun':
			track = document.getElementsByName('stunDamage');
			current = parseInt(character.condition.stun);
			break;
		case 'physical':
			track = document.getElementsByName('physicalDamage');
			current = parseInt(character.condition.physical);
			break;
	}

	console.log(new String(amount).valueOf());
	console.log(new String(current).valueOf());
	if(new String(amount).valueOf() == new String(current).valueOf() ) {
		amount = parseInt(amount) - 1;
	}

	console.log('entering: SetDamage(' + amount + ', ' + type + ')');
	SetDamage(amount, type);

}

function SetDamage(amount, type) {
	amount = parseInt(amount);
	var track;

	switch(type) {
		case 'stun':
			track = document.getElementsByName('stunDamage');
			character.condition.stun = amount;
			break;
		case 'physical':
			track = document.getElementsByName('physicalDamage');
			character.condition.physical = amount;
			break;
	}

	CalculateConditionPenalties();
}

function AddDamage(amount, type) {
	amount = parseInt(amount);

	switch(type) {
		case 'stun':
			character.condition.stun = parseInt(character.condition.stun) + amount;
			break;
		case 'physical':
			character.condition.physical = parseInt(character.condition.physical) + amount;
			break;
	}

	if(character.condition.stun > 10) {
		character.condition.physical = parseInt(character.condition.stun) + parseInt(character.condition.physical) - 10;
		character.condition.stun = 10;
	}

	if(character.condition.physical > 10) {
		character.condition.overflow = parseInt(character.condition.overflow) + parseInt(character.condition.physical) - 10;
		character.condition.physical = 10;
	}

	CalculateConditionPenalties(character.condition.stun, character.condition.physical);
}

function CalculateConditionPenalties() {

	stun = parseInt(character.condition.stun);
	physical = parseInt(character.condition.physical);
	var stun_penalty = 0;
	var physical_penalty = 0;

	//stun
	if(stun > 1) {
		stun_penalty = stun_penalty + 1;
	}
	if(stun > 3) {
		stun_penalty = stun_penalty + 1;
	}
	if(stun > 6) {
		stun_penalty = stun_penalty + 1;
	}

	//physical
	if(physical > 1) {
		physical_penalty = physical_penalty + 1;
	}
	if(physical > 3) {
		physical_penalty = physical_penalty + 1;
	}
	if(physical > 6) {
		physical_penalty = physical_penalty + 1;
	}

	character.condition.stunpenalty = stun_penalty;
	character.condition.physicalpenalty = physical_penalty;
	character.condition.penalties = stun_penalty + physical_penalty;

	UpdateConditionMonitor();
}

function UpdateDamageTrack(amount, type) {

	amount = parseInt(amount);
	var track;

	switch(type) {
		case 'stun':
			track = document.getElementsByName('stunDamage');
			break;
		case 'physical':
			track = document.getElementsByName('physicalDamage');
			break;

	}

	for(i = 0; i < track.length; i++) {
		if(i < amount) {
			track[i].checked = true;
		} else {
			track[i].checked = false;
		}
	}
}

function InitializeConditionMonitor() {

	var track;

	track = document.getElementsByName('stunDamage');
	for(i=0; i < track.length; i++) {
		track[i].innerText = track[i].value;
	}

	track = document.getElementsByName('physicalDamage');
	for(i=0; i < track.length; i++) {
		track[i].innerText = track[i].value;
	}

}

function UpdateConditionMonitor() {
	UpdateDamageTrack(character.condition.stun, 'stun');
	UpdateDamageTrack(character.condition.physical, 'physical');
	document.getElementById('character.condition.stun').value = character.condition.stun;
	document.getElementById('character.condition.physical').value = character.condition.physical;
	document.getElementById('character.condition.overflow').value = character.condition.overflow;
	document.getElementById('character.condition.stunpenalty').value = character.condition.stunpenalty;
	document.getElementById('character.condition.physicalpenalty').value = character.condition.physicalpenalty;
	document.getElementById('character.condition.penalties').value = character.condition.penalties;

	character.condition.maxoverflow = parseInt(character.attributes.body) + parseInt(character.edges_and_flaws.will_to_live.level);
	if(character.condition.overflow >= character.condition.maxoverflow) {
		DeathAnimation();
	}
}
