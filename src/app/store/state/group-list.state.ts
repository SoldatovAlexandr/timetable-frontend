
export interface SttGroup{
    id: number;
    group: string;
}

export interface GroupListState {
    groups: SttGroup[];
}

export const initialSttGroupListState: GroupListState = {
    groups: []
};

