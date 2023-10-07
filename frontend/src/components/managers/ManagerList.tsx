// ManagersList.tsx
import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import classes from "../sheds/ShedList.module.css";

interface Manager {
  _id: string;
  username: string;
  adharNumber: number;
  email: string;
  roleName: string;
  fullName: string;
}

interface ManagersListProps {
  managers: Manager[];
  onEdit: (managerId: string) => void;
  onDelete: (managerId: string) => void;
}

const ManagersList: React.FC<ManagersListProps> = ({
  managers,
  onEdit,
  onDelete,
}) => {
  return (
    <TableContainer
      component={Paper}
      className={classes.tableContainer}
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <Table className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeader}>FullName</TableCell>
            <TableCell className={classes.tableHeader}>Email</TableCell>
            <TableCell className={classes.tableHeader}>UserName</TableCell>
            <TableCell className={classes.tableHeader}>AdharNumber</TableCell>
            <TableCell className={classes.tableHeader}>RoleName</TableCell>
            <TableCell className={classes.tableHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {managers.map((manager: Manager) => (
            <TableRow key={manager._id}>
              <TableCell>{manager.fullName}</TableCell>
              <TableCell>{manager.email}</TableCell>
              <TableCell>{manager.username}</TableCell>
              <TableCell>{manager.adharNumber}</TableCell>
              <TableCell>{manager.roleName}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => onEdit(manager._id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => onDelete(manager._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManagersList;
