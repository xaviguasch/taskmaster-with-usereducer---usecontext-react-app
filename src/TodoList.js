import React, { Fragment } from 'react'
import Todo from './Todo'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />

              {i < todos.length - 1 ? <Divider /> : null}
            </Fragment>
          ))}
        </List>
      </Paper>
    )

  return null
}

export default TodoList
