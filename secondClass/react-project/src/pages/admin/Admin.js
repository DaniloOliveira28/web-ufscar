import React from  'react';
import { AdminHeader } from '../../common/components/AdminHeader';
import Property from './containerProperty';

function Admin() {
  return(
    <main className="admin-area">
      <AdminHeader />
      <Property />
    </main>
  );
}

export { Admin };