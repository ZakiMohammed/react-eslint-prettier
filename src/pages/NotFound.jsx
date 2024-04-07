const NotFound = () => {
  return (
    <>
      <div className="bg-dark-subtle p-5 rounded-3 text-center">
        <div className="mb-4">
          <h1 className="display-1 text-primary fw-bolder mb-1">404</h1>
          <p className="text-primary fw-bolder">Page Not Found</p>
        </div>
        <div className="text-secondary">
          <p>The page you are looking is no where to be found.</p>
          <p>
            Please contact admin or redirect to <a href="/">Home</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
