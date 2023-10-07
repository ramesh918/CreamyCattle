// AddManagerForm.tsx
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Input,
} from '@mui/material';
import { useSelector } from 'react-redux';

interface AddManagerFormProps {
  open: boolean;
  onClose: () => void;
  onAddManager: (managerData: any) => void;
}

const AddManagerForm: React.FC<AddManagerFormProps> = ({ open, onClose, onAddManager }) => {
  const [managerData, setManagerData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    adharNumber: '',
    email: '',
    adharImage: null, // Store the image file
    profilePic: null, // Store the image file
    adharImageURL: '', // Image URL after upload
    profilePicURL: '', // Image URL after upload
  });
  const token = useSelector((state: any) => state.auth.token);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setManagerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setManagerData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the selected file
      }));
    }
  };

  const handleAddManager = async () => {
    // Implement your logic to upload images and get image URLs
    const adharImageURL = await uploadImage(managerData.adharImage);
    const profilePicURL = await uploadImage(managerData.profilePic);

    const managerWithImages = {
      ...managerData,
      adharImageURL,
      profilePicURL,
    };

    onAddManager(managerWithImages);
    onClose();
  };

  // Implement a function to upload an image and return its URL
  const uploadImage = async (imageFile: File | null): Promise<string | null> => {
    if (!imageFile) {
      return null;
    }

    // Replace 'YOUR_IMAGE_UPLOAD_API' with the actual API endpoint for image upload
    const imageUploadApiUrl = 'http://localhost:4000/api/v1/image';

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch(imageUploadApiUrl, {
        method: 'POST',
        body: formData,
        headers:{
            auth: token
        }
      });

      if (response.ok) {
        const imageUrl = await response.text();
        return imageUrl;
      } else {
        console.error('Image upload failed:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Image upload failed:', error);
      return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Manager</DialogTitle>
      <DialogContent>
        <TextField
          name="username"
          label="Username"
          size="small"
          margin="dense"
          fullWidth
          onChange={handleChange}
          value={managerData.username}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          size="small"
          margin="dense"
          fullWidth
          onChange={handleChange}
          value={managerData.password}
        />
        <TextField
          name="firstName"
          label="First Name"
          size="small"
          margin="dense" 
          fullWidth
          onChange={handleChange}
          value={managerData.firstName}
        />
        <TextField
          name="lastName"
          label="Last Name"
          size="small"
          margin="dense"
          fullWidth
          onChange={handleChange}
          value={managerData.lastName}
        />
        <TextField
          name="adharNumber"
          label="Adhar Number"
          size="small"
          margin="dense"
          fullWidth
          onChange={handleChange}
          value={managerData.adharNumber}
        />
        <TextField
          name="email"
          label="Email"
          size="small"
          margin="dense"
          fullWidth
          onChange={handleChange}
          value={managerData.email}
        />
        <TextField
          name="adharImageURL"
          label="Adhar Image URL"
          size="small"
          margin="dense"
          fullWidth
          onChange={handleChange}
          value={managerData.adharImageURL}
        />
        <Input
          name="adharImage"
          size="small"
          margin="dense"
          type="file"
          onChange={handleFileChange}
        />
        <TextField
          name="profilePicURL"
          label="Profile Picture URL"
          fullWidth
          size="small"
          margin="dense"
          onChange={handleChange}
          value={managerData.profilePicURL}
        />
        <Input
          name="profilePic"
          type="file"
          size="small"
          margin="dense"
          onChange={handleFileChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddManager} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddManagerForm;
