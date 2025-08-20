function List() {
    const  {taskArr}=props
    return (
      <div>
        <div class='List'>
          <ul>
            {taskArr.map((task)=><li>{task}</li>)}
          </ul>
        </div>
      </div>
    )
}

export default List