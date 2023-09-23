import ButtonComponent from "./ButtonComponent";
const ButtonContainer = ()=>{
    const button = ['ALL','Cricket','Music','Sports','NASA','Raina','Football','Movies','Songs','Dance']
    return(
     button.map((data,index)=>{
            return <ButtonComponent key={index} data={data}/>
        })
    )
    }
export default ButtonContainer;