export const TitleOnly =(props)=>{
    return(
        <div className="titleOnly">
        <h1 >{props.title}</h1>
        </div>
    )
}
export const TextsOnly =(props)=>{
    return(
       <div className="textsOnly">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.annotation}</p>
       </div>
    )
}
export const Images =(props)=>{
    return (
        <div className="images">
            <img src={props.link} alt="" width={props.width} height={props.height}/>
            <img src={props.link} alt="" width={props.width} height={props.height}/>
        </div>
    )
}