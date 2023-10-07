import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ManagersList from './ManagerList';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddManagerForm from './AddManagerForm';
import { useSelector, useDispatch } from 'react-redux';
import { getManagers } from '../../store/managersSlice';

const Managers: React.FC = () => {
  const dispatch = useDispatch();
  const managers = useSelector((state: any) => state.manager.managers);
  const [isAddManagerModalOpen, setAddManagerModalOpen] = useState(false);
  const token = useSelector((state: any) => state.auth.token);



  const fetchManagers = async () => {
    const apiUrl = 'http://localhost:4000/api/v1/managers'; // Replace with your actual API endpoint

    try {
      const config = {
        headers: {
          auth: token,
        },
      };

      const response = await axios.get(apiUrl, config);
      dispatch(getManagers(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  const openAddManagerForm = () => {
    setAddManagerModalOpen(true);
  };

  const closeAddManagerForm = () => {
    setAddManagerModalOpen(false);
  };

 

  const handleEditManager = (managerId: string) => {
    // Implement your edit logic here, for example, navigate to an edit page with the managerId
    console.log(`Edit manager with ID: ${managerId}`);
  };

  const handleDeleteManager = (managerId: string) => {
    // Implement your delete logic here, for example, send a DELETE request to the API
    console.log(`Delete manager with ID: ${managerId}`);
  };

  const handleOpenAddManagerForm = () => {
    openAddManagerForm();
  };

  const handleAddManager = (managerData: any) => {
    // Implement your logic to add a manager, for example, send a POST request to the API
    console.log('Adding manager:', managerData);
    // After successfully adding the manager, you can refresh the manager list
    fetchManagers();
    closeAddManagerForm();
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >

        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddManagerForm}
          style={{
            marginRight: '40%',
            marginTop: '0.5%',
            padding: '15px',
            backgroundColor: 'green',
          }}
        >
          Add Manager
        </Button>
      </Box>

      <Modal
        isOpen={isAddManagerModalOpen}
        onRequestClose={closeAddManagerForm}
        ariaHideApp={false}
        contentLabel="Add Manager"
        // Add your custom modal styles here if needed
      >
        <AddManagerForm open={isAddManagerModalOpen} onAddManager={handleAddManager} onClose={closeAddManagerForm} />
      </Modal>

      <ManagersList
        managers={managers}
        onEdit={handleEditManager}
        onDelete={handleDeleteManager}
      />
    </div>
  );
};

export default Managers;
