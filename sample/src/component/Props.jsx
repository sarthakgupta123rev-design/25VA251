function Props(props){
    return(
        <>
            <div style={{backgroundColor:'#ccc'}}></div>
            <h1>this is props</h1>
            <h2>{props.name}</h2>
            <h2>{props.rollno}</h2>
            <h2>{props.course}</h2>
        </>
    )
}
export default Props;