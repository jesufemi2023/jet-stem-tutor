
export enum Subject {
  MATHS = 'Mathematics',
  PHYSICS = 'Physics',
  CHEMISTRY = 'Chemistry',
  CODING = 'Coding/Computer Science',
  BIOLOGY = 'Biology'
}

export enum GradeLevel {
  GRADE_7 = 'Grade 7',
  GRADE_8 = 'Grade 8',
  GRADE_9 = 'Grade 9',
  GRADE_10 = 'Grade 10',
  GRADE_11 = 'Grade 11',
  GRADE_12 = 'Grade 12'
}

export interface Student {
  id: string;
  name: string;
  grade: GradeLevel;
  strugglingSubjects: Subject[];
}

export interface ConsultationRequest {
  parentName: string;
  email: string;
  studentName: string;
  subject: Subject;
  description: string;
}

export interface TutoringPlan {
  summary: string;
  recommendations: string[];
  estimatedDuration: string;
}
