interface Task {
    id: string;
    text: string
}

interface List extends Task {
    tasks: Task[];
}

export interface AppState {
    lists: List[];
}