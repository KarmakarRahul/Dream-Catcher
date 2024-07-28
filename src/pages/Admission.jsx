import React from 'react';
import AdmissionForm from '../components/AdmissionForm';
import FeesTable from '../components/feesTable';
import Navbar from '../components/navbar';
import FooterComponent from '../components/footer';

const Admission = () => {
  return (
    <div>
      <Navbar />
      <AdmissionForm />
      <FeesTable />
      <FooterComponent />

    </div>
  );
}

export default Admission;
