import ButtonComponent from "./ButtonComponent";
const ButtonContainer = ()=>{
     const button = [
        { name: "ALL", url: "latest" },
        { name: "Music", url: "music" },
        { name: "Weather", url: "weather" },
        { name: "WC2023", url: "WC2023" },
        { name: "Raina", url: "Suresh Raina" },
        { name: "Comedy Clubs", url: "comedyclubs" },
        { name: "Akshay Saini", url: "akshaysaini" },
        { name: "React", url: "reactjs" },
        { name: "IPL", url: "IPL" },
    ];
    return(
     button.map((data,index)=>{
            return <ButtonComponent key={index} data={data}/>
        })
    )
    }
export default ButtonContainer;