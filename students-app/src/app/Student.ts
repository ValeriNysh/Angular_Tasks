export interface Student {
    lastName: string;
    firstName: string;
    marks: {
        Math : number,
        Physics: number,
        Chemistry: number,
        Biology: number,
        History: number
    };
}