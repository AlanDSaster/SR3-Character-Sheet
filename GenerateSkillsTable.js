var SKILL_TABLE_DATA = [];

var SKILL_TABLE_HANDLER = {




  CreateButton_DeleteEntry() {
    button = document.createElement('button');
    button.text = 'X';
    button.classList.add('hidden');
    button.classList.add('deletebutton');
    button.classList.add('')
    button.addEventListener('click', DeleteSkillTableEntry(row_index));
    return button;
  }

}
