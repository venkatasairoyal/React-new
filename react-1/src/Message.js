function Message(){

    let hero = "Balayya"
    let actress="Sruthi Hassan"
    let image = "https://static.toiimg.com/thumb/msid-95717816,width-400,resizemode-4/95717816.jpg"
    return <div>
        <h2>Hero:{hero}</h2>
        <h3>Actress:{actress}</h3>
        <img src={image} alt="" />
    </div>
    
}
export default Message


