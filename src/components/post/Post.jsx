import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src='https://cdn.pixabay.com/photo/2019/07/20/20/11/nature-4351455_960_720.jpg'/>
      <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>
            Lorem jkn wjhc jd jd 
        </span>
        <hr/>
        <span className='postDate'>1 Hour ago</span>
      </div>
      <p className='postDesc'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
    </div>
  )
}

export default Post
