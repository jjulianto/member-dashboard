import axios from 'axios'

export const fetchUsers = () => {
  return axios.get(
    'https://randomuser.me/api/?results=25&inc=name,gender,email,dob,registered,picture,location,nat'
  )
}
