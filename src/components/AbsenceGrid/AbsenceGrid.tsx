import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import type { ExtendedAbsence } from '../DataLayer/types';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import SickIcon from '@mui/icons-material/Sick';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { Note, GridLayout } from './styles';

const columns: GridColDef[] = [
  { field: 'memberName', headerName: 'Name', width: 100, minWidth: 80, flex: 1 },
  {
    field: 'type',
    headerName: 'Type of Absence',
    width: 150,
    minWidth: 60,
    flex: 1,
    renderCell: (params) => {
      const icon =
        params.value === 'sickness' ? (
          <SickIcon />
        ) : params.value === 'vacation' ? (
          <LocalAirportIcon />
        ) : undefined;
      return <Chip label={params.value} icon={icon} variant="outlined" />;
    }
  },
  { field: 'period', headerName: 'Period', width: 200 },
  {
    field: 'memberNote',
    headerName: 'Member Note',
    width: 300,
    minWidth: 100,
    flex: 2,
    renderCell: (params) => (
      <Note>
        <Tooltip title={params.value}>
          <span>{params.value}</span>
        </Tooltip>
      </Note>
    )
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    minWidth: 100,
    flex: 1,
    renderCell: (params) => {
      const color =
        params.value === 'Requested'
          ? 'primary'
          : params.value === 'Confirmed'
          ? 'success'
          : 'error';
      return <Chip label={params.value} color={color} variant="outlined" />;
    }
  },
  {
    field: 'admitterNote',
    headerName: 'Admitter note',
    minWidth: 100,
    flex: 2,
    renderCell: (params) => (
      <Note>
        <Tooltip title={params.value}>
          <span>{params.value}</span>
        </Tooltip>
      </Note>
    )
  }
];

interface DataTableProps {
  absences: ExtendedAbsence[];
}

const DataTable = ({ absences }: DataTableProps) => {
  const rows: GridRowsProp = absences;
  return (
    <GridLayout>
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </GridLayout>
  );
};

export default DataTable;
