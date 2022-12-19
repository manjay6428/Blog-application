import './write.css'

const Write = () => {
  return (
    <div className='write'>
      <img className='writeImg' src='https://wallpaperaccess.com/full/1728937.jpg' alt=''></img>
      <form className='writeForm'>
        <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
            <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}></input>
            <input type="text" placeholder="Title" className='writeInput' autoFocus={true}></input>
        </div>
        <div className='writeFormGroup'>
            <textarea placeholder='Tell Your Story...' type="text" className='writeInput writeText '></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
