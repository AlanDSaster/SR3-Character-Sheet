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
      element.setAttribute('name', 'WeaponsTable_weaponname');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_weapontype');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('onclick', 'RANGEDWEAPONSTABLE.Attack_SingleShot();');
      tr.appendChild(td);
      td.appendChild(element);

      //first shot TN
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_SingleShot_TN');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_SingleShot_Power');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      tr.appendChild(td);
      td.appendChild(element);

      //single shot damage
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_SingleShot_Damage');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      options_data = [];
      options_data.push('Default to Body');
      options_data.push('Default to Quickness');
      options_data.push('Default to Strength');
      options_data.push('Default to Intelligence');
      options_data.push('Default to Charisma');
      options_data.push('Default to Willpower');
      for(let i=0; i<CHARACTER.Skills.length; i++) {
        let skill = CHARACTER.Skills[i].name;
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
      element.setAttribute('name', 'WeaponsTable_WeaponSkill');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_MinimumRange');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      tr.appendChild(td);
      td.appendChild(element);

      //label for accessory, internal
      td = document.createElement('td');
      td.innerText = 'Internal';
      tr.appendChild(td);

      //internal accessory select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_InternalAccessory');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_Reload');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_SemiAuto1st_TN');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_SemiAuto2nd_TN');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //semi-auto power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_SemiAuto_Power');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //semi-auto damage
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_SemiAuto_Damage');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //defaulting select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_Defaulting');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      option_data = [
        'Not Defaulting',
        'Defaulting to Skill (TN +2)',
        'Defaulting to Specialization (TN +3)',
        'Defaulting to Attribute (TN +4)'
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
      element.setAttribute('name', 'WeaponsTable_ShortRange');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      tr.appendChild(td);
      td.appendChild(element);

      //label for accessory, stock
      td = document.createElement('td');
      td.innerText = 'Stock';
      tr.appendChild(td);

      //stock accessory select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_StockAccessory');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_AmmunitionType');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_Burst1_TN');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_Burst2_TN');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //burst power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_Burst_Power');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //burst damage
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_Burst_Damage');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_DicePool');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_MediumRange');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      tr.appendChild(td);
      td.appendChild(element);

      //label for accessory, top
      td = document.createElement('td');
      td.innerText = 'Top';
      tr.appendChild(td);

      //top accessory select
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_TopAccessory');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_TN_modifier');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_FullAuto_TN');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_FullAutoShotsFired');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.setAttribute('min', 3);
      element.setAttribute('value', 0);
      td.appendChild(element);
      tr.appendChild(td);

      //burst power
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_FullAuto_Power');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'text');
      element.classList.add('short');
      element.readOnly=true;
      tr.appendChild(td);
      td.appendChild(element);

      //burst damage
      td = document.createElement('td');
      element = document.createElement('input');
      element.setAttribute('name', 'WeaponsTable_FullAuto_Damage');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_BonusDice');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_LongRange');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      tr.appendChild(td);
      td.appendChild(element);

      //accessory, underbarrel label
      td = document.createElement('td');
      td.innerText = 'Underbarrel';
      tr.appendChild(td);

      //accessory, underbarrel
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_UnderbarrelAccessory');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_CurrentAmmo');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_Choke');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_ExtremeRange');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'number');
      element.classList.add('mediumlength');
      tr.appendChild(td);
      td.appendChild(element);

      //accessory, underbarrel label
      td = document.createElement('td');
      td.innerText = 'Barrel';
      tr.appendChild(td);

      //accessory, underbarrel
      td = document.createElement('td');
      element = document.createElement('select');
      element.setAttribute('name', 'WeaponsTable_BarrelAccessory');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_MaxAmmo');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
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
      element.setAttribute('name', 'WeaponsTable_Tracers');
      element.setAttribute('onchange', 'RANGEDWEAPONSTABLE.Update();');
      element.setAttribute('type', 'checkbox');
      td.appendChild(element);
      tr.appendChild(td);

  },

  DeleteEntry(element) {
    element.parentNode.parentNode.parentNode.remove();
  }



};
