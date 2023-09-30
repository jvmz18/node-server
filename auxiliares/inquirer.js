const inquirer = require ('inquirer');

const questions = [
    {
        type: 'list',
        name: 'opc',
        message: 'que quiere hacer',
        choices: ['op1','op2','op3']
    }
];

const inquirermenu = async() => {
    console.log ('==========================');
    console.log ('  selecciones una op');
    console.log ('==========================\n');

    const opt = await inquirer.createPrompt(questions);

    return opt;
}


