var RANGEDWEAPONS_RANGE = {
  'Hold-Out Pistol' : {
    minimum : { range : 0 },
    short : { range : 5, target_number : 4 },
    medium : { range : 15, target_number : 5 },
    long : { range : 30, target_number : 6 },
    extreme : { range : 50, target_number : 9 }
  },
  'Light Pistol' : {
    minimum : { range : 0 },
    short : { range : 5, target_number : 4 },
    medium : { range : 15, target_number : 5 },
    long : { range : 30, target_number : 6 },
    extreme : { range : 50, target_number : 9 }
  },
  'Heavy Pistol' : {
    minimum : { range : 0 },
    short : { range : 5, target_number : 4 },
    medium : { range : 20, target_number : 5 },
    long : { range : 40, target_number : 6 },
    extreme : { range : 60, target_number : 9 }
  },
  'Taser' : {
    minimum : { range : 0 },
    short : { range : 5, target_number : 4 },
    medium : { range : 10, target_number : 5 },
    long : { range : 12, target_number : 6 },
    extreme : { range : 15, target_number : 9 }
  },
  'SMG' : {
    minimum : { range : 0 },
    short : { range : 10, target_number : 4 },
    medium : { range : 40, target_number : 5 },
    long : { range : 80, target_number : 6 },
    extreme : { range : 150, target_number : 9 }
  },
  'Shotgun' : {
    minimum : { range : 0 },
    short : { range : 10, target_number : 4 },
    medium : { range : 20, target_number : 5 },
    long : { range : 50, target_number : 6 },
    extreme : { range : 100, target_number : 9 }
  },
  'Sporting Rifle' : {
    minimum : { range : 0 },
    short : { range : 100, target_number : 4 },
    medium : { range : 250, target_number : 5 },
    long : { range : 500, target_number : 6 },
    extreme : { range : 750, target_number : 9 }
  },
  'Sniper Rifle' : {
    minimum : { range : 0 },
    short : { range : 150, target_number : 4 },
    medium : { range : 300, target_number : 5 },
    long : { range : 700, target_number : 6 },
    extreme : { range : 1000, target_number : 9 }
  },
  'Assault Rifle' : {
    minimum : { range : 0 },
    short : { range : 50, target_number : 4 },
    medium : { range : 150, target_number : 5 },
    long : { range : 350, target_number : 6 },
    extreme : { range : 550, target_number : 9 }
  },
  'Light Machine Gun' : {
    minimum : { range : 0 },
    short : { range : 75, target_number : 4 },
    medium : { range : 200, target_number : 5 },
    long : { range : 400, target_number : 6 },
    extreme : { range : 800, target_number : 9 }
  },
  'Medium Machine Gun' : {
    minimum : { range : 0 },
    short : { range : 80, target_number : 4 },
    medium : { range : 250, target_number : 5 },
    long : { range : 750, target_number : 6 },
    extreme : { range : 1200, target_number : 9 }
  },
  'Heavy Machine Gun' : {
    minimum : { range : 0 },
    short : { range : 80, target_number : 4 },
    medium : { range : 250, target_number : 5 },
    long : { range : 800, target_number : 6 },
    extreme : { range : 1500, target_number : 9 }
  },
  'Assault Cannon' : {
    minimum : { range : 0 },
    short : { range : 100, target_number : 4 },
    medium : { range : 300, target_number : 5 },
    long : { range : 900, target_number : 6 },
    extreme : { range : 2400, target_number : 9 }
  },
  'Grenade Launcher' : {
    minimum : { range : 5 },
    short : { range : 50, target_number : 4 },
    medium : { range : 100, target_number : 5 },
    long : { range : 150, target_number : 8 },
    extreme : { range : 300, target_number : 9 }
  },
  'Missile Launcher' : {
    minimum : { range : 20 },
    short : { range : 150, target_number : 4 },
    medium : { range : 450, target_number : 5 },
    long : { range : 1200, target_number : 6 },
    extreme : { range : 3000, target_number : 9 }
  }
}

