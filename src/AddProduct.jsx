import React, {useState} from 'react';

const AddProduct = ({onAdd}) => {
    const [title, setTitle] = useState('')

    const sumbitForm = (e) => {
        e.preventDefault()

        onAdd({title})
        setTitle('')
    }

    return (
        <form onSubmit={sumbitForm}>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder={'add product'}/>
                <button type={'submit'}>Add </button>
            </div>
        </form>
    );
};

export default AddProduct;