import React, {useState} from 'react';

const AddProduct = ({onAdd}) => {

    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        onAdd({title})
        setTitle('')
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"/>
                <button type={'submit'}>Add</button>
            </form>
        </div>
    );
};

export default AddProduct;