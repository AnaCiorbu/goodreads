import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router'
import Form from './form'
import validationSchema from './schema'
import { Formik } from 'formik'
import styles from './styles'
import { connect } from 'react-redux'
import { editBook } from './actions'

const EditBook = ({ classes, history, match, editBook }) => {
  const bookId = match.params.id
  const locationState = history.location.state
  const { book } = locationState ? locationState : {}
  const formHandler = values => editBook(`/books/${book.id}`, values, history)
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Book Editing Form for book id {bookId}</h1>
          <Formik
            initialValues={book}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                formHandler(values)
                setSubmitting(false)
              }, 50)
            }}
          >
            {fields => <Form {...fields} />}
          </Formik>
        </Paper>
      </div>
    </Fragment>
  )
}
const mapDispatchToProps = dispatch => ({
  editBook: (url, values, history) => dispatch(editBook(url, values, history)),
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(EditBook)))
