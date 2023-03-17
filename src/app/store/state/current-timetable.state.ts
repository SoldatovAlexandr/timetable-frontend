
export interface Lesson{
    id: number,
    subject: string,
    day: string,
    time: string,
    lectureHall: string,
    teacher: string,
    type: string 
}

export interface Timetable{
    id: number,
    monday: Lesson[],
    tuesday: Lesson[],
    wednesday: Lesson[],
    thursday: Lesson[],
    friday: Lesson[], 
    saturday: Lesson[],
    sunday: Lesson[],
}

export interface CurrentTimetableState{
    timetable: Timetable | null
}

export const initialCurrentTimetableState: CurrentTimetableState = {
   timetable: null
} 