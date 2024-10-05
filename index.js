#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer'); // To prompt the user for confirmation
const { generateComment } = require('./openai');

// Detect the language based on the file extension
const detectLanguage = (filePath) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case '.js': return 'JavaScript';
    case '.py': return 'Python';
    case '.java': return 'Java';
    default: throw new Error('Unsupported language');
  }
};

// Function to prompt user for confirmation before modifying the file
const confirmOverwrite = async () => {
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do you want to overwrite the original file with the generated comments?',
      default: false,
    },
  ]);
  return confirm;
};

// Define CLI commands and options
program
  .command('comment <file>')
  .description('Generate comments for the given code file')
  .option('-v, --verbosity <level>', 'Set verbosity level (low, medium, high)', 'medium')
  .action(async (file, options) => {
    try {
      // Read the code from the file
      const code = fs.readFileSync(file, 'utf8');
      const language = detectLanguage(file);
      console.log(chalk.green(`Detected language: ${language}`));

      // Generate comments using OpenAI
      const comments = await generateComment(code, language, options.verbosity);
      if (comments) {
        console.log(chalk.blue("\nGenerated Comments:"));
        console.log(comments);

        // Combine the original code with the generated comments
        const modifiedCode = `// Generated Comments:\n${comments}\n\n${code}`;

        // Ask user whether they want to overwrite the original file
        const confirm = await confirmOverwrite();
        if (confirm) {
          // Write the modified code back to the file (overwrite)
          fs.writeFileSync(file, modifiedCode, 'utf8');
          console.log(chalk.green(`File ${file} updated successfully with generated comments.`));
        } else {
          console.log(chalk.yellow('File update canceled.'));
        }
      } else {
        console.log(chalk.red("Failed to generate comments."));
      }
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
    }
  });

program.parse(process.argv);