var RANGEDWEAPONSTABLE = {

  table_name : 'RangedWeaponsTable',

  Initializae : function() {

  },

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
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.DeleteEntry(this);');
      element.classList.add('delete');
      tr.appendChild(td);
      td.appendChild(element);

      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.name');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('placeholder', 'Weapon Name');
      element.classList.add('derp');
      td.setAttribute('colspan', 2);
      tr.appendChild(td);
      td.appendChild(element);

      th = document.createElement('th');
      th.innerText = 'First\nShot';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'TN';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Second\nShot';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'TN';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Power';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Damage';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = '';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Ranks';
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Range';
      th.setAttribute('colspan', 2);
      tr.appendChild(th);

      th = document.createElement('th');
      th.innerText = 'Attachments';
      th.setAttribute('colspan', 2);
      tr.appendChild(th);

    //Row 2
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //delete button space
      td = document.createElement('td');
      tr.appendChild(td);

      //weapon type select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.type');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'Hold-Out Pistol',
        'Light Pistol',
        'Heavy Pistol',
        'Taser',
        'SMG',
        'Shotgun',
        'Sporting Rifle',
        'Sniper Rifle',
        'Assault Rifle',
        'Light Machine Gun',
        'Medium Machine Gun',
        'Heavy Machine Gun',
        'Assault Cannon',
        'Grenade Launcher',
        'Missile Launcher'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      td.setAttribute('colspan', 2);
      tr.appendChild(td);
      td.appendChild(element);

      //first shot button
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Single Shot';
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_SingleShot(this);');
      tr.appendChild(td);
      td.appendChild(element);

      //first shot TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_singleshot');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //blank space, Single Shot mode does not have second shot button
      td = document.createElement('td');
      tr.appendChild(td);

      //blank space, Single Shot mode does not have second shot TN
      td = document.createElement('td');
      tr.appendChild(td);

      //single shot power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.power_base');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 1);
      element.setAttribute('min', 1);
      tr.appendChild(td);
      td.appendChild(element);

      //single shot damage
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.damage_base');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'L',
        'M',
        'S',
        'D'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);

      //Skill/Attribute select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.skill_used');
      options_data = [];
      skills = SKILLSTABLE.GetSkills();
      for(let i=0; i<skills.length; i++) {
        let skill = skills[i].name;
        options_data.push(skill);
      }
      for(let i=0; i<options_data.length; i++) {
        let option = document.createElement('option');
        option.text = options_data[i];
        element.options.add(option);
      }
      tr.appendChild(td);
      td.appendChild(element);

      //Skill Ranks
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.skill_ranks');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly = true;
      tr.appendChild(td);
      td.appendChild(element);

      //label for range minimum
      td = document.createElement('td');
      td.innerText = 'Minimum';
      tr.appendChild(td);

      //input for minimum range
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.range_minimum');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      element.readOnly = true;
      tr.appendChild(td);
      td.appendChild(element);

      //label for accessory, internal
      td = document.createElement('td');
      td.innerText = 'Internal';
      tr.appendChild(td);

      //internal accessory select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.attachment_internal');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'None',
        'Smartgun (+Goggles)',
        'Smartgun (+Smartlink)'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);

    //Row 3
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //delete button's column
      td = document.createElement('td');
      tr.appendChild(td);

      //reload mechanism
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.reloadmethod');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'Clip',
        'Magazine',
        'Drum'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      td.setAttribute('colspan', 2);
      tr.appendChild(td);
      td.appendChild(element);

      //first semi-auto shot button
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Semi-Auto #1';
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_SemiAuto1();');
      tr.appendChild(td);
      td.appendChild(element);

      //first semi-auto shot TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_semiauto_1');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //Second semi-auto shot button
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Semi-Auto #2';
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_SemiAuto2();');
      tr.appendChild(td);
      td.appendChild(element);

      //second semi-auto shot TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_semiauto_2');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //semi-auto power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.power_semiauto');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //semi-auto damage
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.damage_semiauto');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //defaulting select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.defaulting_type');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'Not Defaulting (+0)',
        'Defaulting to Skill (+2)',
        'Defaulting to Specialization (+3)',
        'Defaulting to Attribute (+4)'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      td.setAttribute('colspan', 2);
      tr.appendChild(td);
      td.appendChild(element);

      //label for range short
      td = document.createElement('td');
      td.innerText = 'Short';
      tr.appendChild(td);

      //input for short range
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.range_short');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      element.readOnly = true;
      tr.appendChild(td);
      td.appendChild(element);

      //label for accessory, stock
      td = document.createElement('td');
      td.innerText = 'Stock';
      tr.appendChild(td);

      //stock accessory select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.attachment_stock');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'None',
        'Standard Stock',
        'Folding Stock'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);

    //Row 4
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //blank space for delete column
      td = document.createElement('td');
      tr.appendChild(td);

      //ammo Type
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.ammunition_type');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'Standard Rounds',
        'Flechette Rounds',
        'Armor Piercing Rounds'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      td.setAttribute('colspan', 2);
      tr.appendChild(td);
      td.appendChild(element);

      //first burst shot button
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Burst #1';
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_Burst1();');
      tr.appendChild(td);
      td.appendChild(element);

      //first burst shot TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_burst_1');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //Second burst shot button
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Burst #2';
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_Burst2();');
      tr.appendChild(td);
      td.appendChild(element);

      //second burst shot TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_burst_2');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //burst power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.power_burst');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //burst damage
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.damage_burst');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //label for dice pool dice
      td = document.createElement('td');
      td.innerText = 'Combat Pool Dice:';
      tr.appendChild(td);

      //used dice pool dice
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.combat_pool_dice');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 0);
      element.setAttribute('value', 0);
      tr.appendChild(td);
      td.appendChild(element);

      //label for range medium
      td = document.createElement('td');
      td.innerText = 'Medium';
      tr.appendChild(td);

      //input for minimum range
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.range_medium');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      element.readOnly = true;
      tr.appendChild(td);
      td.appendChild(element);

      //label for accessory, top
      td = document.createElement('td');
      td.innerText = 'Top';
      tr.appendChild(td);

      //top accessory select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.attachment_top');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'None',
        'Smartgun (+Goggles)',
        'Smartgun (+Smartlink)',
        'Magnification I',
        'Magnification II',
        'Magnification III',
        'Ultrasonic Vision (+Goggles)',
        'Scope(Thermal)',
        'Scope(Low-Light)'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);

    //Row 4
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //blank spot for delete button column
      td = document.createElement('td');
      tr.appendChild(td);

      //blank
      td = document.createElement('td');
      td.innerText = 'TN Modifier:';
      tr.appendChild(td);

      //TN Modifier
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_modifier');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //full auto button
      td = document.createElement('td');
      element = document.createElement('button');
      element.innerText = 'Full Auto';
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_FullAuto();');
      tr.appendChild(td);
      td.appendChild(element);

      //full auto TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.targetnumber_fullauto');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //shots fired label
      td = document.createElement('td');
      td.innerText = 'Rounds Fired:';
      tr.appendChild(td);

      //full auto shots fired
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.fullauto_roundsfired');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 3);
      element.setAttribute('max', 18);
      element.setAttribute('value', 3);
      td.appendChild(element);
      tr.appendChild(td);

      //burst power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.power_fullauto');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //burst damage
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.damage_fullauto');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //bonus dice label
      td = document.createElement('td');
      td.innerText = 'Bonus Dice:';
      tr.appendChild(td);

      //bonus dice
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.bonus_dice');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 0);
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //long range label
      td = document.createElement('td');
      td.innerText = 'Long';
      tr.appendChild(td);

      //long range
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.range_long');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      element.readOnly = true;
      tr.appendChild(td);
      td.appendChild(element);

      //accessory, underbarrel label
      td = document.createElement('td');
      td.innerText = 'Underbarrel';
      tr.appendChild(td);

      //accessory, underbarrel
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.attachment_underbarrel');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'None',
        'Smartgun (+Goggles)',
        'Smartgun (+Smartlink)',
        'Magnification I',
        'Magnification II',
        'Magnification III',
        'Ultrasonic Vision (+Goggles)',
        'Scope(Thermal)',
        'Scope(Low-Light)'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);

    //Row 5
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //blank spot for delete button column
      td = document.createElement('td');
      tr.appendChild(td);

      //blank
      td = document.createElement('td');
      td.innerText = 'Current Ammo:';
      tr.appendChild(td);

      //Current Ammo
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.ammunition_current');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 0);
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //choke label
      td = document.createElement('td');
      td.innerText = 'Shotgun Choke:';
      tr.appendChild(td);

      //Choke
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.shotgun_choke');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 3);
      element.setAttribute('max', 10);
      element.setAttribute('value', 3);
      td.appendChild(element);
      tr.appendChild(td);

      //empty
      td = document.createElement('td');
      tr.appendChild(td);

      //empty
      td = document.createElement('td');
      tr.appendChild(td);

      //empty
      td = document.createElement('td');
      tr.appendChild(td);

      //empty
      td = document.createElement('td');
      tr.appendChild(td);

      //blank
      td = document.createElement('td');
      tr.appendChild(td);

      //blank
      td = document.createElement('td');
      tr.appendChild(td);

      //long range label
      td = document.createElement('td');
      td.innerText = 'Extreme';
      tr.appendChild(td);

      //long range
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.range_extreme');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      element.readOnly = true;
      tr.appendChild(td);
      td.appendChild(element);

      //accessory, underbarrel label
      td = document.createElement('td');
      td.innerText = 'Barrel';
      tr.appendChild(td);

      //accessory, underbarrel
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'RangedWeaponsTable.attachment_barrel');
      element.setAttribute('onchange', 'Update();');
      option_data = [
        'None',
        'Gas Vent II',
        'Gas Vent III',
        'Silencer',
        'Suppressor'
      ];
      for(let i=0; i<option_data.length; i++) {
        let option = document.createElement('option');
        option.text = option_data[i];
        element.options.add(option);
      }
      element.classList.add('derp');
      tr.appendChild(td);
      td.appendChild(element);


    //Row 6
    tr = document.createElement('tr');
    tbody.appendChild(tr);

      //blank spot for delete button column
      td = document.createElement('td');
      tr.appendChild(td);

      //Ammo label
      td = document.createElement('td');
      td.innerText = 'Maximum Ammo:';
      tr.appendChild(td);

      //max ammo
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.ammunition_maximum');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 1);
      element.setAttribute('value', 1);
      tr.appendChild(td);
      td.appendChild(element);

      //max ammo
      td = document.createElement('td');
      td.innerText = 'Tracer Rounds';
      tr.appendChild(td);

      //empty cell
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'RangedWeaponsTable.tracers_used');
      element.setAttribute('onchange', 'Update();');
      element.setAttribute('type', 'checkbox');
      td.appendChild(element);
      tr.appendChild(td);


      this.UpdateEntries();
  },

  DeleteEntry(element) {
    element.parentNode.parentNode.parentNode.remove();
  },









  Attack_SingleShot : function(button) {
    var tbodyindex = GetTbodyIndex(button);
    var tn = document.getElementsByName('macro')[tbodyindex].value;
    CopyToClipboard(formula);
  },

  UpdateEntries : function() {
    elements = document.getElementsByName('RangedWeaponsTable.name');
    for(var i=0; i<elements.length; i++) {
      this.UpdateEntry(elements[i]);
    }
  },

  UpdateEntry : function(element) { //invoke with onchange='UpdateEntry(this);'

    var body_index = GetTbodyIndex(element);

    var prefix = 'RangedWeaponsTable.';

    var conditions = GetRangedAttackConditions();

    var total_conditions_modifier = 0;


  	var name = document.getElementsByName(`${prefix}name`)[body_index].value;
  	var type = document.getElementsByName(`${prefix}type`)[body_index].value;

    var range_minimum = parseInt(RANGEDWEAPONS_RANGE[type].minimum.range);


    document.getElementsByName(`${prefix}range_minimum`)[body_index].value = range_minimum;
  	var range_short = parseInt(RANGEDWEAPONS_RANGE[type].short.range);
    document.getElementsByName(`${prefix}range_short`)[body_index].value = range_short;
  	var range_medium = parseInt(RANGEDWEAPONS_RANGE[type].medium.range);
    document.getElementsByName(`${prefix}range_medium`)[body_index].value = range_medium;
  	var range_long = parseInt(RANGEDWEAPONS_RANGE[type].long.range);
    document.getElementsByName(`${prefix}range_long`)[body_index].value = range_long;
  	var range_extreme = parseInt(RANGEDWEAPONS_RANGE[type].extreme.range);
    document.getElementsByName(`${prefix}range_extreme`)[body_index].value = range_extreme;

    var meters_from_target = parseInt(conditions.meters_from_target);
    meters_from_target = parseInt(meters_from_target);
    var range = 'short';
    if(meters_from_target > range_short) {
      range = 'medium';
    }
    if(meters_from_target > range_medium) {
      range = 'long';
    }
    if(meters_from_target > range_long) {
      range = 'extreme';
    }
    var targetnumber_base = RANGEDWEAPONS_RANGE[type][range].target_number;






    var targetnumber_modifier_target_movement = 0;
    switch(conditions.target_movement) {
      case 'Stationary (-1)':
        targetnumber_modifier_target_movement = -1;
        break;
      case 'Walking (+0)':
        targetnumber_modifier_target_movement = 0;
        break;
      case 'Running (+2)':
        targetnumber_modifier_target_movement = 2;
        break;
    }

    modifier_targetmovement = parseInt(targetnumber_modifier_target_movement);




    var targetnumber_modifier_attacker_movement = 0;
    console.log(`conditions.attacker_movement: ${conditions.attacker_movement}`);
    switch(conditions.attacker_movement) {
      case 'Stationary (+0)':
        targetnumber_modifier_attacker_movement = 0;
        break;
      case 'Walking (+1)':
        targetnumber_modifier_attacker_movement = 1;
        break;
      case 'Walking, Difficult Ground (+2)':
        targetnumber_modifier_attacker_movement = 2;
        break;
      case 'Running (+4)':
        targetnumber_modifier_attacker_movement = 4;
        break;
      case 'Running, Difficult Ground (+6)':
        targetnumber_modifier_attacker_movement = 6;
        break;
    }
    console.log(`targetnumber_modifier_attacker_movement: ${targetnumber_modifier_attacker_movement}`);




  	var reloadmethod = document.getElementsByName(`${prefix}reloadmethod`)[body_index].value;
  	var ammunition_type = document.getElementsByName(`${prefix}ammunition_type`)[body_index].value;
  	var targetnumber_modifier = document.getElementsByName(`${prefix}targetnumber_modifier`)[body_index].value;
  	var ammunition_current = document.getElementsByName(`${prefix}ammunition_current`)[body_index].value;
  	var ammunition_maximum = document.getElementsByName(`${prefix}ammunition_maximum`)[body_index].value;
  	var shotgun_choke = parseInt(document.getElementsByName(`${prefix}shotgun_choke`)[body_index].value);
  	var fullauto_roundsfired = document.getElementsByName(`${prefix}fullauto_roundsfired`)[body_index].value;
  	var defaulting_type = document.getElementsByName(`${prefix}defaulting_type`)[body_index].value;
  	var combat_pool_dice = document.getElementsByName(`${prefix}combat_pool_dice`)[body_index].value;
  	var bonus_dice = document.getElementsByName(`${prefix}bonus_dice`)[body_index].value;
  	var attachment_internal = document.getElementsByName(`${prefix}attachment_internal`)[body_index].value;
  	var attachment_stock = document.getElementsByName(`${prefix}attachment_stock`)[body_index].value;
  	var attachment_top = document.getElementsByName(`${prefix}attachment_top`)[body_index].value;
  	var attachment_underbarrel = document.getElementsByName(`${prefix}attachment_underbarrel`)[body_index].value;
  	var attachment_barrel = document.getElementsByName(`${prefix}attachment_barrel`)[body_index].value;
    var skill_used = document.getElementsByName(`${prefix}skill_used`)[body_index].value;
  	var skill_ranks = 0;
    //parseInt(SKILLSTABLE.GetSkill(skill_used).ranks);
    document.getElementsByName(`${prefix}skill_ranks`).value = skill_ranks;

    var tracers_used = document.getElementsByName(`${prefix}tracers_used`)[body_index].checked;
    var power_base = document.getElementsByName(`${prefix}power_base`)[body_index].value;
    var damage_base = document.getElementsByName(`${prefix}damage_base`)[body_index].value;
    var tracer_rounds_fired = 0;

    var modifier_defaulting = 0;
    switch(defaulting_type) {
      case 'Not Defaulting (+0)':
        break;
      case 'Defaulting to Skill (+2)':
        modifier_defaulting = 2;
        break;
      case 'Defaulting to Specialization (+3)':
        modifier_defaulting = 3;
        break;
      case 'Defaulting to Attribute (+4)':
        break;
      default:
        break;
    }

    var modifier_aim_actions = parseInt(conditions.aim_actions) * -1;
    var modifier_number_of_targets = (parseInt(conditions.targets) - 1) * 2;
    var modifier_recoil = 0;
    var recoil = 0;

    var heavyweapon = false;

    switch(type) {
      case 'Heavy Machine Gun':
        heavyweapon = true;
        break;
      case 'Assault Cannon':
        heavyweapon = true;
        break;
      case 'Grenade Launcher':
        heavyweapon = true;
        break;
      case 'Missile Launcher':
        heavyweapon = true;
        break;
      default:
        heavyweapon = false;
        break;
    }
    console.log(conditions);
    var recoil_compensation = parseInt(conditions.recoil_compensation);
    var gyrostabilization = parseInt(conditions.gyrostabilization);
    recoil = 0;
    recoil -= parseInt(gyrostabilization) - parseInt(recoil_compensation);
    if(recoil < 0) recoil = 0;
    if(heavyweapon) {
      recoil = parseInt(recoil) * 2;
    }
    modifier_recoil = parseInt(recoil);



    movement = parseInt(targetnumber_modifier_attacker_movement);
    movement -= gyrostabilization;
    if(movement < 0) movement = 0;

    var modifier_attackermovement = parseInt(movement);


    modifier_blindfire = 0;
    if(conditions.blindfire) modifier_blindfire = 8;

    var modifier_partialcover = 0;
    if(conditions.partialcover) modifier_partialcover = 4;

    var modifier_usingsecondfirearm = 0;
    if(conditions.usingsecondfirearm) modifier_usingsecondfirearm = 2;
    var modifier_calledshot  = 0;
    if(conditions.calledshot) modifier_calledshot = 4;

    modifier_vision = 0;
    vision_type_index = parseInt(conditions.vision_type);
    visibility_index = parseInt(conditions.visibility);

    lightspell = conditions.light_spell;
    modifier_vision = parseInt(VISIBILITY_TABLE[visibility_index][vision_type_index]);

    modifier_flashlight = 0;
    modifier_lightspell = 0;
    if(flashlight) modifier_flashlight = -4;
    if(lightspell) modifier_lightspell = -4;
    if(visibility_index > 0 && visibility_index <= 3) {
      modifier_vision = modifier_vision + modifier_flashlight + modifier_lightspell;
      if(modifier_vision < 0) modifier_vision = 0;
    }

    modifier_weaponTNmodifier = parseInt(targetnumber_modifier);

    power_modifier_shotgun = 0;
    modifier_shotgun_range_increments = 0;
    shotgun_range_increments = 0;
    if(ammunition_type.match('Flechette Rounds') || type.match('Shotgun')) {
      shotgun_range_increments = parseInt(meters_from_target) / parseInt(shotgun_choke);
      shotgun_range_increments = parseInt(shotgun_range_increments);
      modifier_shotgun_range_increments = shotgun_range_increments * -1;
    }
    console.log(`meters_from_target: ${meters_from_target}`);
    console.log(`shotgun_choke: ${shotgun_choke}`);
    console.log(`modifier_shotgun_range_increments ${modifier_shotgun_range_increments}`);
    console.log(`shotgun_range_increments: ${shotgun_range_increments}`);
    console.log(`choke increments: ${modifier_shotgun_range_increments}`);
    modifier_other = parseInt(conditions.othermodifiers);

    power_base = parseInt(power_base);
    modifier_shotgun_range_increments = parseInt(modifier_shotgun_range_increments);
  	var power_semiauto = power_base + modifier_shotgun_range_increments;
    document.getElementsByName(`${prefix}power_semiauto`)[body_index].value = power_semiauto;

    var damage_semiauto = damage_base;
    document.getElementsByName(`${prefix}damage_semiauto`)[body_index].value = damage_semiauto;

    var sum = 0;
    var targetnumber_singleshot;
    sum = 0;
    attack_conditions = [
      targetnumber_base,
      modifier_defaulting,
      modifier_aim_actions,
      modifier_number_of_targets,
      modifier_recoil,
      modifier_attackermovement,
      modifier_targetmovement,
      modifier_blindfire,
      modifier_partialcover,
      modifier_usingsecondfirearm,
      modifier_calledshot,
      modifier_vision,
      modifier_weaponTNmodifier,
      modifier_shotgun_range_increments,
      modifier_other
    ];
    for(let x=0; x<attack_conditions.length; x++) {
      sum += attack_conditions[x];
    }
    targetnumber_singleshot = sum;





    var targetnumber_semiauto_1;
    targetnumber_semiauto_1 = sum;



    var targetnumber_semiauto_2;
    recoil = 1;
    recoil -= gyrostabilization - recoil_compensation;
    if(recoil < 0) recoil = 0;
    if(heavyweapon) recoil = recoil * 2;
    modifier_recoil = recoil;
    attack_conditions = [
      targetnumber_base,
      modifier_defaulting,
      modifier_aim_actions,
      modifier_number_of_targets,
      modifier_recoil,
      modifier_attackermovement,
      modifier_targetmovement,
      modifier_blindfire,
      modifier_partialcover,
      modifier_usingsecondfirearm,
      modifier_calledshot,
      modifier_vision,
      modifier_weaponTNmodifier,
      modifier_shotgun_range_increments,
      modifier_other
    ];
    for(let x=0; x<attack_conditions.length; x++) {
      sum += attack_conditions[x];
    }
    targetnumber_semiauto_2 = sum;


    var tracers = tracers_used;
    modifier_tracers = 0;
    if(tracers) modifier_tracers = -1;
    var targetnumber_burst_1;
    recoil = 3;
    recoil -= gyrostabilization - recoil_compensation;
    if(recoil < 0) recoil = 0;
    if(heavyweapon) recoil = recoil * 2;
    modifier_recoil = recoil;
    attack_conditions = [
      targetnumber_base,
      modifier_defaulting,
      modifier_aim_actions,
      modifier_number_of_targets,
      modifier_recoil,
      modifier_attackermovement,
      modifier_targetmovement,
      modifier_blindfire,
      modifier_partialcover,
      modifier_usingsecondfirearm,
      modifier_calledshot,
      modifier_vision,
      modifier_weaponTNmodifier,
      modifier_shotgun_range_increments,
      modifier_other,
      modifier_tracers
    ];
    for(let x=0; x<attack_conditions.length; x++) {
      sum += attack_conditions[x];
    }
    targetnumber_burst_1 = sum;


    var targetnumber_burst_2;
    modifier_tracers = 0;
    if(tracers) modifier_tracers = -2;
    recoil = 3;
    recoil -= gyrostabilization - recoil_compensation;
    if(recoil < 0) recoil = 0;
    if(heavyweapon) recoil = recoil * 2;
    modifier_recoil = recoil;
    attack_conditions = [
      targetnumber_base,
      modifier_defaulting,
      modifier_aim_actions,
      modifier_number_of_targets,
      modifier_recoil,
      modifier_attackermovement,
      modifier_targetmovement,
      modifier_blindfire,
      modifier_partialcover,
      modifier_usingsecondfirearm,
      modifier_calledshot,
      modifier_vision,
      modifier_weaponTNmodifier,
      modifier_shotgun_range_increments,
      modifier_other,
      modifier_tracers
    ];
    for(let x=0; x<attack_conditions.length; x++) {
      sum += attack_conditions[x];
    }
    targetnumber_burst_2 = sum;

    var targetnumber_fullauto;
    modifier_tracers = 0;
    fullauto_roundsfired = parseInt(fullauto_roundsfired);
    tracer_rounds_fired = 0;

    if(tracers_used) {
      tracer_rounds_fired = fullauto_roundsfired / 3;
      tracer_rounds_fired = parseInt(tracer_rounds_fired);
    }
    if(tracers) modifier_tracers = tracer_rounds_fired * -1;
    recoil = 3;
    recoil -= gyrostabilization - recoil_compensation;
    if(recoil < 0) recoil = 0;
    if(heavyweapon) recoil = recoil * 2;
    modifier_recoil = recoil;
    attack_conditions = [
      targetnumber_base,
      modifier_defaulting,
      modifier_aim_actions,
      modifier_number_of_targets,
      modifier_recoil,
      modifier_attackermovement,
      modifier_targetmovement,
      modifier_blindfire,
      modifier_partialcover,
      modifier_usingsecondfirearm,
      modifier_calledshot,
      modifier_vision,
      modifier_weaponTNmodifier,
      modifier_shotgun_range_increments,
      modifier_other,
      modifier_tracers
    ];
    for(let x=0; x<attack_conditions.length; x++) {
      sum += attack_conditions[x];
    }
    targetnumber_fullauto = sum;
    sum = targetnumber_base    +modifier_defaulting    +modifier_aim_actions    +modifier_number_of_targets   +modifier_recoil   +modifier_attackermovement    +modifier_targetmovement    +modifier_blindfire    +modifier_partialcover    +modifier_usingsecondfirearm    +modifier_calledshot    +modifier_vision    +modifier_weaponTNmodifier    +modifier_shotgun_range_increments+modifier_other+modifier_tracers;



    var power_burst;
    if(tracers_used) {
      tracer_rounds_fired = 1;
    }
    power_burst = parseInt(power_base) + 3 - tracer_rounds_fired + modifier_shotgun_range_increments;
    document.getElementsByName(`${prefix}power_burst`)[body_index].value = power_burst;

    var damage_burst = damage_base;
    if(!tracers_used) {
      switch(damage_base) {
        case 'L':
          damage_burst = 'M';
          break;
        case 'M':
          damage_burst = 'S';
          break;
        case 'S':
          damage_burst = 'D';
          break;
        default:
          break;
      }
    }
    document.getElementsByName(`${prefix}damage_burst`)[body_index].value = damage_burst;


  	var power_fullauto;
    fullauto_roundsfired = parseInt(fullauto_roundsfired);
    tracer_rounds_fired = 0;

    if(tracers_used) {
      tracer_rounds_fired = fullauto_roundsfired / 3;
      tracer_rounds_fired = parseInt(tracer_rounds_fired);
    }
    power_fullauto = power_base + fullauto_roundsfired - tracer_rounds_fired + modifier_shotgun_range_increments;
    document.getElementsByName(`${prefix}power_fullauto`)[body_index].value = power_fullauto;


  	var damage_fullauto;
    var damage_steps = 0;
    damage_steps = parseInt(fullauto_roundsfired) / 3;
    damage_steps = parseInt(damage_steps);

    damage_fullauto = damage_base;
    while(damage_steps > 0) {
      switch(damage_fullauto) {
        case 'L':
          damage_fullauto = 'M';
          break;
        case 'M':
          damage_fullauto = 'S';
          break;
        case 'S':
          damage_fullauto = 'D';
          break;
        default:
          break;
      }
      damage_steps -=1;
    }
    document.getElementsByName(`${prefix}damage_fullauto`)[body_index].value = damage_fullauto;


    targetnumber_semiauto_1 = sum;
    targetnumber_semiauto_2 = sum;
    targetnumber_burst_1 = sum;
    targetnumber_burst_2 = sum;
    targetnumber_fullauto = sum;


    document.getElementsByName('RangedWeaponsTable.targetnumber_singleshot')[body_index].value = targetnumber_singleshot;
    document.getElementsByName('RangedWeaponsTable.targetnumber_semiauto_1')[body_index].value = targetnumber_semiauto_1;
    document.getElementsByName('RangedWeaponsTable.targetnumber_semiauto_2')[body_index].value = targetnumber_semiauto_2;
    document.getElementsByName('RangedWeaponsTable.targetnumber_burst_1')[body_index].value = targetnumber_burst_1;
    document.getElementsByName('RangedWeaponsTable.targetnumber_burst_2')[body_index].value = targetnumber_burst_2;
    document.getElementsByName('RangedWeaponsTable.targetnumber_fullauto')[body_index].value = targetnumber_fullauto;

  }

};
