function List(props){
    const {taskArr,handleDelete}=props
  return(
    <div>
          <ul>
            {taskArr.map((each,idx)=><li onClick={()=>{
              handleDelete(idx)
            }}>{each}</li>)}
          </ul>
        </div>
  )
}

export default List