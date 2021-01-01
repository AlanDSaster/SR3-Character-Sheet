var SKILLSTABLE = {

  table_name : 'SkillsTable',

  AddEntry : function() {
    var table = document.getElementById(this.table_name);
    var tbody = document.createElement('tbody');
    var tr;
    var th;
    var td;
    var element;
    var option_data;

    table.appendChild(tbody);

    //Row 1 (Headers)
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'X';
      element.setAttribute('onclick', 'SKILLSTABLE.DeleteEntry(this);');
      element.classList.add('delete');
      tr.appendChild(td);
      td.appendChild(element);

      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'SkillsTable.name');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('placeholder', 'Skill Name');
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);

      th = document.createElement('th');
      th.innerText = 'Ranks';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'TN';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'TN Mod';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Pool Dice';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Bonus Dice';
      tr.appendChild(th);

    //Row 2
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //blank for delete column
      td = document.createElement('td');
      tr.appendChild(td);

      //roll vs TN
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Roll VsTN';
      element.setAttribute('onclick', 'SKILLSTABLE.RollVsTN(this);');
      tr.appendChild(td);
      td.appendChild(element);

      //TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'SkillsTable.ranks');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 0);
      element.setAttribute('min', 1);
      td.appendChild(element);
      tr.appendChild(td);

      //TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'SkillsTable.targetnumber');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //TN Modifier
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'SkillsTable.targetnumber_modifier');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //Dice Pool
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'SkillsTable.dicepool');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 0);
      element.setAttribute('min', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //Bonus Dice
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'SkillsTable.bonusdice');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

    //Row 3
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      td = document.createElement('td');
      tr.appendChild(td);

      //roll Open
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Roll Open';
      element.setAttribute('onclick', 'SKILLSTABLE.RollOpen(this);');
      tr.appendChild(td);
      td.appendChild(element);
  },

  DeleteEntry : function(element) {
    element.parentNode.parentNode.parentNode.remove();
  },

  GetSkills : function() {
    console.log('entering GetSkills();');
    skills = [];

    prefix = 'SkillsTable.';

    table = document.getElementById('SkillsTable');
    tbodies = table.tBodies;

    for(let i=0; i<tbodies.length; i++) {
      var name = document.getElementsByName(`${prefix}name`)[i].value;
      var ranks = document.getElementsByName(`${prefix}ranks`)[i].value;
      var targetnumber = document.getElementsByName(`${prefix}targetnumber`)[i].value
      var targetnumber_modifier = document.getElementsByName(`${prefix}targetnumber_modifier`)[i].value
      var dicepool = document.getElementsByName(`${prefix}dicepool`)[i].value
      var bonusdice = document.getElementsByName(`${prefix}bonusdice`)[i].value

      var skill = {
        name: name,
        ranks : ranks,
        targetnumber : targetnumber,
        targetnumber_modifier : targetnumber_modifier,
        dicepool : dicepool,
        bonusdice : bonusdice
      };
      console.log(skill);
      skills.push(skill);
    }

    return skills;
  },

  GetSkill : function(name) {
    var skills = SKILLSTABLE.GetSkills();
    for(let i=0; i<skills.length; i++) {
      console.log(`${skills[i].name}.match(${name})`);
      console.log(`skills[i].name.match(name): ${skills[i].name.match(name)}`);
      if(skills[i].name.match(name)) {
        console.log(`skills[i]: ${skills[i]}`);
        return skills[i];
      }
    }
  },

  GetSkillNames : function() {
    var skills = SKILLSTABLE.GetSkills();
    var names = [];
    for(let i=0; i<skills.length;i++) {
      names.push(skills[i].name);
    }
    return names;
  }

};
