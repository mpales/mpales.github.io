import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './css/create.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imgThumb, setThumb] = useState('');
  const history = useHistory();

  // const handleChange = (e, editor) => {
  //   const data = editor.getData();
  //     console.log({ e, editor, data });
  //     setBody(data);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, imgThumb };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Thumbnail Image:</label>
        <input 
          type="text" 
          required 
          value={imgThumb}
          onChange={(e) => setThumb(e.target.value)}
        />
        <label>Blog Content:</label>
        {/* <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea> */}
        <CKEditor
          editor={ ClassicEditor }
          required
          // onChange={handleChange}
          onChange={ ( e, editor ) => {
            const data = editor.getData();
            setBody(data);
        } }
        />
        <div>{body}</div>
        <div className="button">
          <button>Post Blog</button>
        </div>
      </form>
    </div>
  );
}
 
export default CreateBlog;