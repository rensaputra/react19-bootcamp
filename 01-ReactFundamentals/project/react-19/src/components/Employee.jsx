const Employee = ({ employee }) => {
  return (
    employee.isActive && (
      <div className="employee-card">
        <span className="title-card">{employee.name}</span>
        <span>{employee.id}</span>
        <span>${employee.salary}</span>
        <span>{employee.isActive.toString()}</span>
      </div>
    )
  );
};

export default Employee;
