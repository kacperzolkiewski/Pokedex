import React, { useContext, useState } from 'react'
import { PokemonContext } from '../../context/PokemonContext/PokemonContext'
import { ActionType } from '../../context/PokemonContext/PokemonReducer';
import './filterForm.css'

export const FilterForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const { dispatch } = useContext(PokemonContext);

    const filterByName = () => {
        if (name !== '')
            dispatch({ type: ActionType.FilterName, payload: name })
    }

    const filterByType = () => {
        if (type !== '')
            dispatch({ type: ActionType.FilterType, payload: type })
    }

    return (
        <div className='filter'>
            <label className="filterLabel">
                <input type="text" placeholder='Name...' onChange={(e) => { setName(e.target.value) }} className="filterInput" />
                <button className="filterBtn" onClick={filterByName}>
                    Filter
                </button>
            </label>
            <label className="filterLabel">
                <input type="text" placeholder='Type...' onChange={(e) => { setType(e.target.value) }} className="filterInput" />
                <button className="filterBtn" onClick={filterByType}>
                    Filter
                </button>
            </label>
        </div>
    )
}
