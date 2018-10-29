import React from 'react';

const AddItem = (props) => {
    return (
        <div class="inputs">
        <p>💵Total Price: ${props.total.toFixed(2)}</p>
        <form action="Quantity">
        <div class="input-group mb-3">
            <input type="Number" min='1' onChange={props.handleChangeQuantity} class="form-control col-sm-6" placeholder="Quantity" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
            {/* <input type="number" onChange={props.handleChangeQuantity}/> */}
            <p>Product</p>
            <div class="input-group mb-3">
                <select class="custom-select col-sm-6" id="inputGroupSelect01" onChange={props.handleChange}>
                    <option selected>Choose...</option>
                    {props.products.map(item => <option>{item.name}</option>)}
                </select>
            </div>
            <button type="submit" class="mb-3 btn btn-primary" onClick={props.handleClick}>Submit</button>
        </form>
        </div>
    )
}

export default AddItem