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
        {/* style={{textDecoration:"none",color:"inherit"}} */}
        <span className='postTitle' >
            Kedarnath-Heaven on Earth 
        </span>
        <hr/>
        <span className='postDate'>1 Hour ago</span>
      </div>
      <p className='postDesc'>
      Kedarnath temple is one of the four pillars of famed char dham yatra. It is believed that if you visit kedarnath temple all your sins will be washed and you will be granted a position in heaven.
      </p>
    </div>
  )
}

export default Post
