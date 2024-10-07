import React from 'react'
import Lifecycle from './LifeCycle'
import Counter from './Counter'
import LifecycleDemo from './LifecycleDemo'
import InputChange from './InputChange'

function Main_Class() {
  return (
    <div>
        <Lifecycle/>
        {/*pass props  */}
        <Counter no={5}/>
        <LifecycleDemo />
        <InputChange/>
    </div>
  )
}

export default Main_Class
