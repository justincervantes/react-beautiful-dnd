import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

interface ICardProps {
    index: number; 
    id: string;
    content: string;
}

const Card : React.FC<ICardProps> = ({id, content, index}) => {
    return (
        <Draggable draggableId={id} index={index}>
            {provided => {
                return (
                    <div 
                        className={'border-2 ml-3'}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {`${id} - ${content}`}
                    </div>
                )
            }}
        </Draggable>
    )
}

export default Card;