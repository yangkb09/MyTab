import axios from 'axios'

export const SET_GROUPS = 'SET_GROUPS'
// export const SUBMIT_ROBOT = 'SUBMIT_ROBOT';
// export const DELETE_ROBOT = 'DELETE_ROBOT';

export const setGroups = (robots) => ({
  type: SET_GROUPS,
  robots,
})
// export const submitRobot = (robot) => ({
//   type: SUBMIT_ROBOT,
//   robot
// });
// export const deleteRobot = (robot) => ({
//   type: DELETE_ROBOT,
//   robot
// });

export const _getGroups = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/groups')
    dispatch(setGroups(data))
  } catch (err) {
    console.log(err)
  }
}

// export const addRobot = (newRobot) => async (dispatch) => {
//   try {
//     const {data} = await axios.post('/api/robots', newRobot);
//     dispatch(submitRobot(data))
//   } catch (err) {
//     console.log(err)
//   }
// };

// export const removeRobot = (robot) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/robots/${robot.id}`)
//     dispatch(deleteRobot(robot))
//   } catch (err) {
//     console.log(err)
//   }
// };

const initialState = []

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS:
      return action.groups
    // case SUBMIT_ROBOT:
    //   return [...state, action.robot]
    // case DELETE_ROBOT:
    //   return state.filter((robot) => robot.id !== action.robot.id);
    default:
      return state
  }
}

export default groupsReducer
