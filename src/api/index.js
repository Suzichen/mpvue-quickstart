import fly from '../utils/fly'
import qs from 'qs'

fly.get_user_experience = (req) => {
  const url = '/Admin/get_user_list'
  const data = qs.stringify(req)
  return fly.post(url, data)
}

export default fly
