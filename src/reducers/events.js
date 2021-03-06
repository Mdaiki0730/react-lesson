import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  UPDATE_EVENTS,
  DELETE_EVENTS,
} from '../actions'

const events = (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENTS:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}

export default events
