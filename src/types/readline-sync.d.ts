declare module 'readline-sync' {
  interface ReadLineSync {
    question(prompt?: string): string;
    questionInt(prompt?: string, options?: any): number;
    questionFloat(prompt?: string, options?: any): number;
  }

  const readlineSync: ReadLineSync;
  export default readlineSync;
}

