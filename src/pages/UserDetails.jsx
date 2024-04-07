import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsPersonHearts, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Title from '../components/Title';
import UserService from '../services/UserService';

const UserDetails = () => {
  const params = useParams();

  const [user, setUser] = useState(undefined);
  const [showSalary, setShowSalary] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserService.get(params.id);
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchData();
  }, [params.id]);

  const toggleSalary = () => {
    setShowSalary(!showSalary);
  };

  return (
    <>
      <Title title="User Details" icon={<BsPersonHearts />} />

      {user && (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{user.name}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <strong>Job</strong>
              <span>{user.job}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Department</strong>
              <span>{user.department}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>
                Salary
                <span className="ms-1" onClick={toggleSalary}>
                  {showSalary ? <BsEyeSlashFill /> : <BsEyeFill />}
                </span>
              </strong>
              <span>{showSalary ? `$${user.salary}` : '*****'}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Hobbies</strong>
              <span>{user.hobbies?.join(', ')}</span>
            </li>
          </ul>
        </div>
      )}

      {user === null && <div>Something went wrong</div>}
      {user === undefined && <div>Loading please wait...</div>}
    </>
  );
};

export default UserDetails;
