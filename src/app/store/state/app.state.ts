import { GroupListState } from "./group-list.state";
import { ActionReducerMap } from "@ngrx/store";
import { groupListReducer } from "../reducers/group-list.reducer";
import { CurrentTimetableState } from "./current-timetable.state";
import { currentTimetableReducer } from "../reducers/current-timetable.reducer";

export interface SttAppState {
    groupList: GroupListState;
    currentTimetable: CurrentTimetableState
}

export const reducers: ActionReducerMap<SttAppState> = {
    groupList: groupListReducer,
    currentTimetable: currentTimetableReducer
};
