import * as Yup from 'yup'

const validationSchema = Yup.object({
  authors: Yup.string('Enter authors').required('Authors are required'),
})

export default validationSchema
