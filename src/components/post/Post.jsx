import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src='https://media.istockphoto.com/id/1287190599/photo/amazing-click-heaven-in-uttarakhand-kedarnath-dham.jpg?b=1&s=170667a&w=0&k=20&c=DOlbmVj_xlugwYj_GMOfawKvi35yuDNwkwDb5gwtIAY='/>
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
