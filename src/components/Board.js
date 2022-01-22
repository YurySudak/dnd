import React, {useState} from "react";

export default function Board({data}) {

    const [list, setList] = useState(data)

    const handleDragStart = (e, params) => {
        console.log('dragging...', params)
    }

    return (
        <div className="board">
            {list.map((grp, grpI) => (
                <div key={grp.title} className="group">
                    <div className="title">{grp.title}</div>
                    {grp.items.map((item, itemI) => (
                        <div draggable onDragStart={(e) => {handleDragStart(e, {grpI, itemI})}} key={item.id} className="item">
                            <div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
