const Todo = require('./todo')

Todo.methods(['post', 'get', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo