const { DB } = require("../../common/inMemoryDb");
const Board = require("./board.model");



module.exports = { 
  getMany: async () => DB.Boards,

  create: async (title, columns) => {
    const board = new Board(title, columns)
    try{
      await DB.Boards.push(board)
    } catch(error){
      console.log(error)
      throw new Error
    }
    return {
    id: board.id,
    title: board.title,
    columns: board.columns
    }
  },

  getOne: async (boardId) => {
    const result = await DB.Boards.filter((board) => board.id === boardId)[0]
    return result
  },

  updateOne: async (boardId, title, columns) => {
    
    for(let i = 0; i < DB.Boards.length; i +=1) {
      if (DB.Boards[i].id === boardId){
        DB.Boards[i].title = title || DB.Boards[i].title
        DB.Boards[i].columns = columns || DB.Boards[i].columns
        return DB.Boards[i]
        }
        
    }
    return null
  },

  deleteOne: async (boardId) => {
    const newboards = await DB.Boards.filter(board => board.id !== boardId)
    if(newboards.length === DB.Boards){
      return null
    } 
      DB.Boards = newboards
      return 'deleted'
    
    
    
  }
    
}
