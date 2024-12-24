import { Injectable } from "@angular/core";
import { newItemData } from "../Body/task/item/Item.Model";
@Injectable({providedIn:'any'})
export class TaskService {
    dummyTasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
        {
            id: 't4',
            userId: 'u4',
            title: 'Prepare for certficat',
            summary:
                'Prepare for project management certficat',
            dueDate: '2025-07-15',
        },
    ]

    getUserTasks(UserId: string) {
        return this.dummyTasks.filter((tasks) => tasks.userId === UserId);
    }
    addTasks(data: newItemData, UserId: string) {
        this.dummyTasks.unshift({
            id: new Date().getTime.toString(),
            dueDate: data.dueDate,
            summary: data.summary,
            title: data.summary,
            userId: UserId
        })
    }
    deleteUserTask(UserId: string) {
        this.dummyTasks = this.dummyTasks.filter((tasks) => tasks.id !== UserId);
    }

}
