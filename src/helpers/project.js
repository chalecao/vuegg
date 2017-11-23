import shortid from 'shortid'
import newPage from './page'

function newProject (title) {
  return {
    id: shortid.generate(),
    title: title,
    componeggs: [],
    pages: [newPage('Home', '/')]
  }
}

export default newProject