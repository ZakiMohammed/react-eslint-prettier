import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonHearts, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Title from '../components/Title';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState(undefined);
  const [showSalary, setShowSalary] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getAll();
        setUsers(response);
      } catch (error) {
        setUsers([]);
      }
    };

    fetchData();
  }, []);

  const toggleSalary = () => {
    setShowSalary(!showSalary);
  };

  return (
    <>
      <Title title="Users" icon={<BsPersonHearts />} />

      <div className="table-responsive">
        <table
          className="table table-hover table-striped table-bordered"
          aria-describedby="">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Job</th>
              <th>
                Salary
                <span className="ms-1" onClick={toggleSalary}>
                  {showSalary ? <BsEyeSlashFill /> : <BsEyeFill />}
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.code}</td>
                  <td>{user.name}</td>
                  <td>{user.job}</td>
                  <td>{showSalary ? `$${user.salary}` : '*****'}</td>
                  <td>
                    <NavLink
                      to={`/users/${user.id}`}
                      className="btn btn-sm btn-outline-primary">
                      View
                    </NavLink>
                  </td>
                </tr>
              ))}
            {users && users.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center">
                  No Records
                </td>
              </tr>
            )}
            {users === undefined && (
              <tr>
                <td colSpan={5} className="text-center">
                  Loading please wait...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
