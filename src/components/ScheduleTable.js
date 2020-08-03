import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0000FF",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: (props) =>
        props.type === "exam" ? "#e04141" : theme.palette.action.hover,
    },
    background: (props) =>
      props.type === "exam" ? "#b51d1d" : theme.palette.common.white,
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ScheduleTable(props) {
  const styles = useStyles();
  const rows = props.displayedCourses;

  return (
    <TableContainer component={Paper}>
      <Table className={styles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Weekday</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Professor</StyledTableCell>
            <StyledTableCell align="center">Groups</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow
              key={index}
              type={row.activityTypeCategory === "EXAM" ? "exam" : ""}
            >
              <StyledTableCell component="th" scope="row">
                {row.weekday}
              </StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="center">
                {row.activityType}
              </StyledTableCell>
              <StyledTableCell align="center">{row.professor}</StyledTableCell>
              <StyledTableCell align="center">{row.groups}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ScheduleTable;
