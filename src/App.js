import { isDisabled } from '@testing-library/user-event/dist/utils'
import './App.css'
import { useState } from 'react'

function App() {
    const [title, setValue] = useState('')
    // const inputHandler = (event) => {
    //     setInput(event.target.value)

    // }
    const valueHandler = (e) =>{
        let value = e.target.value
        if(value <101){
            setValue(value)
        }
    }

    return (
        <div className="App">
            <input max={100} onChange={valueHandler} className='input' type='number'></input>
            <div className='div'>
                <div className='div2'
                    style={{height: `${title}%`,
                    }}></div>
            </div>
        </div>
    )
}
export default App;