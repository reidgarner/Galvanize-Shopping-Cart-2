import React from 'react';

const AddItem = (props) => {
    return (
        <div>
        <p>Quantity</p>
        <form action="Quantity">

            <input type="number" onChange={props.handleChangeQuantity}/>
            <p>Product</p>
            <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01" onChange={props.handleChange}>
                    <option selected>Choose...</option>
                    {props.products.map(item => <option>{item.name}</option>)}
                </select>
            </div>
            <button type="submit" class="btn btn-primary" onClick={props.handleClick}>Submit</button>
        </form>
        </div>
    )
}

export default AddItem