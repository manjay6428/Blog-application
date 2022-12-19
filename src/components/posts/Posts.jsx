import Post from '../post/Post'
import './posts.css'
import {Link} from "react-router-dom";
const Posts = () => {
  return (
    <div className='posts'>
    {/* Here just erase this link and only write post component */}
      <Link to="/single"><Post/></Link>
      <Link to="/single"><Post/></Link>
      <Link to="/single"><Post/></Link>
      <Link to="/single"><Post/></Link>
      <Link to="/single"><Post/></Link>
      <Link to="/single"><Post/></Link>
      
      
    </div>
  )
}

export default Posts
