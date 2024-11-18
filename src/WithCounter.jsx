import React from 'react'

const UpdatedComponent = OriginalComponent => {
    class newComponent extends React.Component {
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
    
        increement=()=>{
            this.setState(prev=>{
                return {
                    count:prev.count+1
                }
            })
        }
        render() {
            return <OriginalComponent count={this.state.count}  inc={this.increement}/>
        }
    }

    return newComponent
}
export default UpdatedComponent