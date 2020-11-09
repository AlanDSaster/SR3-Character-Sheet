var character;
var download;
var upload;

$(document).ready(
	function() {



		//import/export links
		download = document.getElementById('exportlink');
		upload = document.getElementById('importlink');

		upload.addEventListener('change', () => {
				var files = upload.files;
				if(files.length == 0) return;

				const file = files[0];

				let reader = new FileReader();

				reader.onload = (e) => {
					const file = e.target.result;
					character = JSON.parse(file);
				};

				reader.onerror = (e) => alert(e.target.error.name);

				reader.readAsText(file);

				UpdateForm();
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
				body 					: 5,
				quickness 		: 6,
				strength 			: 4,
				intelligence	: 6,
				willpower 		: 4,
				charisma 			: 4,

				magick : 0,
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
				{ name : '',	value : 0 }
			],

			UpdateForm : function(attribute) {

				var x;

				//update character bio
				$("#character.bio.name").value = character.bio.name ;
				$("#character.bio.race").value = character.bio.race ;
				$("#character.bio.ghoul").checked = character.bio.ghoul ;

				//update attributes
				$("#character.attributes.body").value = character.attributes.body ;
				$("#character.attributes.quickness").value = character.attributes.quickness ;
				$("#character.attributes.strength").value = character.attributes.strength ;
				$("#character.attributes.intelligence").value = character.attributes.intelligence ;
				$("#character.attributes.willpower").value = character.attributes.willpower ;
				$("#character.attributes.charisma").value = character.attributes.charisma ;

				console.log('reaction: ' + character.attributes.reaction );
				console.log('quickness: ' + character.attributes.quickness );
				console.log('intelligence: ' + character.attributes.intelligence );

				x = parseInt(character.attributes.quickness) + parseInt(character.attributes.intelligence);
				x = x / 2;
				character.attributes.reaction = Math.floor(x);

				$("#character.attributes.magic").value = character.attributes.magic ;
				$("#character.attributes.reaction").value = character.attributes.reaction ;
				document.getElementById("character.attributes.reaction").value = character.attributes.reaction;
				$("#character.attributes.essence").value = character.attributes.essence ;

				//update condition
				$("#character.condition.stun").value = character.condition.stun ;
				$("#character.condition.physical").value = character.condition.physical ;
				$("#character.condition.overflow").value = character.condition.overflow ;
				$("#character.condition.penalties").value = character.condition.penalties ;


				updateConditionMonitor();

				//update dice pools
				$("character.dicepools.karma.current").value = character.dicepools.karma.current ;
				$("character.dicepools.combat.current").value = character.dicepools.combat.current ;
				$("character.dicepools.control.current").value = character.dicepools.control.current ;
				$("character.dicepools.hacking.current").value = character.dicepools.hacking.current ;
				$("character.dicepools.spell.current").value = character.dicepools.spell.current ;
				$("character.dicepools.astral.current").value = character.dicepools.astral.current ;

				var race = document.getElementById('character.bio.race').value;
				var racialkarmarate = 20;
				if(race = 'human') racialkarmarate=20;
				var karmapool_max = karma_earned / racialkarmarate;

				$("character.dicepools.karma.maximum").value = character.dicepools.karma.maximum ;
				$("character.dicepools.combat.maximum").value = character.dicepools.combat.maximum ;
				$("character.dicepools.control.maximum").value = character.dicepools.control.maximum ;
				$("character.dicepools.hacking.maximum").value = character.dicepools.hacking.maximum ;
				$("character.dicepools.spell.maximum").value = character.dicepools.spell.maximum ;
				$("character.dicepools.astral.maximum").value = character.dicepools.astral.maximum ;

				//update skills
				this.UpdateSkillsForm();
			},

			UpdateCharacter : function() {
				character.bio.name = document.getElementById('character.bio.name').value;
				character.bio.race = document.getElementById('character.bio.race').value;
				character.bio.ghoul = document.getElementById('character.bio.ghoul').checked;
			},

			UpdateAttribute : function(id, value) {
				var statement = id + '="' + value + '"';
				eval( statement );
			},

			LoadSkills : function() {

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
			},

			AddBlankSkillRow : function() {
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
				row.appendChild(content);
				content.setAttribute('id', 'character.skills["' + rows.length + '"].name');
				content.setAttribute('onchange', 'character.UpdateAttribute(this.id, this.value);');

				td = document.createElement('td');
				row.appendChild(td);
				content = document.createElement('input');
				row.appendChild(content);
				content.setAttribute('id', 'character.skills["' + rows.length + '"].value');
				content.setAttribute('type', 'number');
				content.setAttribute('onchange', 'character.UpdateAttribute(this.id, this.value);');

				td = document.createElement('td');
				row.appendChild(td);
				content = document.createElement('button');
				row.appendChild(content);
				content.setAttribute('id', 'character.skills["' + rows.length + '"]');
				content.setAttribute('value', 'Open');
				content.setAttribute('onchange', 'character.RollOpen(this.id);');

				td = document.createElement('td');
				row.appendChild(td);
				content = document.createElement('button');
				row.appendChild(content);
				content.setAttribute('id', 'character.skills["' + rows.length + '"]');
				content.setAttribute('value', 'VsTN');
				content.setAttribute('onclick', 'character.RollOpen(this.id);');

				td = document.createElement('td');
				row.appendChild(td);
				content = document.createElement('input');
				row.appendChild(content);
				content.setAttribute('id', 'character.skills["' + rows.length + '"].TN');
				content.setAttribute('type', 'number');
				content.setAttribute('value', 4);
				content.setAttribute('onclick', 'character.RollOpen(this.id, this.value);');

			},

			UpdateSkillsForm : function() {
				var table = document.getElementById("skills_table");
				var tbody = table.tBodies[0];
				var rows = tbody.rows;
				var i;

				console.log(rows.length);
				console.log(character.skills.length);

				if(rows.length == 0) {
					if(character.skills.length > 0) {
						console.log('adding blank skill row');
						character.AddBlankSkillRow();
					} else {
						console.log('adding new skill row');
						character.AddNewSkillRow();
					}
				}

				console.log(character.skills);
				console.log(rows);
				for(i = 0; i < character.skills.length; i++) {
					//character.skills[i].name = document.getElementById('character.skills[' + i + '].name').value;
					//character.skills[i].name = document.getElementById('character.skills[' + i + '].value').value;
				}
			},

			ResetDicePools() {
				for(i=0; i < character.dicepools.length; i++) {
					if(character.dicepools[i] != )
					character.dicepools[i].current = character.dicepools[i].maximum;
				}
			},

			AddNewSkillRow : function(name, value) {
				character.skills.push( { name : "", value : 0 } );
				character.AddBlankSkillRow();
			},

			import() {
				upload.click();
			},

			export() {
				var blob = new Blob([JSON.stringify(character)], { type: "text/plain; charset=utf-8"});
				download.setAttribute("href", URL.createObjectURL(blob));
				download.setAttribute('download', "character.txt");
				download.click();
			}

		}; //end of character















		character.UpdateForm();
	}	//end of $(document).ready
);	//end of $(document).ready
