'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const capitalize = require('lodash.capitalize');
const { CONCERNS, CONCERN_UTILITY, pluralizeConcern } = require('../../utils/concerns');
const { generateModuleName, generatePackageName, generateGithubBaseURL, generateTextualDate } = require('../../utils/common');

module.exports = class SavvyCSSGenerator extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      `⚡️⚡️ Welcome to the ${chalk.magenta(`Savvy CSS`)} module generator ⚡️⚡️`
    ));

    const prompts = [
      {
        type: 'list',
        name: 'concernType',
        message: 'Which type of component/module are you looking to create?',
        choices: CONCERNS,
        default: CONCERN_UTILITY,
        filter: concernType => pluralizeConcern(concernType).toLowerCase()
      },
      {
        type: 'input',
        name: 'moduleSubject',
        message: 'What is the subject of this component/module? (examples: "box shadow", "display", "typography")'
      },
      {
        type: 'input',
        name: 'moduleDescription',
        message: 'Project description',
        default: ({ concernType, moduleSubject }) => `${capitalize(moduleSubject)} ${pluralizeConcern(concernType).toLowerCase()} for Savvy CSS.`
      },
      {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your GitHub username',
        store: true
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'What is your full name?',
        store: true,
        default: 'Brian Sipple'
      },
      {
        type: 'input',
        name: 'authorContact',
        message: 'What is your preferred contact name (email address, Twitter handle, etc)?',
        store: true,
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      const { concernType, moduleSubject, authorContact, githubUserName } = props;

      const moduleName = generateModuleName(moduleSubject, concernType);
      const moduleNameSpaced = moduleName.replace(/-/g, ' ');
      const moduleDisplayName = capitalize(moduleNameSpaced);
      const modulePackageName = generatePackageName(moduleName);
      const authorContactName = authorContact ? authorContact : githubUserName;
      const currentYear = new Date().getFullYear();

      // Access props later using `this.props`
      this.props = Object.assign({}, props, {
        moduleName,
        modulePackageName,
        moduleDisplayName,
        moduleNameSpaced,
        authorContactName,
        currentYear,
        moduleFileName: `${moduleName}.css`,
        licenseOwner: 'Echobind',
        repositoryBaseURL: generateGithubBaseURL(moduleName),
        textualDate: generateTextualDate()
      });
    });
  }

  /**
   * Configure custom pathing logic for the project
   */
  paths() {
    if (this.options.targetDir) {
      this.destinationRoot = () => `${this.contextRoot}/${this.options.targetDir}`;
    }
  }

  /**
   * Compile templates and write them into the generated project
   */
  writing() {
    const move = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };

    // Initiate the initial copying of templates to our destination path,
    // with any dynamic properties being resolved in the process
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      this.props
    );

    // "Move" files whose templates needed to be named differently
    // than their final file name.
    move('_package.json', 'package.json');
    move('gitignore', '.gitignore');
    move('lib/_main-file.css', `lib/${this.props.moduleName}.css`);
  }

  install() {
    this.yarnInstall();
  }
};
