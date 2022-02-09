import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './Column';

const App : React.FC = () => {
    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result;
        console.log(`Source: ${source}`);
        console.log(`Destination: ${destination}`);
    }
   return (
        <div className={'flex'}>
            <DragDropContext onDragEnd={onDragEnd}>
                {initialData.columns.map((column: any, index: number) => {
                    return <Column key={column.id} id={column.id} title={column.title} tasks={column.taskIds} ></Column>
                })}
            </DragDropContext>
        </div>
    )
}

export default App;
