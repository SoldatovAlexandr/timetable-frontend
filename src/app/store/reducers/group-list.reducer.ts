import { createReducer, on } from "@ngrx/store";
import { initialSttGroupListState } from "../state/group-list.state";
import { loadGroupsSuccess } from "../actions/group-list.actions";


export const groupListReducer = createReducer(
    initialSttGroupListState,
    on(loadGroupsSuccess, (state, action) => ({
        ...state,
        groups: action.groups
    })),
);
