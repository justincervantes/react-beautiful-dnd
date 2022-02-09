import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Card from './Card'
import initialData from './initial-data';
import ITask from './types/Task'

interface IColumnProps {
    id: string;
    title: string;
    tasks: ITask[];
}

const Column : React.FC<IColumnProps> = ({id, title, tasks}) => {
    return (   
        <Droppable droppableId={`${title}-${id}`}>
            {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps} className={'border-2 w-1/3'}>
                    
                    <div>{`${id} - ${title}`}</div>
                    { 
                        tasks.map((taskId: any, index: number) => {
                            const taskData = initialData.tasks.find((task) => task.id === taskId);
                            if (taskData) {
                                return <Card key={taskId} id={taskId} content={taskData.content} index={index} />
                            }
                        })
                    }
                    { provided.placeholder }
                </div>

            )}
        </Droppable>
    )
}

export default Column;