import { createReducer, on } from "@ngrx/store";
import { loadCurrentTimetableSuccess } from "../actions/current-timetable.actions";
import { initialCurrentTimetableState } from "../state/current-timetable.state";


export const currentTimetableReducer = createReducer(
    initialCurrentTimetableState,
    on(loadCurrentTimetableSuccess, (state, action) => ({
        ...state,
        timetable: action.timetable
    }))
)