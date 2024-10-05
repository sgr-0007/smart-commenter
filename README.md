# Smart Commenter

![npm](https://img.shields.io/npm/v/smart-commenter)
![license](https://img.shields.io/npm/l/smart-commenter)

Smart Commenter is a CLI tool that automatically generates comments for your code files based on their language. It uses OpenAI to analyze code and produce comments, helping to explain the code, its structure, and its logic. You can then decide whether to overwrite your original file with the newly commented version.

## Features

- Supports multiple languages (JavaScript, Python, Java)
- Automatically detects the language based on file extension
- Option to control verbosity of the generated comments (low, medium, high)
- Prompts the user before overwriting the original file

## Installation

```bash
npm install smart-commenter
```
## usage

```bash
npx codecommenter-ai-cli comment ./test.js --verbosity low 
```

## Contributing

We welcome contributions! If you'd like to contribute to `smart-commenter`, follow these steps:

1. Fork the repository at [https://github.com/sgr-0007/auditsmartcontract-cli](https://github.com/sgr-0007/auditsmartcontract-cli).
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add your feature'`).
4. Push the branch to your fork (`git push origin feature/your-feature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Support

If you encounter any issues or have questions, feel free to open an issue in the GitHub repository or contact us via email.
