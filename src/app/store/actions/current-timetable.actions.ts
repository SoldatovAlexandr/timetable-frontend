import { createAction, props } from "@ngrx/store";
import { Timetable} from "../state/current-timetable.state";


export const loadCurrentTimetableAsync = createAction("[current-timetable] loadAsync")
export const loadCurrentTimetableSuccess = createAction(
    "[current-timetable] loadSuccess",
    props<{timetable: Timetable}>()
)