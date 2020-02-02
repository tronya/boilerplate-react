import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjectData } from '../../redux/actions/projectsActions';
import Table from '../../components/atoms/table';
import { getUserInfo } from '../../redux/actions/userActions';

const Projects = ({ fetchData, projects, getUserInfo }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'Project Name',
        accessor: 'name',
        boldText: true,
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Tasks',
        accessor: 'number',
      },
      {
        Header: 'Type',
        accessor: 'type_pt',
      },
      {
        Header: 'Status',
        accessor: 'active',
      },
      {
        Header: 'Actions',
      },
    ],
    [],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const data = React.useMemo(() => projects, [projects]);

  return (
    <div className="page__container">
      <h1>This is Projects page</h1>

      <br />
      <button onClick={() => getUserInfo()}>Test if user credentials works</button>
      <br />

      <Table columns={columns} data={data} />
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projects.data,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchProjectData()),
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
