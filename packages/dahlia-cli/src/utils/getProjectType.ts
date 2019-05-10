import inquirer from 'inquirer'

enum projectType {
  BASIC = 'basic',
  ADMIN = 'dahlia-admin',
}

export async function getProjectType() {
  const answer: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '选择项目模板？',
      choices: [projectType.BASIC, projectType.ADMIN],
    },
  ])
  return answer.projectType
}
