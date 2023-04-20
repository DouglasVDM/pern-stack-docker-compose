import React, { Fragment } from 'react';

// components
import EditDepartment from './EditDepartment';

const ListDepartments = ({ baseURL, departments, setDepartments, }) => {
    // console.log('listDept departments', departments)

    const deleteDepartment = async (id) => {
        try {
            const deleteDepartment = await fetch(
                `${baseURL}/${id}`,
                {
                    method: 'DELETE',
                }
            );

            setDepartments(
                departments.filter(
                    (department) =>
                        department.department_id !== id
                )
            );

            console.log(`Deleted department: ${id}`);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                List Department
            </h1>
            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.department_id}>
                            <td>{department.description}</td>
                            <td>
                                <EditDepartment
                                    department={department} baseURL={baseURL}
                                />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        deleteDepartment(
                                            department.department_id
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListDepartments;
