import React, { Fragment, useState } from 'react';

const InputDepartment = ({ baseURL }) => {
    const [description, setDescription] =
        useState('');

    const onSubmitForm = async (event) => {
        event.preventDefault();

        try {
            const body = { description };
            const response = await fetch(
                `${baseURL}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                }
            );

            window.location = '/';
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Input Department
            </h1>
            <form
                className="d-flex mt-5"
                onSubmit={onSubmitForm}
            >
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                />

                <button className="btn btn-success">
                    Add
                </button>
            </form>
        </Fragment>
    );
};

export default InputDepartment;
