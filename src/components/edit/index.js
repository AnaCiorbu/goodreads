import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router'
import styles from './styles'

const EditBook = ({ classes, match }) => {
  const bookId = match.params.id
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Book Editing Form for book {bookId}</h1>
        </Paper>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles)(EditBook))
