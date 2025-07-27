

export interface Deadline {
    id: number;
    deadlineDate: Date;
    description: string;
  }
  
  export interface User {
    username: string;
    email: string;
    password: string;
    deadlines: Deadline[]; 
  }