export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction myFunc(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\nmyFunc("Connections!");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction myFunc(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\nmyFunc({ name: "Connections!" });\n`,
  python: `\ndef myFunc(name):\n\tprint("Hello, " + name + "!")\n\nmyFunc("Connections!")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Connections!';\necho $name;\n",
};
