import React, { useState } from 'react';
  // import { CKEditor } from '@ckeditor/ckeditor5-react';
  // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CKEditorComponent() {
  const [data, setData] = useState('');

  // const handleChange = (event, editor) => {
  //   const data = editor.getData();
  //   setData(data);
  // };
 
  return (
    <div>
      {/* <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={handleChange}
      /> */}
      <div>{data}</div>
    </div>
  );
}

export default CKEditorComponent;
