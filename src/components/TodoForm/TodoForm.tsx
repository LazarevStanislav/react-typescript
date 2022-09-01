import React, { useRef, useState } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>( '' )
  const ref = useRef<HTMLInputElement>(null)
  
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if ( event.key === 'Enter' ) {
      // console.log(title);
      // setTitle('')
      props.onAdd(ref.current!.value);
      ref.current!.value = ''
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title} type="text"
        ref={ref}
        id="title"
        placeholder="введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter case name
      </label>
    </div>
  )
}

