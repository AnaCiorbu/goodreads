import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default props => {
  const {
    isSubmitting,
    handleSubmit,
    values: { authors, title },
    errors,
    handleChange,
    isValid,
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="authors"
        name="authors"
        label="Author"
        value={authors}
        helperText={errors.authors}
        error={Boolean(errors.authors)}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="title"
        name="title"
        label="Title"
        value={title}
        helperText={errors.title}
        error={Boolean(errors.title)}
        onChange={handleChange}
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? 'Submitting' : 'Submit'}
      </Button>
    </form>
  )
}
