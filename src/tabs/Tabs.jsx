
import { Component } from "react";
import {tabs} from "./data"
import {styles} from "./styles"

class Tabs extends Component{
    constructor(){
        super()
        this.state = {
            tabs:tabs,
            selected: 0,
        }
    }
    changeTab = (index) => {
    //   const copyState = {...this.state}
    //   copyState.selected = index
        this.setState({...this.state, selected:index})
        index.target.style.background = "white"
        index.target.style.color = "teal"
    }   
render(){
    const {tabs,selected} = this.state
    const hoverHandler = (e) => {
        e.target.style.background = "white"
       
        
      }
      const outHandler = (e) => {
        e.target.style.background = "lightblue"
      
      }
return(
    <>
    <h1 style = {styles}>Tabs</h1>
    <div style = {styles.btn}>
    {
        tabs.map((tab,index) =>{
            return(
                <button onMouseOver = {hoverHandler} onMouseOut = {outHandler} style = {styles.button} key = {tab.id} onClick ={()=> this.changeTab(index) }>{tab.title}</button>
            )
        })
    }
    </div>
    <div style = {styles.container}>
       
 <h3> {this.state.tabs[selected].title} </h3>
        {this.state.tabs[selected].description}
        {this.state.tabs[selected]?.options && (
            <ul>
                {this.state.tabs[selected].options.map(option=>{
                    return (
                        <li>{option}</li>
                    )
                })}
            </ul>
        )} 

    </div>
    </>
)

}
}

export default Tabs


