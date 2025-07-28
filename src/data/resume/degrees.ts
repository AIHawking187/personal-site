export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Witwatersrand',
    degree: 'M.S.C. Mathematical Statistics and Artificial Intelligence',
    link: 'https://wits.ac.za',
    year: 2024,
  },
  {
    school: 'University of Witwatersrand',
    degree: 'B.S.C Honours Actuarial Science, Computer Engineering',
    link: 'https://wits.ac.za',
    year: 2021,
  },
  {
    school: 'University of Witwatersrand',
    degree: 'B.S.C Actuarial Science, Computer Engineering',
    link: 'https://wits.ac.za',
    year: 2020,
  },
];

export default degrees;
