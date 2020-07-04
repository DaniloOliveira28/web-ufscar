import React from  'react';
import AdminHeader from '../../components/admin/Header';
import Property from '../../components/admin/Property';

function Admin() {
  return(
    <main className="admin-area">
      <AdminHeader />
      <Property />
    </main>
  );
}

export { Admin };