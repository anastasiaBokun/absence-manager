import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import type { ExtendedAbsence } from '../DataLayer/types';

const columns: GridColDef[] = [
  { field: 'memberName', headerName: 'Name', width: 150 },
  { field: 'type', headerName: 'Type of Absence', width: 150 },
  { field: 'period', headerName: 'Period', width: 200 },
  { field: 'memberNote', headerName: 'Member Note', width: 250 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'admitterNote', headerName: 'Admitter note', width: 250 }
];

interface DataTableProps {
  absences: ExtendedAbsence[];
}

const DataTable = ({ absences }: DataTableProps) => {
  const rows: GridRowsProp = absences;
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
    </div>
  );
};

export default DataTable;
