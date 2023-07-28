import React, { Fragment, useState } from 'react';

const EditDepartment = ({ baseURL, department }) => {
    const [description, setDescription] = useState(department.description);

    // edit description function
    const updateDescription = async (event) => {
        event.preventDefault();
        try {
            const body = { description };
            const response = await fetch(
                `${baseURL}/${department.department_id}`,
                {
                    method: 'PUT',
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
            <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${department.department_id}`}>
                Edit
            </button>
            <div
                className="modal fade"
                id={`id${department.department_id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                onClick={() =>
                    setDescription(department.description)
                }
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabel"
                            >
                                Edit Department
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() =>
                                    setDescription(
                                        department.description
                                    )
                                }
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(event) =>
                                    setDescription(
                                        event.target.value
                                    )
                                }
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-bs-dismiss="modal"
                                onClick={(event) =>
                                    updateDescription(event)
                                }
                            >
                                Save changes
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() =>
                                    setDescription(
                                        department.description
                                    )
                                }
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditDepartment;
