export default [
  {
    name: 'Projects',
    icon: 'project',
    childrenItems: [
      {
        name: 'Projects',
        link: '/admin/project_tasks',
      },
      {
        name: 'Invoices',
        link: '/admin/tasks/invoices',
      },
    ],
  },
  {
    name: 'Quotes',
    icon: 'quotes',
    childrenItems: [
      {
        name: 'Pending',
        link: '/admin/estimators',
      },
      {
        name: 'Approved',
        link: '/admin/estimators_approved',
      },
      {
        name: 'Finished',
        link: '/admin/estimators_finished',
      },
      {
        name: 'Archive',
        link: '/admin/estimators_archive',
      },
    ],
  },
  {
    name: 'Tracker',
    icon: 'tracker',
    link: '/admin/tracker',
  },
  {
    name: 'Contractors',
    icon: 'contractors',
    badge: 35,
    childrenItems: [
      {
        name: 'Contractors',
        link: '/admin/contracts',
      },
      {
        name: 'Astra Team',
        link: '/admin/approved_team',
      },
      {
        name: 'Fleet',
        link: '/admin/vehicle',
      },
      {
        name: 'Equipment',
        link: '/admin/equipment',
      },
    ],
  },
  {
    name: 'Properties',
    icon: 'properties',
    link: 'https://properties.astra-management.ca/',
  },
  {
    name: 'Settings',
    icon: 'project',
    childrenItems: [
      {
        name: 'Permissions',
        link: '/admin/permissions',
      },
      {
        name: 'Emails',
        link: '/admin/settings',
      },
      {
        name: 'Categories',
        link: '/admin/estimator_types',
      },
      {
        name: 'Estimators',
        link: '/admin/estimator_types',
      },
    ],
  },
];
