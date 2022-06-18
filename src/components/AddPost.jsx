import React from 'react';


function AddPost(props) {
    return (
        <div className={'addpost-form-con'} enctype={'multipart/form-data'}>
            <form>
                <input type={'text'} name={'heading'}/>
                <div style={{height:'25rem', width:'calc(100% - 4rem)',fontSize:'2rem', margin:'1rem auto', backgroundColor:"seagreen"}} contentEditable={true}/>
                <input type={'file'} accept={'image/*'} name={'cover_image'}/>
                <input type={"submit"}/>
            </form>
        </div>
    );
}

export default AddPost;
